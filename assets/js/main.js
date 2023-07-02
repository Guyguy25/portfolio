/* Variable */

home_li = document.querySelectorAll("nav > ul li")[0]
home_a = document.querySelectorAll("nav > ul li a")[0]

about_li = document.querySelectorAll("nav > ul li")[1]
about_a = document.querySelectorAll("nav > ul li a")[1]

skills_li = document.querySelectorAll("nav > ul li")[2]
skills_a = document.querySelectorAll("nav > ul li a")[2]

contact_li = document.querySelectorAll("nav > ul li")[3]
contact_a = document.querySelectorAll("nav > ul li a")[3]

about_section = document.getElementById('about')
about_section_h1 = document.querySelector("#about > .section__title")

skills_section = document.getElementById('skills')
skills_section_h1 = document.querySelector("#skills > .section__title")

contact_section = document.getElementById('contact')
contact_section_h1 = document.querySelector("#contact > .section__title")

contact_form_tag1 = document.querySelectorAll(".contact__form-tag")[0]
contact_form_tag2 = document.querySelectorAll(".contact__form-tag")[2]

contact_title1 = document.querySelectorAll(".contact__title")[0]
contact_title2 = document.querySelectorAll(".contact__title")[1]

skills_level = document.querySelectorAll(".skills__level")

skills_title1 = document.querySelectorAll(".skills__title")[0]
skills_title2 = document.querySelectorAll(".skills__title")[1]

alert_success_text = document.querySelectorAll("#alert-box_text")[0]
alert_danger_text = document.querySelectorAll("#alert-box_text")[1]

about__data = document.querySelector(".about__data > p")
card__button = document.querySelectorAll(".card__button")

card__descriptionKoios = document.querySelectorAll(".card__description")[0]
card__descriptionFinary = document.querySelectorAll(".card__description")[1]
card__descriptionDeemer = document.querySelectorAll(".card__description")[2]

contact__button = document.querySelectorAll('.contact__button > span')

dev_status = document.querySelector("#home > p")

main = document.querySelector(".all")

// ScrollReveal code

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300
})

sr.reveal(`.home__section`)
sr.reveal(`.links`, {delay:800, origin:'bottom'})

const sections = document.querySelectorAll('.section')

main.addEventListener('scroll', checkSections)

checkSections()

function checkSections() {
  const triggerBottom = window.innerHeight / 5 * 4

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top

    if(sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  })
}

// Scroll Système

if(main.scrollTop == 0 && !home_a.classList.contains("active")) {
  home_a.classList.add("active")
}

main.addEventListener("scroll", () => {

  if(main.scrollTop < about_section.offsetTop - document.body.scrollTop){
    if(!home_a.classList.contains("active")) {
      home_a.classList.add("active")
    }

    if(about_a.classList.contains("active") || contact_a.classList.contains("active") || skills_a.classList.contains("active")) {
      about_a.classList.remove("active") ||
      contact_a.classList.remove("active") ||
      skills_a.classList.remove("active")
    }
  }

  if(main.scrollTop >= about_section.offsetTop - document.body.scrollTop){
    if(!about_a.classList.contains("active")) {
      about_a.classList.add("active")
    }
    if(home_a.classList.contains("active") || contact_a.classList.contains("active") || skills_a.classList.contains("active")) {
      home_a.classList.remove("active") ||
      contact_a.classList.remove("active") ||
      skills_a.classList.remove("active")
    }
  }

  if(main.scrollTop >= skills_section.offsetTop - document.body.scrollTop){
    if(!skills_a.classList.contains("active")) {
      skills_a.classList.add("active")
    }
    if(home_a.classList.contains("active") || contact_a.classList.contains("active") || about_a.classList.contains("active")) {
      home_a.classList.remove("active") ||
      contact_a.classList.remove("active") ||
      about_a.classList.remove("active")
    }
  }

  if(main.scrollTop >= contact_section.offsetTop - document.body.scrollTop){
    if(!contact_a.classList.contains("active")) {
      contact_a.classList.add("active")
    }
    if(home_a.classList.contains("active") || skills_a.classList.contains("active") || about_a.classList.contains("active")) {
      home_a.classList.remove("active") ||
      skills_a.classList.remove("active") ||
      about_a.classList.remove("active")
    }
  }
})


