
export default function draw(btn, selector) {
  const text = document.createElement("p");
  const resultScreen = document.getElementById("section11");

  const getWinner = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];
    // console.log($players, random, winner)

    return `El ganador es: ${winner.textContent} `;
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const result = getWinner(selector);
      // alert(result)
      // console.log(result)
      text.textContent = result;
      resultScreen.appendChild(text);
    }
  });
}
