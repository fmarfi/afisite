const google_logo = document.getElementById("about");

google_logo.onclick = () => {
    window.scrollBy({
        top: 800,
        left: 0,
        behavior: "smooth"
    });
}