//app.js
//Καλώς ήρθατε στο πρώτο μου site φτιαγμένο αποκλειστικά με JavaScript!
// Το παρακάτω script δημιουργεί μια απλή ιστοσελίδα με navbar, hero section, κύριο περιεχόμενο και footer.
// Όλο το περιεχόμενο και το στυλ δημιουργούνται δυναμικά μέσω JavaScript.
//Ο κώδικας είναι διαθέσιμος για επεργασία και μάθηση!.
//Global styles
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#111";
document.body.style.color = "#ddd";
//navbar
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.padding = "20px 25px";
nav.style.background = "#111";
nav.style.borderBottom = "1px solid #333";
nav.style.position = "relative";
// Logo
const logo = document.createElement("div");
logo.textContent = "Website only JS";
logo.style.fontWeight = "bold";
logo.style.cursor = "pointer";
logo.style.fontSize = "22px";
logo.style.color = "#00ffcc";
logo.onclick = () => {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
};

// Menu items data
const menuItems = [
  { text: "Home", id: "home" },
  { text: "About", id: "about" },
  { text: "The End", id: "the end" },
  { text: "Practice", id: "practice" },
  { text: "Contact", id: "contact" }
];

// Desktop menu
const menu = document.createElement("ul");
menu.style.display = "flex";
menu.style.listStyle = "none";
menu.style.gap = "20px";
menu.style.margin = "0";
menu.style.padding = "0";
menu.style.alignItems = "center";
menu.style.cursor = "pointer";
menu.style.fontSize = "18px";
menu.style.fontWeight = "bold";
menu.style.color = "#ddd";
menu.style.position = "relative";
menu.style.zIndex = "10";

menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.text;
  li.style.cursor = "pointer";

  li.onmouseenter = () => li.style.color = "#00ffcc";
  li.onmouseleave = () => li.style.color = "#ddd";

  li.onclick = () => {
    document.getElementById(item.id).scrollIntoView({
      behavior: "smooth"
    });
  };

  menu.appendChild(li);
});

// Hamburger
const hamburger = document.createElement("div");
hamburger.innerHTML = "&#9776;";
hamburger.style.fontSize = "28px";
hamburger.style.cursor = "pointer";
hamburger.style.display = "none";

// Mobile menu
const mobileMenu = document.createElement("div");
mobileMenu.style.position = "absolute";
mobileMenu.style.top = "100%";
mobileMenu.style.left = "0";
mobileMenu.style.width = "100%";
mobileMenu.style.background = "#111";
mobileMenu.style.display = "none";
mobileMenu.style.flexDirection = "column";
// Mobile menu items
menuItems.forEach(item => {
  const div = document.createElement("div");
  div.textContent = item.text;
  div.style.padding = "15px";
  div.style.cursor = "pointer";

  div.onclick = () => {
    document.getElementById(item.id).scrollIntoView({
      behavior: "smooth"
    });
    mobileMenu.style.display = "none";
    menuOpen = false;
  };

  mobileMenu.appendChild(div);
});

// Toggle hamburger
let menuOpen = false;
hamburger.onclick = () => {
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? "flex" : "none";
};

// Responsive
function handleResize() {
  if (window.innerWidth < 768) {
    menu.style.display = "none";
    hamburger.style.display = "block";
  } else {
    menu.style.display = "flex";
    hamburger.style.display = "none";
    mobileMenu.style.display = "none";
    menuOpen = false;
  }
}

window.addEventListener("resize", handleResize);
handleResize();
nav.append(logo, menu, hamburger);
nav.appendChild(mobileMenu);
document.body.appendChild(nav);
//hero
const hero = document.createElement("div");
hero.style.maxWidth = "1200px";
hero.style.margin = "60px auto";
hero.style.textAlign = "center";
const title = document.createElement("h1");
typingEffect(title, "JavaScript Only Website", 100);
function typingEffect(element, text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, speed);
}
title.style.color = "#00ffcc";
const paragraph = document.createElement("p");
paragraph.textContent =
  "Το πρώτο site μου φτιαγμένο αποκλειστικά με JavaScript.";
paragraph.style.fontSize = "20px";
hero.append(title, paragraph);
document.body.appendChild(hero);
// main images
const mainImg = document.createElement("img");
mainImg.src =
  "https://tse3.mm.bing.net/th/id/OIP.my9j0fjV5ZKuulNaQiKozwHaIa";
mainImg.style.width = "120px";
mainImg.style.display = "block";
mainImg.style.margin = "40px auto";
document.body.appendChild(mainImg);
// main text
const main = document.createElement("main");
main.style.maxWidth = "900px";
main.style.margin = "0 auto";
main.style.textAlign = "center";
main.style.lineHeight = "1.6";
main.textContent =
  "Η JavaScript είναι μια δυναμική γλώσσα προγραμματισμού που επιτρέπει τη δημιουργία διαδραστικών ιστοσελίδων.";
document.body.appendChild(main);

// SECTION (IMAGE + TEXT) 
const section = document.createElement("section");
section.style.margin = "100px auto";
section.style.maxWidth = "1200px";

const sectionContainer = document.createElement("div");
sectionContainer.style.background = "#111";
sectionContainer.style.padding = "40px";
sectionContainer.style.borderRadius = "10px";
sectionContainer.style.textAlign = "center";
sectionContainer.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";

