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

// Darkmode
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Gespeicherte Wahl beim Laden wiederherstellen
if (localStorage.getItem("theme") === "dark") {
    root.classList.add("dark");
}

// Beim Klick umschalten und speichern
if (toggle) {
    toggle.addEventListener("click", () => {
        root.classList.toggle("dark");
        localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    });
}