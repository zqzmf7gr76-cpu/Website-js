// --- Γενικές Ρυθμίσεις Body ---
document.body.style.backgroundColor = "#1e0d47";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0px";
document.body.style.color = "white";
document.body.style.lineHeight = "1.6";
document.body.style.boxSizing = "border-box";
const header = document.createElement("header");
header.style.backgroundColor = "#1e0d47";
header.style.color = "white";
header.style.position = "fixed";
header.style.padding = "15px 20px";
header.style.textAlign = "center";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-around";
header.style.width = "100%";
const title = document.createElement("h1");
title.textContent = "Portofolio UI/UX";
title.style.margin = "0";
title.style.fontSize = "28px";
header.appendChild(title);
const nav = document.createElement("nav");
nav.style.marginTop = "15px";
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.alignItems = "center";
nav.style.flexWrap = "wrap";
nav.style.textAlign = "center";
nav.style.listStyle = "none";
nav.style.padding = "0";
nav.style.margin = "0";
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.gap = "10px";
nav.style.marginTop = "10px";
nav.innerHTML = `
    <a href="#" style="color: white; text-decoration: none; font-weight: bold;">Home</a>
    <a href="#" style="color: white; text-decoration: none; font-weight: bold;">About</a>
    <a href="#" style="color: white; text-decoration: none; font-weight: bold;">Project</a>
    <a href="#" style="color: white; text-decoration: none; font-weight: bold;">Contact</a>
`;
header.appendChild(nav);
// --- Social Media Buttons ---
const socialMedia = document.createElement("div");
socialMedia.style.display = "flex";
socialMedia.style.justifyContent = "center";
socialMedia.style.gap = "10px";
socialMedia.style.marginTop = "15px";

const createSocialBtn = (text, color) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.backgroundColor = color;
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "8px 15px";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.style.fontWeight = "bold";
    return btn;
};
const instagramButton = createSocialBtn("Instagram", "#ff9800");
const facebookButton = createSocialBtn("Facebook", "#3b5998");
const linkedinButton = createSocialBtn("Linkedin", "#0077b5");
socialMedia.append(instagramButton, facebookButton, linkedinButton);
header.appendChild(socialMedia);
const signUpButton = document.createElement("button");
signUpButton.textContent = "Sign Up";
signUpButton.style.backgroundColor = "#ff9800";
signUpButton.style.color = "white";
signUpButton.style.border = "none";
signUpButton.style.padding = "10px 20px";
signUpButton.style.marginTop = "15px";
signUpButton.style.borderRadius = "4px";
signUpButton.style.cursor = "pointer";
signUpButton.style.fontWeight = "bold";
header.appendChild(signUpButton);

document.body.appendChild(header);

// --- Hero Section (Content) ---
const content = document.createElement("div");
content.style.padding = "80px 20px";
content.style.textAlign = "center";
content.innerHTML = `
    <h2 style="font-size: 40px; margin-bottom: 10px;">Hello I'm Lucas</h2>
    <p style="font-size: 20px; opacity: 0.8;">FrontEnd Developer and WebDesigner - Video Game Developer</p>
`;

const contentButton = document.createElement("button");
contentButton.textContent = "View Content";
contentButton.style.backgroundColor = "transparent";
contentButton.style.color = "white";
contentButton.style.border = "2px solid white";
contentButton.style.padding = "12px 30px";
contentButton.style.marginTop = "25px";
contentButton.style.borderRadius = "4px";
contentButton.style.cursor = "pointer";
contentButton.style.fontWeight = "bold";
contentButton.style.transition = "all 0.3s";

contentButton.addEventListener("mouseover", () => {
    contentButton.style.backgroundColor = "white";
    contentButton.style.color = "#1e0d47";
});
contentButton.addEventListener("mouseout", () => {
    contentButton.style.backgroundColor = "transparent";
    contentButton.style.color = "white";
});

content.appendChild(contentButton);
document.body.appendChild(content);

// --- Skills Section ---
const main = document.createElement("main");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.flexWrap = "wrap";
main.style.padding = "40px";

const skills = [
    { src: "https://img.icons8.com/?size=100&id=20909&format=png", alt: "HTML" },
    { src: "https://img.icons8.com/?size=100&id=108784&format=png", alt: "JavaScript" },
    { src: "https://img.icons8.com/?size=100&id=21278&format=png", alt: "CSS" }
];

skills.forEach(item => {
    const card = document.createElement("div");
    card.style.margin = "15px";
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.style.width = "80px";
    img.style.transition = "transform 0.3s";
    img.addEventListener("mouseover", () => img.style.transform = "scale(1.2)");
    img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
    card.appendChild(img);
    main.appendChild(card);
});
document.body.appendChild(main);
// --- Frameworks Title ---
const titleHero = document.createElement("h2");
titleHero.textContent = "Frameworks";
titleHero.style.textAlign = "center";
titleHero.style.fontSize = "36px";
document.body.appendChild(titleHero);

