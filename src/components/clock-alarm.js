export function digitalClock(clock, btnPlay, btnStop) {
  let clockTime;

  document.addEventListener("click", e => {
    if (e.target.matches(btnPlay)) {
      clockTime = setInterval(() => {
        const clockHour = new Date().toLocaleTimeString();
        document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTime);
      // document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}

export function soundAlarm(sound, btnPlay, btnStop) {
  let alarmTime;
  const $alarm = document.createElement("audio");
  $alarm.src = sound;

  document.addEventListener("click", e => {
    if (e.target.matches(btnPlay)) {
      alarmTime = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTime);
      $alarm.pause();
      $alarm.currentTime = 0;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
