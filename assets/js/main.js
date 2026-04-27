import { profile } from "./profile-data.js";

const renderLinks = () => {
    const heroLinks = document.querySelector("#hero-links");

    heroLinks.innerHTML = profile.links
        .map(({ href, label }) => `<a class="button-link" href="${href}" target="_blank" rel="noreferrer">${label}</a>`)
        .join("");
};

const renderHighlights = () => {
    const highlights = document.querySelector("#highlights");

    highlights.innerHTML = profile.highlights
        .map(({ value, label }) => `<div><dt>${value}</dt><dd>${label}</dd></div>`)
        .join("");
};

const renderAbout = () => {
    const about = document.querySelector("#about");

    about.innerHTML = profile.about.map((paragraph) => `<p>${paragraph}</p>`).join("");
};

const renderExperience = () => {
    const experienceList = document.querySelector("#experience-list");

    experienceList.innerHTML = profile.experience
        .map(
            ({ company, role, period, points }) => `
                <article class="timeline__item">
                    <div class="timeline__body">
                        <p class="timeline__period">${period}</p>
                        <h3 class="timeline__title">${role}</h3>
                        <p class="timeline__company">${company}</p>
                        <ul class="timeline__list">
                            ${points.map((point) => `<li>${point}</li>`).join("")}
                        </ul>
                    </div>
                </article>
            `
        )
        .join("");
};

const renderSkills = () => {
    const skillsList = document.querySelector("#skills-list");

    skillsList.innerHTML = profile.skills.map((skill) => `<span class="skill-chip">${skill}</span>`).join("");
};

const renderContact = () => {
    const contactList = document.querySelector("#contact-list");

    contactList.innerHTML = profile.contact
        .map(
            ({ label, title, body, href, text }) => `
                <article class="contact-card">
                    <span class="contact-card__label">${label}</span>
                    <h3>${title}</h3>
                    <p>${body}</p>
                    <p><a href="${href}" target="_blank" rel="noreferrer">${text}</a></p>
                </article>
            `
        )
        .join("");
};

renderLinks();
renderHighlights();
renderAbout();
renderExperience();
renderSkills();
renderContact();