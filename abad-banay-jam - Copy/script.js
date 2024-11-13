document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

document.getElementById("languageToggle").addEventListener("click", function () {
    const currentLang = localStorage.getItem("language") === "fa" ? "en" : "fa";
    localStorage.setItem("language", currentLang);
    updateLanguage(currentLang);
    this.textContent = currentLang === "fa" ? "FA" : "EN";
});

const translations = {
    "home": { "en": "Home", "fa": "خانه" },
    "about": { "en": "About Us", "fa": "درباره ما" },
    "services": { "en": "Services", "fa": "خدمات" },
    "contact": { "en": "Contact Us", "fa": "تماس با ما" },
    "company": { "en": "Abad Banay Jam", "fa": "آباد بنای جم" },
    "whatWeDo": { "en": "What We Do", "fa": "خدمات ما" },
    "location": { "en": "Our Location", "fa": "مکان ما" },
    "contactInfo": { "en": "Contact Information", "fa": "اطلاعات تماس" }
};

function updateLanguage(language) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[key] && translations[key][language]) {
            el.textContent = translations[key][language];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", savedTheme);
    const savedLanguage = localStorage.getItem("language") || "en";
    updateLanguage(savedLanguage);
});
