const pageLoad = document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('text-banner').className = 'slideDown';
    }, 1000);
  }, false);

const textBanner = document.getElementById('text-banner');
const bannerLink = document.getElementById('banner-link');

setInterval(() => {
    textBanner.style.backgroundColor = '#ffffff';
    textBanner.style.color = '#1d1d1f'
    textBanner.style.transition = '0.8s';
    bannerLink.style.color = '#0066cc';
}, 3000);