// Section image
const sectionImg = document.createElement("img");
sectionImg.src = "website-only-js/images/list.webp";
sectionImg.style.maxWidth = "500px";
sectionImg.style.width = "100%";
sectionImg.style.borderRadius = "10px";
sectionImg.style.marginBottom = "30px";

// Section text
const sectionText = document.createElement("p");
sectionText.textContent =
  "Στην αρχή η JavaScript μου φαινόταν δύσκολη, αλλά με εξάσκηση και υπομονή κατάφερα να την κατανοήσω. Για να μπορέσω να την καταλάβω και να κατανοήσω τον τρόπο που δουλεύει, έπρεπε να μάθω πρώτα HTML και CSS. Με αυτά τα τρία εργαλεία, μπορώ πλέον να δημιουργώ πλήρεις ιστοσελίδες από το μηδέν! Ξεκίνησα να κρατάω σημειώσεις οπου όταν είχα κάπιο πρόβλημα ανατρεχα σε αυτές και έβρισκα τη λύση πιο γρήγορα.";
sectionText.style.fontSize = "18px";
sectionText.style.lineHeight = "1.6";
sectionContainer.append(sectionImg, sectionText);
section.appendChild(sectionContainer);
document.body.appendChild(section);

function createSection(id, titleText, contentText, imgSrc = null , dataAos = "fade-left") {
  const section = document.createElement("section");
  section.id = id;
  section.style.padding = "100px 20px";
  section.style.maxWidth = "1200px";
  section.style.margin = "0 auto";
  section.style.textAlign = "center";

  const title = document.createElement("h2");
  title.textContent = titleText;
  title.style.color = "#00ffcc";

  const text = document.createElement("p");
  text.textContent = contentText;
  text.style.maxWidth = "700px";
  text.style.fontSize = "18px";
  text.style.margin = "20px auto 0 auto";
  text.style.lineHeight = "1.6";
  section.append(title);

  // Αν υπάρχει εικόνα, δημιουργούμε img και το προσθέτουμε
  if (imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.maxWidth = "500px";
    img.style.width = "100%";
    img.style.borderRadius = "10px";
    img.style.margin = "20px auto";
    img.style.display = "block";
    img.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
        img.setAttribute("data-aos", "zoom-in");
        img.setAttribute("data-aos-duration", "1000");
        img.setAttribute("data-aos-easing", "ease-in-out");
    section.appendChild(img);
  }
  section.appendChild(text);
  document.body.appendChild(section);
}
//make sections
createSection("home","Features","Η JavaScript προσφέρει πολλά χαρακτηριστικά όπως διαδραστικότητα, δυναμική ενημέρωση περιεχομένου, και υποστήριξη για διάφορες βιβλιοθήκες και πλαίσια εργασίας" , "website-only-js/images/Features.jpg");
createSection("Practice","practice","Τώρα περνάμε στην πράξη! Επειδή καλή η θεωρία αλλά χωρίς την πράξη κακά τα ψέματα δεν πας ΠΟΥΘΕΝΑ! Γι'αυτό ξεκιίνα να γράφεις κώδικα πάρε το πληκτρολόγιο και στην κυριολεξία λιώσε το στο coding.Όσο πιο πολύ χρόνο αφιερώσεις σε μια γλώσσα προγραμματισμού τόσο καλύτερα την μαθαίνεις.","website-only-js/images/practics.jpg" , "fade-right");
createSection("about","Pricing","Η JavaScript είναι μια δωρεάν γλώσσα προγραμματισμού που μπορεί να χρησιμοποιηθεί από οποιονδήποτε χωρίς κόστος. Υπάρχουν επίσης πολλές δωρεάν βιβλιοθήκες και εργαλεία διαθέσιμα για χρήση.");
createSection("the end","Τελευταιο κομμάτι","Δημιούργησα αυτο το site όχι για να δείξω οτι είμαι κάποιος η να καυχηθώ, αλλά για να δείξω οτι με υπομονή και εξάσκηση μπορείς να καταφέρεις πολλά πράγματα. Το μόνο που χρειάζεται είναι να πιστέψεις στον εαυτό σου και να μην τα παρατήσεις ποτέ.","website-only-js/images/the-end.png");
createSection("contact","Community","Υπάρχει μια μεγάλη και ενεργή κοινότητα προγραμματιστών JavaScript που μοιράζονται γνώσεις, εργαλεία και πόρους. Μπορείτε να βρείτε βοήθεια και υποστήριξη σε φόρουμ, ομάδες συζήτησης και κοινωνικά δίκτυα","website-only-js/images/Comunity.jpg" , "fade-right");

//footer
const footer = document.createElement("footer");
footer.style.marginTop = "100px";
footer.style.padding = "30px";
footer.style.borderTop = "1px solid #333";
footer.style.textAlign = "center";
footer.style.background = "#111";
footer.style.color = "#aaa";
// 1η γραμμή
const footerText1 = document.createElement("div");
footerText1.textContent = "© 2026 My First WebSite – JavaScript Only";
// 2η γραμμή
const footerText2 = document.createElement("div");
footerText2.textContent = "Images powered by unplash.com 💛";
footerText2.style.marginTop = "8px";
footerText2.style.fontSize = "14px";
// 3η γραμμή (προαιρετική)
const footerText3 = document.createElement("div");
footerText3.textContent = "Created by FD";
footerText3.style.marginTop = "5px";
footerText3.style.fontSize = "13px";
footerText3.style.opacity = "0.7";
footer.append(footerText1, footerText2, footerText3);
document.body.appendChild(footer);


