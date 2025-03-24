function switchLanguage(lang) {
  const translations = {
    de: {
      title: "Hallo, ich bin Jonas!",
      intro:
        "Ich bin 25 Jahre alt, in München aufgewachsen und bringe mir derzeit selbstständig das Programmieren bei. Mein Ziel ist es, eine Ausbildung als Fachinformatiker für Anwendungsentwicklung zu absolvieren. Aktuell konzentriere ich mich auf Web Development und plane als Nächstes, mit Python durchzustarten.",
      skillsTitle: "Meine Fähigkeiten",
      projectsTitle: "Meine aktuellen Projekte",
      project1Title: "Paintings",
      project1Desc:
        "Paintings ist eine Sammlung von Kritzeleien, die zwischen 2020 und 2023 hauptsächlich mit MS Paint erstellt wurden.",
      project2Title: "OwO Music Player",
      project2Desc:
        "Ein Musik-Player, geschrieben in HTML, CSS und JS. Beispiel-Website mit meinen eigenen Songs.",
      skills: ["HTML", "CSS", "JavaScript", "Git & GitHub"],
    },
    en: {
      title: "Hello, I'm Jonas!",
      intro:
        "I'm 25 years old, grew up in Munich, and am currently teaching myself programming. My goal is to start an apprenticeship as an application developer. I'm currently focusing on web development and plan to dive into Python next.",
      skillsTitle: "My Skills",
      projectsTitle: "My Current Projects",
      project1Title: "Paintings",
      project1Desc:
        "Paintings is a collection of doodles created mainly with MS Paint between 2020 and 2023.",
      project2Title: "OwO Music Player",
      project2Desc:
        "A music player built with HTML, CSS, and JS. Example site featuring my own songs.",
      skills: ["HTML", "CSS", "JavaScript", "Git & GitHub"],
    },
  };

  // Look up the translations for the selected language
  const t = translations[lang];
  // Update the text content of the elements with the corresponding translations
  for (const key in t) {
    if (t.hasOwnProperty(key) && key !== "skills") {
      const element = t[key];
      // The elementId is the key prefixed with "translated-" to match the id of the elements in the HTML
      const elementId = "translated-" + key;
      const el = document.getElementById(elementId);
      if (el) {
        // Replace the text content of the element with the translation
        el.textContent = element;
      } else {
        console.warn(`Element with id ${elementId} not found`);
      }
    }
  }

  const skillsList = document.querySelector(".skills ul");
  skillsList.innerHTML = t.skills.map((skill) => `<li>${skill}</li>`).join("");
}

window.onload = () => {
  document.getElementById("lang-en").onclick = () => switchLanguage("en");
  document.getElementById("lang-de").onclick = () => switchLanguage("de");
  // Get the user's preferred language from the browser
  const userLang = navigator.language || navigator.userLanguage;
  // If the user's language is German, switch to German
  // Otherwise, switch to English
  switchLanguage(userLang.startsWith("de") ? "de" : "en");
};