// --- Frameworks Section ---
const heroSection = document.createElement("section");
heroSection.style.display = "flex";
heroSection.style.justifyContent = "center";
heroSection.style.gap = "30px";
heroSection.style.padding = "20px";

const frameworks = [
    { src: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png", alt: "Tailwind" },
    { src: "https://img.icons8.com/?size=100&id=Ax6abTiOhdzW&format=png", alt: "React" },
    { src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png", alt: "Bootstrap" }
];

frameworks.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.style.width = "70px";
    img.style.transition = "transform 0.3s";
    img.addEventListener("mouseover", () => img.style.transform = "rotate(10deg) scale(1.1)");
    img.addEventListener("mouseout", () => img.style.transform = "rotate(0) scale(1)");
    heroSection.appendChild(img);
});
document.body.appendChild(heroSection);

// --- Projects Section ---
const titleHero1 = document.createElement("h2");
titleHero1.textContent = "Projects";
titleHero1.style.textAlign = "center";
titleHero1.style.fontSize = "36px";
titleHero1.style.marginTop = "50px";
document.body.appendChild(titleHero1);

const ProjectContainer = document.createElement("div");
ProjectContainer.style.display = "flex";
ProjectContainer.style.justifyContent = "center";
ProjectContainer.style.flexWrap = "wrap";
ProjectContainer.style.gap = "20px";
ProjectContainer.style.padding = "40px";

const projectsList = [
    "https://images.unsplash.com/vector-1762541291924-8b1ba27cd39c?q=80&w=500",
    "https://images.unsplash.com/vector-1762541291924-8b1ba27cd39c?q=80&w=500",
    "https://images.unsplash.com/vector-1762541291924-8b1ba27cd39c?q=80&w=500"
];

projectsList.forEach(src => {
    const card = document.createElement("div");
    card.style.backgroundColor = "rgba(255,255,255,0.05)";
    card.style.padding = "20px";
    card.style.borderRadius = "12px";
    card.style.textAlign = "center";
    card.style.width = "300px";

    const img = document.createElement("img");
    img.src = src;
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    img.style.marginBottom = "15px";

    const btn = document.createElement("button");
    btn.textContent = "View the project";
    btn.style.backgroundColor = "#ff9800";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "10px 20px";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.style.fontWeight = "bold";

    card.appendChild(img);
    card.appendChild(btn);
    ProjectContainer.appendChild(card);
});
document.body.appendChild(ProjectContainer);

// --- Contact Section ---
const titleHero2 = document.createElement("h2");
titleHero2.textContent = "Contact Me";
titleHero2.style.textAlign = "center";
titleHero2.style.fontSize = "32px";
titleHero2.style.marginTop = "50px";
document.body.appendChild(titleHero2);

const form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.gap = "15px";
form.style.paddingBottom = "50px";

const inputName = document.createElement("input");
inputName.placeholder = "Name";
const inputEmail = document.createElement("input");
inputEmail.placeholder = "Email";
const inputMessage = document.createElement("textarea");
inputMessage.placeholder = "Your Message";

[inputName, inputEmail, inputMessage].forEach(el => {
    el.style.width = "350px";
    el.style.padding = "12px";
    el.style.borderRadius = "4px";
    el.style.border = "1px solid rgba(255,255,255,0.2)";
    el.style.backgroundColor = "rgba(255,255,255,0.1)";
    el.style.color = "white";
});
inputMessage.style.height = "100px";

const submitButton = document.createElement("button");
submitButton.textContent = "Send Message";
submitButton.style.backgroundColor = "#ff9800";
submitButton.style.color = "white";
submitButton.style.border = "none";
submitButton.style.padding = "12px 40px";
submitButton.style.borderRadius = "4px";
submitButton.style.cursor = "pointer";
submitButton.style.fontWeight = "bold";

form.append(inputName, inputEmail, inputMessage, submitButton);
document.body.appendChild(form);
//footer page
const footer = document.createElement("footer");
footer.style.backgroundColor = "#1e0d47";
footer.style.padding = "20px";
footer.style.textAlign = "center";
footer.style.color = "white";
footer.style.marginTop = "50px";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.flexDirection = "column";
footer.style.gap = "10px";
footer.style.bottom = "0";
footer.style.fontFamily = "Arial, sans-serif";
footer.style.fontSize = "15px";
footer.innerHTML = `
    <p>&copy; Frontend Developer and WebDesigner - Video Game Developer</p>
    <p>όλα τα δικαιώματα κατοχυρωμένα</p>
`;

document.body.appendChild(footer);

