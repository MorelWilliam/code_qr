
document.getElementsByClassName("shareButton").addEventListener("click", function() {
    // URL de partage d'Instagram avec le message personnalisé
    var shareUrl = "https://www.instagram.com/share?url=" + encodeURIComponent(window.location.href) + "&amp;title=" + encodeURIComponent("Message personnalisé ici");

    // Ouvrir la fenêtre de partage
    window.open(shareUrl, "_blank");
});
