import { digitalClock, soundAlarm } from "./components/clock-alarm.js";
import hamburgerMenu from "./components/menu_hamburger.js";
import { moveBall } from "./components/keyboardEvents.js";

document.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel-aside", ".menu a");
  digitalClock("#digital-clock", "#activate-clock", "#disable-clock");
  soundAlarm("../public/alarm-clock.mp3 ", "#activate-alarm", "#disable-alarm");
});

document.addEventListener("keydown", e => {
  moveBall(e, ".ball", ".stage");
});