// Removing class open when the window is larger than 1095px width

function RemoveOpen() {
  if (document.querySelector("#nav-icon").classList.contains("open") && window.innerWidth >= 1095) {
    document.querySelector("#nav-icon").classList.remove("open")
    document.querySelector("nav").classList.remove("open")
    document.querySelector(".overlay").classList.remove("open")
  }

  if (!document.querySelector("nav").classList.contains("open")) {
    document.querySelector(".languages").classList.remove("open")
  }

  if (document.querySelector(".languages").classList.contains("open") && window.innerWidth >= 1095) {
    document.querySelector(".languages").classList.remove("open")
  }
}

// Check if it is under 1095px width or not with an interval of 0.001 second
setInterval(RemoveOpen, 1)


// Light/dark theme
html = document.querySelector("html")

document.querySelector(".button-theme").addEventListener("click", function () {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    html.classList.add("light")
    localStorage.setItem("theme", "light")
  } else {
    html.classList.remove("light")
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
})

html.classList.add(localStorage.getItem("theme"))

// Set default theme in dark
if (!localStorage.getItem("theme")) {
  html.classList.value = "dark"
}

// Language traductor système

langues = document.querySelector(".langues")
english = document.querySelector(".en")
french = document.querySelector(".fr")

document.querySelector(".languages").addEventListener("click", function () {
  if (window.innerWidth <= 1095) {
    document.querySelector(".languages").classList.toggle("open")
  }
})

french.addEventListener("click", function () {
  if (langues.classList.contains("en")) {
    langues.classList.remove("en")
    langues.classList.add("fr")
    html.setAttribute("lang", "fr")
    localStorage.setItem("languages", "fr")
    location.reload()
  }
})

english.addEventListener("click", function () {
  if (langues.classList.contains("fr")) {
    langues.classList.remove("fr")
    langues.classList.add("en")
    html.setAttribute("lang", "en")
    localStorage.setItem("languages", "en")
    location.reload()
  }
})

html.setAttribute("lang", `${localStorage.getItem("languages")}`)
langues.classList.add(localStorage.getItem("languages"))

