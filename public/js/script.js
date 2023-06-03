loadScript(
  "https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID",
  () => {
    // FIXME
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "YOUR_GOOGLE_ANALYTICS_ID"); // FIXME
  }
);

function loadScript(src, callback) {
  let s, r, t;
  r = false;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.src = src;
  s.async = true;
  s.onload = s.onreadystatechange = function () {
    if (!r && (!this.readyState || this.readyState == "complete")) {
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
}
