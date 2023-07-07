export default function webCam(id) {
  const $video = document.getElementById(id);
  // console.log(navigator.mediaDevices.getUserMedia);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        // console.log(strem);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
        // console.log(err)
      });
  }
}
