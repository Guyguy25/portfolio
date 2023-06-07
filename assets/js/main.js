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

dev_status = document.querySelector("#home > p")

main = document.querySelector("main")

// ScrollReveal code

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300
})

sr.reveal(`.home__section`)
sr.reveal(`.links`, {delay:800, origin:'bottom'})

// Scroll Système

if(main.scrollTop == 0 && !home_a.classList.contains("active")) {
  home_a.classList.add("active")
}

main.addEventListener("scroll", () => {
  console.log(main.scrollTop)

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
    dev_status.innerHTML = "developpeur front-end"
    about_section_h1.innerHTML = "À propos"
    skills_section_h1.innerHTML = "Compétences"
    contact_section_h1.innerHTML = "Contacter"

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