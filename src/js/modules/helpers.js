export const getNotRemovableElements = (document) => Array.from([
    // Didomi
    ...document.getElementsByClassName('didomi-popup-open'),
    // PLO
    ...document.getElementsByClassName('plu-no-scroll'),
    // Quantcast
    ...document.getElementsByClassName('qc-cmp-ui-showing'),
    // Miscellaneous
    ...document.getElementsByClassName('_2LLC6zrbk-vsnF0seit6vi'),
    ...document.getElementsByClassName('cartMergeOnHomePage_page'),
    ...document.getElementsByClassName('clearfix fade'),
    ...document.getElementsByClassName('cli-barmodal-open'),
    ...document.getElementsByClassName('cookiesAccepted'),
    ...document.getElementsByClassName('gdpr'),
    ...document.getElementsByClassName('header'),
    ...document.getElementsByClassName('no-cookies'),
    ...document.getElementsByClassName('noScroll'),
]);

export const getRemovableElements = (document) => Array.from([
    // AZA
    document.querySelector('aza-cookie-message'),
    // BLQ
    document.getElementById('blq-global'),
    // CC
    ...document.getElementsByClassName('cc_banner'),
    ...document.getElementsByClassName('cc_container'),
    ...document.getElementsByClassName('cc-banner'),
    ...document.getElementsByClassName('cc-bottom'),
    ...document.getElementsByClassName('cc-cookie-consent-banner-modal'),
    ...document.getElementsByClassName('cc-theme-block'),
    ...document.getElementsByClassName('cc-type-info'),
    ...document.getElementsByClassName('cc-window'),
    // Civic
    document.getElementById('ccc'),
    document.getElementById('ccc-notify'),
    document.getElementById('ccc-overlay'),
    // CKY
    document.getElementById('cky-consent'),
    ...document.getElementsByClassName('cky-consent-bar'),
    // Clym
    ...document.getElementsByClassName('clym-widget'),
    document.getElementById('clym-widget-privacy-frame'),
    // Consent Management Provider
    document.getElementById('cmpbox'),
    document.getElementById('cmpbox2'),
    document.getElementById('cmpContainer'),
    // Cookie-Script
    document.getElementById('cookiescript_injected'),
    // cookieBAR
    document.getElementById('cookie-bar'),
    document.getElementById('cookie-bar-prompt'),
    // Cookie Information
    document.getElementById('coiOverlay'),
    // crowdy.ai
    document.getElementById('crowdy-flyout'),
    document.getElementById('crowdy-privacy-snippet'),
    document.getElementById('crowdy-privacy-widget'),
    document.getElementById('crowdy-privacy-widget-background'),
    // Cybot
    ...document.getElementsByClassName('CybotCookiebotDialog'),
    ...document.getElementsByName('CybotCookiebotDialog'),
    document.getElementById('CybotCookiebotDialog'),
    document.getElementById('CybotCookiebotDialogBodyUnderlay'),
    // Didomi
    document.getElementById('didomi-host'),
    document.getElementById('didomi-notice'),
    document.getElementById('didomi-popup'),
    // eni.com
    document.getElementById('eni-cookie-banner'),
    // ENS
    document.getElementById('ensNotifyBanner'),
    // ePrivacy
    document.getElementById('eprivacyCookie'),
    document.getElementById('ePrivacyDisclaimer'),
    // Evidon
    document.getElementById('_evidon_banner'),
    document.getElementById('_evidon-barrier-wrapper'),
    ...document.getElementsByClassName('evidon-banner'),
    // Facebook
    ...document.getElementsByClassName('fbPageBanner'),
    // Google
    document.getElementById('cookie-statement'),
    // HS
    document.getElementById('hs-eu-cookie-confirmation'),
    // iubenda
    document.getElementById('iubenda-cs-banner'),
    ...document.getElementsByClassName('iubenda-cs-bottom'),
    ...document.getElementsByClassName('iubenda-cs-container'),
    ...document.getElementsByClassName('iubenda-cs-default'),
    // Moove
    document.getElementById('moove_gdpr_cookie_info_bar'),
    // NHS
    document.getElementById('nhsuk-cookie-banner'),
    // OneTrust
    document.getElementById('onetrust-consent-sdk'),
    // Optanon
    document.getElementById('optanon'),
    ...document.getElementsByClassName('optanon-alert-box-wrapper'),
    // PLO
    ...document.getElementsByClassName('plo-cookie-overlay'),
    ...document.getElementsByClassName('plo-overlay'),
    // Quantcast
    ...document.getElementsByClassName('qc-cmp-ui-container'),
    // Seers
    document.getElementById('seers-cx-banner'),
    // Termly
    document.getElementById('consent'),
    // Twitter
    ...document.getElementsByClassName('css-1dbjc4n r-aqfbo4 r-1p0dtai r-1d2f490 r-12vffkv r-1xcajam r-zchlnj'),
    // UniConsent
    document.getElementById('uniccmp'),
    // Wordpress
    document.getElementById('catapult-cookie-bar'),
    ...document.getElementsByClassName('wordpress-gdpr-popup'),
    // Miscellaneous
    ...document.getElementsByClassName('_1ouSF3xnwUjIOquxopuxSZ'),
    document.getElementById('_iph_cp_popup'),
    document.getElementById('_psaihm_main_div'),
    document.getElementById('_psaihm_overlay'),
    ...document.getElementsByClassName('ad-banner-container'),
    document.getElementById('au_cookiesalert'),
    document.getElementById('ac-Banner'),
    document.getElementById('acceptcookies'),
    ...document.getElementsByClassName('alert--cookie'),
    ...document.getElementsByClassName('alert-cookies'),
    ...document.getElementsByClassName('alertbar alertbar-bottom jsEnabled'),
    document.getElementById('air_cookielaw_container'),
    ...document.getElementsByClassName('announcements'),
    ...document.getElementsByClassName('app_gdpr--2k2uB'),
    ...document.getElementsByClassName('app_gdpr--3hGmb'),
    ...document.getElementsByClassName('argpd-cookies'),
    ...document.getElementsByClassName('bankid-cookie'),
    document.getElementById('banner-cookie'),
    document.getElementById('banner-cookies'),
    document.getElementById('banner-spacer'),
    document.getElementById('barraaceptacion'),
    ...document.getElementsByClassName('blockdisclaimer'),
    document.getElementById('blockdisclaimer'),
    document.getElementById('bonaCookies'),
    ...document.getElementsByClassName('branch-journeys-top'),
    ...document.getElementsByClassName('c-cookie-bar'),
    ...document.getElementsByClassName('c-cookie-policy'),
    ...document.getElementsByClassName('c-policy'),
    document.getElementById('cajacookies'),
    document.getElementById('capa-cookies'),
    document.getElementById('cb-cookieoverlay'),
    ...document.getElementsByClassName('cc-cookies'),
    document.getElementById('cconsent-bar'),
    document.getElementById('cmp-faktor-io-parent'),
    document.getElementById('cl_modal'),
    ...document.getElementsByClassName('cli-modal-backdrop'),
    document.getElementById('cNag'),
    ...document.getElementsByClassName('codecontent'),
    ...document.getElementsByClassName('consent-banner'),
    document.getElementById('consent_blackbar'),
    document.getElementById('container-cookie'),
    document.getElementById('container-screen'),
    ...document.getElementsByClassName('cookie__wrapper'),
    ...document.getElementsByClassName('cookie_bar'),
    ...document.getElementsByClassName('cookie_box'),
    document.getElementById('cookie_box'),
    ...document.getElementsByClassName('cookie_message'),
    ...document.getElementsByClassName('cookie-banner'),
    ...document.getElementsByClassName('cookie-bar'),
    ...document.getElementsByClassName('cookie-collapsible'),
    ...document.getElementsByClassName('cookie-consent'),
    document.getElementById('cookie-consent-banner'),
    ...document.getElementsByClassName('cookie-container'),
    ...document.getElementsByClassName('cookie-dialogue'),
    ...document.getElementsByClassName('cookie-disclaimer'),
    document.getElementById('cookie-div'),
    document.getElementById('cookie-holder'),
    ...document.getElementsByClassName('cookie-info-container'),
    ...document.getElementsByClassName('cookie-info-panel'),
    document.getElementById('cookie-info-wrapper'),
    document.getElementById('cookie-law-info-again'),
    document.getElementById('cookie-law-info-bar'),
    ...document.getElementsByClassName('cookie-message'),
    ...document.getElementsByClassName('cookie-message-top'),
    ...document.getElementsByClassName('cookie-notice'),
    document.getElementById('cookie-notice'),
    ...document.getElementsByClassName('cookie-permission'),
    ...document.getElementsByClassName('cookie-policy'),
    document.getElementById('cookie-policy'),
    document.getElementById('cookie-policy-consent'),
    ...document.getElementsByClassName('cookie-policy-container'),
    ...document.getElementsByClassName('cookie-prompter'),
    document.getElementById('cookie-settings'),
    document.getElementById('cookies-use-alert'),
    ...document.getElementsByClassName('cookie-warning'),
    document.getElementById('cookie-warning'),
    document.getElementById('cookie1'),
    document.getElementById('cookieAcceptContainer'),
    document.getElementById('cookieAcknowledgement'),
    ...document.getElementsByClassName('cookiealert'),
    document.getElementById('cookieBar'),
    ...document.getElementsByClassName('cookiebar'),
    ...document.getElementsByClassName('cookiebox'),
    document.getElementById('cookiebox'),
    document.getElementById('cookieCompliance'),
    document.getElementById('cookieConsentModal'),
    ...document.getElementsByClassName('cookieContainer'),
    ...document.getElementsByClassName('cookiedisclaimer'),
    ...document.getElementsByClassName('cookiesInfo'),
    document.getElementById('cookieLayer'),
    ...document.getElementsByClassName('cookielegal'),
    document.getElementById('cookieMessage'),
    document.getElementById('cookiemessage-root'),
    document.getElementById('cookieMessageWrapper'),
    document.getElementById('cookieNotice'),
    document.getElementById('cookienotif'),
    document.getElementById('cookieNotificationBannerWrapper'),
    document.getElementById('cookiePlaceholder'),
    document.getElementById('CookieReportsBanner'),
    ...document.getElementsByClassName('cookies'),
    document.getElementById('cookies'),
    ...document.getElementsByClassName('cookies__content'),
    ...document.getElementsByClassName('cookies__consent'),
    ...document.getElementsByClassName('cookies__info'),
    ...document.getElementsByClassName('cookies__layover'),
    ...document.getElementsByClassName('cookies__wrapper'),
    ...document.getElementsByClassName('cookies-alert'),
    document.getElementById('cookies-consentimiento'),
    ...document.getElementsByClassName('cookies-notice'),
    ...document.getElementsByClassName('cookies-alert'),
    document.getElementById('cookies-consentimiento'),
    document.getElementById('cookiesInfo'),
    ...document.getElementsByClassName('cookiesms'),
    document.getElementById('cookpoly'),
    document.getElementById('cp-dialog'),
    document.getElementById('cp-overlay'),
    document.querySelector('[data-component-name="cookieNotification"]'),
    document.querySelector('[data-etsy-promo-banner]'),
    document.querySelector('[data-gdpr-consent-prompt]'),
    document.querySelector('[data-gdpr-consent-prompt-open-automatically]'),
    document.querySelector('[data-gdpr-single-choice-overlay]'),
    document.querySelector('[data-id="cookie-policy"]'),
    document.querySelector('[data-type="cookie-modal"]'),
    document.querySelector('[data-view="components/header"]'),
    ...document.getElementsByClassName('dimmed'),
    document.getElementById('div_bar_cookies_info'),
    document.getElementById('div-gpt-ad-1534233551293-0'),
    document.getElementById('divCookie'),
    document.getElementById('eads-super-banner'),
    document.querySelector('epaas-consent-drawer-shell'),
    document.getElementById('eu-cookie-law'),
    ...document.getElementsByClassName('eupopup-container'),
    document.getElementById('footer_tc_privacy'),
    ...document.getElementsByClassName('gdpr'),
    document.getElementById('gdpr-banner'),
    ...document.getElementsByClassName('gdpr-consent'),
    document.getElementById('gdpr-consent'),
    ...document.getElementsByClassName('gdpr-eu'),
    ...document.getElementsByClassName('fot-fixd'),
    document.getElementById('global-cookie-message'),
    ...document.getElementsByClassName('grp-header__cookiedisclaimer'),
    document.getElementById('headerTopTracking'),
    document.getElementById('iFrame1'),
    document.getElementById('informations-cookies'),
    ...document.getElementsByClassName('js-ad-banner-container'),
    ...document.getElementsByClassName('js-cookie-consent'),
    ...document.getElementsByClassName('js-cookies'),
    document.getElementById('js-gdpr-consent-banner'),
    ...document.getElementsByClassName('js-personalInformationNotice'),
    ...document.getElementsByClassName('js-policy'),
    ...document.getElementsByClassName('m-privacy-consent'),
    ...document.getElementsByClassName('m1-footer-messages'),
    document.getElementById('mktg_Cookie_Wrap'),
    ...document.getElementsByClassName('modal-backdrop'),
    document.getElementById('modal-consent'),
    ...document.getElementsByClassName('msg-tray'),
    ...document.getElementsByClassName('msg-tray--cookie'),
    document.getElementById('msgTray_0'),
    ...document.getElementsByClassName('mw-cookiewarning-container'),
    ...document.getElementsByClassName('no-print'),
    document.getElementById('notice-cookie-block'),
    ...document.getElementsByClassName('notification-banner'),
    ...document.getElementsByClassName('notification-LoVQsSOU'),
    ...document.getElementsByClassName('notifications-bar__info-message--cookie'),
    ...document.getElementsByClassName('nr-cookie-notification'),
    ...document.getElementsByClassName('pam'),
    document.getElementById('policy'),
    document.getElementById('privacy-consent'),
    ...document.getElementsByClassName('Root__gdprBanner___13G_T'),
    document.getElementById('scms-cc-cookie-bar'),
    ...document.getElementsByClassName('scms-cookie-control'),
    document.getElementById('sd-cmp'),
    ...document.getElementsByClassName('security-policy'),
    document.getElementById('sliding-popup'),
    document.getElementById('sncmp-container'),
    document.getElementById('softMessages-list'),
    ...document.getElementsByClassName('softMessages-list'),
    ...document.getElementsByClassName('t3-cookie-notice'),
    document.getElementById('t3CookieNotice'),
    document.getElementById('tarteaucitronRoot'),
    document.getElementById('thp_notf_div'),
    document.getElementById('u_0_1'),
    ...document.getElementsByClassName('uk-cookie-popup'),
    document.getElementById('ukCookiePopup'),
    document.getElementById('usercentrics-button'),
    document.getElementById('userConsent'),
    document.getElementById('vscookieAlertCont'),
    ...document.getElementsByClassName('widget_cookies'),
    document.getElementById('widget_eu_cookie_law_widget'),
    document.querySelector('ytd-consent-bump-renderer'),
]);
