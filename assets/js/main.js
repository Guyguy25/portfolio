document.querySelector("#nav-icon").addEventListener("click", function () {
  document.querySelector("#nav-icon").classList.toggle("open");
  document.querySelector(".overlay").classList.toggle("open");
});

html = document.querySelector("html");

$(".button-theme").click(function () {
  console.log("click");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  document.getElementById("currentTheme").innerHTML = localStorage.theme;
});

html.classList.add(localStorage.getItem("theme"));
