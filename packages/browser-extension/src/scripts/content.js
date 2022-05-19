/**
 * @description Array of selectors
 * @type {string[]}
 */

const classes = [];

/**
 * @description Shortcut to send messages to background script
 * @type {void}
 */

const dispatch = chrome.runtime.sendMessage;

/**
 * @description Array of skips to skip
 * @type {string[]}
 */

const skips = [];

/**
 * @description Array of instructions
 * @type {string[]}
 */

const fixes = [];

/**
 * @description Hostname
 */

const hostname = document.location.hostname.split('.').slice(-2).join('.');

/**
 * @description Options provided to observer
 * @type {MutationObserverInit}
 */

const options = { childList: true, subtree: true };

/**
 * @description Is consent preview page?
 */

const preview = hostname.startsWith('consent.') || hostname.startsWith('myprivacy.');

/**
 * @description Selectors list
 * @type {string[]}
 */

const selectors = [];

/**
 * @description Target provided to observer
 */

const target = document.body || document.documentElement;

/**
 * @description Checks if node element is removable
 * @param {any} node
 * @returns {boolean}
 */

const check = (node) =>
  node instanceof HTMLElement &&
  node.parentElement &&
  !['BODY', 'HTML'].includes(node.tagName) &&
  !(node.id && ['APP', 'ROOT'].includes(node.id.toUpperCase?.())) &&
  node.matches(selectors);

/**
 * @description Cleans DOM
 * @param {HTMLElement[]} nodes
 * @returns {void}
 */

const clean = (nodes) => nodes.filter(check).forEach((node) => (node.outerHTML = ''));

/**
 * @description Fixes scroll issues
 */

const fix = () => {
  if (skips.length && !skips.includes(hostname)) {
    for (const item of [document.body, document.documentElement]) {
      item?.classList.remove(...classes);
      item?.style.setProperty('position', 'initial', 'important');
      item?.style.setProperty('overflow-y', 'initial', 'important');
    }
  }

  for (const fix of fixes) {
    const [match, selector, action, property] = fix.split('##');

    if (hostname.includes(match)) {
      switch (action) {
        case 'click': {
          const node = document.querySelector(selector);
          node?.click();
          break;
        }
        case 'remove': {
          const node = document.querySelector(selector);
          node?.style?.removeProperty(property);
          break;
        }
        case 'reset': {
          const node = document.querySelector(selector);
          node?.style?.setProperty(property, 'initial', 'important');
          break;
        }
        case 'resetAll': {
          const nodes = document.querySelectorAll(selector);
          nodes.forEach((node) => node?.style?.setProperty(property, 'initial', 'important'));
          break;
        }
        default:
          break;
      }
    }
  }
};

/**
 * @description Mutation Observer instance
 * @type {MutationObserver}
 */

const observer = new MutationObserver((mutations, instance) => {
  const nodes = mutations.map((mutation) => Array.from(mutation.addedNodes)).flat();

  instance.disconnect();
  fix();
  if (!preview && selectors.length) clean(nodes);
  instance.observe(target, options);
});

/**
 * @description Cleans DOM again after all
 * @listens document#readystatechange
 */

document.addEventListener('readystatechange', () => {
  dispatch({ hostname, type: 'GET_CACHE' }, null, async ({ enabled }) => {
    if (document.readyState === 'complete' && enabled && !preview) {
      const nodes = selectors.length ? Array.from(document.querySelectorAll(selectors)) : [];

      fix();
      clean(nodes);
      setTimeout(() => clean(nodes), 2000);
    }
  });
});

/**
 * @description Fix bfcache issues
 * @listens window#unload
 */

window.addEventListener('unload', () => {});

/**
 * @description Setups everything and starts to observe if enabled
 */

dispatch({ hostname, type: 'GET_CACHE' }, null, ({ enabled }) => {
  dispatch({ type: 'ENABLE_POPUP' });

  if (enabled) {
    dispatch({ type: 'GET_DATA' }, null, (data) => {
      classes.push(...data.classes);
      fixes.push(...data.fixes);
      options.attributeFilter = data.attributes;
      selectors.push(...data.selectors);
      skips.push(...data.skips);
      observer.observe(target, options);
      dispatch({ type: 'ENABLE_ICON' });
    });
  }
});