if (!localStorage.getItem("languages")) {
  html.setAttribute("lang", "en")
  langues.classList.value = "langues en"
} else {
  if (localStorage.getItem("languages") == "fr") {
    dev_status.innerHTML = "développeur front-end"
    about_section_h1.innerHTML = "À propos"
    skills_section_h1.innerHTML = "Compétences"
    contact_section_h1.innerHTML = "Contacter"
    contact_form_tag1.innerHTML = "Nom"
    contact_form_tag2.innerHTML = "Projet"
    contact_title1.innerHTML = "Où vous pouvez me trouver"
    contact_title2.innerHTML = "Vous avez un projet ?"

    /* Alert-box french traduction */

    alert_danger_text.innerHTML = " Tous les champs doivent être remplis"
    alert_success_text.innerHTML = " Message envoyé avec succès."

    /* Skills section French Traduction*/

    skills_title1.innerHTML = "Frontend développeur"
    skills_title2.innerHTML = "Backend développeur"

    skills_level[0].innerHTML = "Avancé"
    skills_level[1].innerHTML = "Intermédiaire"
    skills_level[2].innerHTML = "Intermédiaire"
    skills_level[3].innerHTML = "Intermédiaire"
    skills_level[4].innerHTML = "Intermédiaire"
    skills_level[5].innerHTML = "Basique"
    skills_level[6].innerHTML = "Basique"
    skills_level[7].innerHTML = "Intermédiaire"
    skills_level[8].innerHTML = "Basique"
    skills_level[9].innerHTML = "Basique"
    skills_level[10].innerHTML = "Intermédiaire"
    skills_level[11].innerHTML = "Basique"

    /* About content french traduction */

    about__data.innerHTML = "Je m'appelle Tanguy, connu sous le pseudonyme Guyguy sur les réseaux sociaux. Je suis un jeune développeur frontend avec une solide expérience sur de nombreux projets. En tant qu'indépendant, je suis réactif et réponds rapidement aux propositions qui me sont faites. Mon approche du travail est axée sur la qualité et l'efficacité, ce qui me permet de livrer rapidement des résultats de haut niveau."
    card__descriptionKoios.innerHTML = "Site de gestion de piste de ski"
    card__descriptionFinary.innerHTML = "Site vitrine pour un serveur discord"
    card__descriptionDeemer.innerHTML = "Site vitrine pour un bot discord"

    card__button.forEach((element) => {
      element.innerHTML = "Voir plus"
    });

    /* Contact content french traduction */

    contact__button.forEach((element) => {
      element.innerHTML = "Écrivez-moi"
    });

    /* Nav French Traduction */
    home_a.innerHTML = "Accueil"
    about_a.innerHTML = "À propos"
    skills_a.innerHTML = "Compétences"
    contact_a.innerHTML = "Contacter"
    document.querySelector("nav > ul > li > span").innerHTML = "Langue"
  } else {
    dev_status.innerHTML = "front-end developer"
    about_section_h1.innerHTML = "About"
    skills_section_h1.innerHTML = "Skills"
    contact_section_h1.innerHTML = "Contact"
    contact_form_tag1.innerHTML = "Name"
    contact_form_tag2.innerHTML = "Project"
    contact_title1.innerHTML = "Where you can find me"
    contact_title2.innerHTML = "Have a project ?"

    /* Skills section English Traduction*/

    skills_title1.innerHTML = "Frontend developer"
    skills_title2.innerHTML = "Backend developer"

    skills_level[0].innerHTML = "Advanced"
    skills_level[1].innerHTML = "Intermediate"
    skills_level[2].innerHTML = "Intermediate"
    skills_level[3].innerHTML = "Intermediate"
    skills_level[4].innerHTML = "Intermediate"
    skills_level[5].innerHTML = "Basic"
    skills_level[6].innerHTML = "Basic"
    skills_level[7].innerHTML = "Intermediate"
    skills_level[8].innerHTML = "Basic"
    skills_level[9].innerHTML = "Basic"
    skills_level[10].innerHTML = "Intermediate"
    skills_level[11].innerHTML = "Basic"

    /* About content English Traduction */

    about__data.innerHTML = "My name is Tanguy, known by the pseudonym Guyguy on social media. I am a young frontend developer with a solid experience on various projects. As an independent contractor, I am responsive and quickly respond to offers that are made to me. My approach to work is focused on quality and efficiency, allowing me to deliver high-level results quickly."
    card__descriptionKoios.innerHTML = "Website for ski slope management"
    card__descriptionFinary.innerHTML = "Showcase website for a Discord server"
    card__descriptionDeemer.innerHTML = "Showcase website for a Discord bot"

    card__button.forEach((element) => {
      element.innerHTML = "See more"
    });

    /* Contact content english traduction */

    contact__button.forEach((element) => {
      element.textContent = "Write me"
    });

    /* Nav English Traduction */
    home_a.innerHTML = "Home"
    about_a.innerHTML = "About"
    skills_a.innerHTML = "Skills"
    contact_a.innerHTML = "Contact"
    document.querySelector("nav > ul > li > span").innerHTML = "Language"
  }
}

// Nav button add open class

document.querySelector("#nav-icon").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("open")
  document.querySelector("#nav-icon").classList.toggle("open")
  document.querySelector(".overlay").classList.toggle("open")
})

// Close Alert

document.getElementById("close__success").addEventListener("click", function() {
  const alert_success = document.getElementById("alert__success");

  alert_success.style.animation = "close_alert .3s linear";
  setTimeout(() => {  alert_success.style.display = "none"; alert_success.style.animation = "open_alert .3s linear"; }, 300);
})

document.getElementById("close__danger").addEventListener("click", function() {
  const alert_danger = document.getElementById("alert__danger");

  alert_danger.style.animation = "close_alert .3s linear";
  setTimeout(() => {  alert_danger.style.display = "none"; alert_danger.style.animation = "open_alert .3s linear"; }, 300);
})

// Input OnChange

function changeLabel(input) {
  var label = input.nextElementSibling;

  if (input.value !== "") {
    label.classList.add("label-change");
    label.style.top = "-10px"
  } else {
    label.classList.remove("label-change");
    label.style.top = ""
  }
}