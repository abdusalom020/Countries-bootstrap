var elSiteHeaderThemeToggler = document.querySelector(".site-header__theme-toggler");
var elBody = document.querySelector(".body");

if (elSiteHeaderThemeToggler) {
  elSiteHeaderThemeToggler.addEventListener("click", function () {
    elBody.classList.toggle("body__dark");
  });
};