  function loadGoogleAnalytics(){
    document.querySelector('.analytics').innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'UA-162102461-1');
    `;
  }

const cookieContainer = document.querySelector('.cookies');
const cookieAccept = document.querySelector('#cookieAccept');
const cookieReject = document.querySelector('#cookieReject');

cookieAccept.addEventListener("click", () => {
    console.log('Cookies Accepted');
    cookieContainer.classList.remove("appear")
    localStorage.setItem("cookieBannerDisplayed", "true");
    loadGoogleAnalytics();
    location.reload();
});

cookieReject.addEventListener("click", () => {
    console.log('Cookies Rejected')
    cookieContainer.classList.remove("appear");
});

setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("appear")
    } else {
        loadGoogleAnalytics();
    }
}, 2000);