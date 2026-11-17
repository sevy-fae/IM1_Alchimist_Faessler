// #... aus der URL entfernen
if (location.hash) {
    history.replaceState(null, "", location.pathname);
}

// Anker-Links smooth scrollen, ohne #... in die URL zu schreiben
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const ziel = document.querySelector(link.getAttribute("href"));
        if (!ziel) return;
        event.preventDefault();
        ziel.scrollIntoView({ behavior: "smooth" });
    });
});