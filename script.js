window.addEventListener('message', function(event) {
    let item = event.data;

    // Listen for the updateBanner action
    if (item.action === "updateBanner") {
        document.getElementById('main-banner').src = item.bannerLink;
        document.documentElement.style.setProperty('--main-red', `rgb(${item.bannerColor})`);
    }

    // Toggle UI visibility
    if (item.action === "setVisible") {
        document.getElementById('app-container').style.display = item.show ? 'flex' : 'none';
    }
});