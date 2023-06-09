
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  const breakpoint = window.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      document.getElementById(id).innerHTML = `${desktopContent}`;
    } else {
      document.getElementById(id).innerHTML = `${mobileContent}`;
    }

    // console.log("media", breakpoint, e.matches)
  };

  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
