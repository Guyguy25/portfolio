home_li = document.querySelectorAll("nav > ul li")[0];
home_a = document.querySelectorAll("nav > ul li a")[0];
about_li = document.querySelectorAll("nav > ul li")[1];
about_a = document.querySelectorAll("nav > ul li a")[1];
contact_li = document.querySelectorAll("nav > ul li")[2];
contact_a = document.querySelectorAll("nav > ul li a")[2];
main = document.querySelector("main");

// Scroll Système

if(main.scrollTop == 0) {
  if(!home_a.classList.contains("active")) {
    home_a.classList.add("active")
  }
}

main.addEventListener("scroll", () => {
  if(main.scrollTop <= 900){
    if(!home_a.classList.contains("active")) {
      home_a.classList.add("active")
    }
    if(about_a.classList.contains("active")) {
      about_a.classList.remove("active")
    }
    if(contact_a.classList.contains("active")) {
      contact_a.classList.remove("active")
    }
  }
  if(main.scrollTop >= 1000){
    if(!about_a.classList.contains("active")) {
      about_a.classList.add("active")
    }
    if(home_a.classList.contains("active")) {
      home_a.classList.remove("active")
    }
    if(contact_a.classList.contains("active")) {
      contact_a.classList.remove("active")
    }
  }
  if(main.scrollTop >= 1700){
    if(!contact_a.classList.contains("active")) {
      contact_a.classList.add("active")
    }
    if(home_a.classList.contains("active")) {
      home_a.classList.remove("active")
    }
    if(about_a.classList.contains("active")) {
      about_a.classList.remove("active")
    }
  }
})

home_li.addEventListener('click', function () {
  main.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  if(!home_a.classList.contains("active")) {
    home_a.classList.add("active");
  };
  if(about_a.classList.contains("active")) {
    about_a.classList.remove("active");
  };
  if(contact_a.classList.contains("active")) {
    contact_a.classList.remove("active");
  };
})

about_li.addEventListener('click', function () {
  main.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
  if(!about_a.classList.contains("active")) {
    about_a.classList.add("active");
  };
  if(home_a.classList.contains("active")) {
    home_a.classList.remove("active");
  };
  if(contact_a.classList.contains("active")) {
    contact_a.classList.remove("active");
  };
})

contact_li.addEventListener('click', function () {
  main.scrollTo({
    top: 1700,
    behavior: 'smooth',
  });
  if(!contact_a.classList.contains("active")) {
    contact_a.classList.add("active");
  };
  if(home_a.classList.contains("active")) {
    home_a.classList.remove("active");
  };
  if(about_a.classList.contains("active")) {
    about_a.classList.remove("active");
  };
})

// Removing class open when the window is larger than 870px width

function RemoveOpen() {
  if (document.querySelector("#nav-icon").classList.contains("open")) {
    if (window.innerWidth >= 870) {
      document.querySelector("#nav-icon").classList.remove("open");
      document.querySelector("nav").classList.remove("open");
      document.querySelector(".overlay").classList.remove("open");
    }
  }

  if (!document.querySelector("nav").classList.contains("open")) {
    document.querySelector(".languages").classList.remove("open")
  }

  if (document.querySelector(".languages").classList.contains("open")) {
    if (window.innerWidth >= 870) {
      document.querySelector(".languages").classList.remove("open");
    }
  }
}

// Check if it is under 870px width or not with an interval of 0.001 second
setInterval(RemoveOpen, 1);


// Light/dark theme
html = document.querySelector("html");

document.querySelector(".button-theme").addEventListener("click", function () {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

html.classList.add(localStorage.getItem("theme"));

// Set default theme in dark
if (!localStorage.getItem("theme")) {
  html.classList.value = "dark";
}

// Language traductor système

langues = document.querySelector(".langues");
english = document.querySelector(".en");
french = document.querySelector(".fr");

document.querySelector(".languages").addEventListener("click", function () {
  if (window.innerWidth <= 870) {
    document.querySelector(".languages").classList.toggle("open");
  }
});

french.addEventListener("click", function () {
  if (langues.classList.contains("en")) {
    langues.classList.remove("en");
    langues.classList.add("fr");
    html.setAttribute("lang", "fr");
    localStorage.setItem("languages", "fr");
    location.reload();
  }
});

english.addEventListener("click", function () {
  if (langues.classList.contains("fr")) {
    langues.classList.remove("fr");
    langues.classList.add("en");
    html.setAttribute("lang", "en");
    localStorage.setItem("languages", "en");
    location.reload();
  }
});

html.setAttribute("lang", `${localStorage.getItem("languages")}`);
langues.classList.add(localStorage.getItem("languages"));

if (!localStorage.getItem("languages")) {
  html.setAttribute("lang", "en");
  langues.classList.value = "langues en";
} else {
  if (localStorage.getItem("languages") == "fr") {
    document.querySelector(".description").innerHTML =
      "Salut, je suis un developpeur Français jeune et passionné. Je suis principalement spécialisé dans le developpement web mais je touche à tout.";
    document.querySelectorAll("nav > ul > li > a")[0].innerHTML = "Accueil";
    document.querySelectorAll("nav > ul > li > a")[1].innerHTML = "À propos";
    document.querySelectorAll("nav > ul > li > a")[2].innerHTML = "Contacter";
    document.querySelector("nav > ul > li > span").innerHTML = "Langue";
  } else {
    document.querySelector(".description").innerHTML =
      "Hi, I'm a young and passionate French developer. I'm mainly specialized in web development but I touch everything.";
    document.querySelectorAll("nav > ul > li > a")[0].innerHTML = "Home";
    document.querySelectorAll("nav > ul > li > a")[1].innerHTML = "About";
    document.querySelectorAll("nav > ul > li > a")[2].innerHTML = "Contact";
    document.querySelector("nav > ul > li > span").innerHTML = "Language";
  }
}

// Nav button add open class

document.querySelector("#nav-icon").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector("#nav-icon").classList.toggle("open");
  document.querySelector(".overlay").classList.toggle("open");
});