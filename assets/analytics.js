// Google Analytics 4 without cookies (docs/system/architecture.md, Website).
// Consent Mode stays "denied": Google gets cookieless pings and sets no cookie. There is no banner.
// An empty ID switches the analytics off.
(function () {
  const id = "G-JG7RD3W1Q2";
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied"
  });
  gtag("js", new Date());
  gtag("config", id);
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(s);
})();
