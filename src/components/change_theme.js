export default function changeTheme(btn, classChangeTheme) {
  const $themeBtn = document.querySelector(".change-theme-btn");
  const $selectorsHtml = document.querySelectorAll("[data-theme]");

  const moon = "🌙";
  const sun = "☀️";

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === sun) {
        $selectorsHtml.forEach(e => e.classList.add(classChangeTheme));
        $themeBtn.textContent = moon;
      } else {
        $selectorsHtml.forEach(e => e.classList.remove(classChangeTheme));

        $themeBtn.textContent = sun;
      }
    }
  });
}
