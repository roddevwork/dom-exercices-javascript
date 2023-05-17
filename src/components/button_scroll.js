
export default function scrollTopButton(btn) {
  const $scrollBtn = document.querySelector(btn);

  window.addEventListener("scroll", e => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 700) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  document.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
