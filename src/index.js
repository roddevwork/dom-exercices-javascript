import { digitalClock, soundAlarm } from "./components/clock-alarm.js";
import hamburgerMenu from "./components/menu_hamburger.js";

document.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel-aside", ".menu a");
  digitalClock("#digital-clock", "#activate-clock", "#disable-clock");
  soundAlarm("/assets/alarma2.mp3 ", "#activate-alarm", "#disable-alarm");
});
