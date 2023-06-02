export default function changeTheme(btn, classChangeTheme) {
  const $themeBtn = document.querySelector(".change-theme-btn");
  const $selectorsHtml = document.querySelectorAll("[data-theme]");

  const moon = "🌙";
  const sun = "☀️";

  const lightMode = () => {
    $selectorsHtml.forEach(e => e.classList.remove(classChangeTheme));
    $themeBtn.textContent = sun;
    localStorage.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectorsHtml.forEach(e => e.classList.add(classChangeTheme));
    $themeBtn.textContent = moon;
    localStorage.setItem("theme", "dark");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === sun) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", e => {
    // console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "dark");
    if (localStorage.getItem("theme") === "light") lightMode();
    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}
