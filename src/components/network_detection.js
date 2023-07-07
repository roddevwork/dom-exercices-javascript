const detectionNetwork = document.getElementById("detection-network");
detectionNetwork.textContent = "Connection Restored";

export default function networkStatus() {
  const isOnLine = () => {
    const $div = document.createElement("div");

    if (navigator.onLine) {
      $div.textContent = "Connection Restored";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Lost Connection";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    document.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => { document.body.removeChild($div); }, 2000);
  };

  window.addEventListener("online", (e) => isOnLine());
  window.addEventListener("offline", (e) => isOnLine());
}
