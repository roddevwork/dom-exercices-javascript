
export default function searchFilters(input, selector) {
  document.addEventListener("keyup", (event) => {
    if (event.target.matches(input)) {
      // console.log(event.key)
      // console.log(event.target.value)

      if (event.key === "Escape") event.target.value = "";

      document.querySelectorAll(selector).forEach(element => {
        (element.textContent.toLowerCase().includes(event.target.value.toLowerCase()))
          ? element.classList.remove("filter")
          : element.classList.add("filter");
      });
    }
  });
}
