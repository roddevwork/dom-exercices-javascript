import { digitalClock, soundAlarm } from "./components/clock-alarm.js";
import hamburgerMenu from "./components/menu_hamburger.js";
import { moveBall } from "./components/keyboardEvents.js";
import countDown from "./components/countdown.js";
import scrollTopButton from "./components/button_scroll.js";
import changeTheme from "./components/change_theme.js";

document.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel-aside", ".menu a");
  digitalClock("#digital-clock", "#activate-clock", "#disable-clock");
  soundAlarm("../public/sounds/alarm_clock.ogg ", "#activate-alarm", "#disable-alarm");
  countDown("countdown", "Jan 01,2024 00:00:00", "Happy new year!!");
  scrollTopButton(".scroll-top-btn");
});

document.addEventListener("keydown", e => {
  moveBall(e, ".ball", ".stage");
});

changeTheme(".change-theme-btn", "theme-mode");
