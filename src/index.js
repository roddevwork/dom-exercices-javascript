import { digitalClock, soundAlarm } from "./components/clock-alarm.js";
import hamburgerMenu from "./components/menu_hamburger.js";
import { moveBall } from "./components/keyboardEvents.js";
import countDown from "./components/countdown.js";
import scrollTopButton from "./components/button_scroll.js";
import changeTheme from "./components/change_theme.js";
import responsiveMedia from "./components/object_responsive.js";
import responsiveTester from "./components/tester_responsive.js";
import userDeviceInfo from "./components/detection_devices.js";
import networkStatus from "./components/network_detection.js";
import webCam from "./components/webcam_detection.js";
import getGeoLocation from "./components/geolocation.js";
import searchFilters from "./components/search_ filters.js";

document.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel-aside", ".menu a");
  digitalClock("#digital-clock", "#activate-clock", "#disable-clock");
  soundAlarm("../public/sounds/alarm_clock.ogg ", "#activate-alarm", "#disable-alarm");
  countDown("countdown", "Jan 01,2024 00:00:00", "Happy new year!!");
  scrollTopButton(".scroll-top-btn");

  responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=G4U_JMnHf3M" target='_blank' rel='noopener' >Ver
  Video</a>`, "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/G4U_JMnHf3M\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>");

  responsiveMedia("gmaps", "(min-width: 1024px)", "<a href=\"https://goo.gl/maps/eW9PD456yoEJkG8X6\" target='_blank' rel='noopener' >Ver Mapa</a>", "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15489.621780434356!2d-54.4500008!3d-25.6666694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea6068b8edff%3A0xa7f4a990535e7279!2sCataratas%20del%20Iguaz%C3%BA%2C%20Misiones!5e1!3m2!1ses!2sar!4v1686269608434!5m2!1ses!2sar\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>");

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeoLocation("geolocation");
  searchFilters(".card-filter", ".card");
});

document.addEventListener("keydown", e => {
  moveBall(e, ".ball", ".stage");
});

changeTheme(".change-theme-btn", "theme-mode");
networkStatus();
