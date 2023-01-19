'use strict';

const bannerTimer = document.querySelector('[data-deadline]');
const deadline = bannerTimer.dataset.deadline;

const createTimer = (bannerTimer) => {
  const timerText = document.createElement('p');
  timerText.classList.add('banner__timer-text');
  timerText.textContent = 'До конца акции:';

  const timerCounts = document.createElement('div');
  timerCounts.classList.add('banner__timer-time');

  const daysBlock = document.createElement('div');
  daysBlock.classList.add('banner__timer_days');

  const dayCount = document.createElement('p');
  dayCount.classList.add('banner__timer_days-count');

  const dayDescr = document.createElement('p');
  dayDescr.classList.add('banner__timer_days-descr');

  const hoursBlock = document.createElement('div');
  hoursBlock.classList.add('banner__timer_hours');

  const hoursCount = document.createElement('p');
  hoursCount.classList.add('banner__timer_hours-count');

  const hoursDescr = document.createElement('p');
  hoursDescr.classList.add('banner__timer_hours-descr');

  const minutesBlock = document.createElement('div');
  minutesBlock.classList.add('banner__timer_minutes');

  const minutesCount = document.createElement('p');
  minutesCount.classList.add('banner__timer_minutes-count');

  const minutesDescr = document.createElement('p');
  minutesDescr.classList.add('banner__timer_minutes-descr');

  daysBlock.append(dayCount, dayDescr);
  hoursBlock.append(hoursCount, hoursDescr);
  minutesBlock.append(minutesCount, minutesDescr);
  timerCounts.append(daysBlock, hoursBlock, minutesBlock);
  bannerTimer.append(timerText, timerCounts);

  return {
    dayCount,
    hoursCount,
    minutesCount,
    dayDescr,
    hoursDescr,
    minutesDescr,
  };
};

const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
  0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const timer = (deadline, createTimer) => {
  const {
    dayCount,
    hoursCount,
    minutesCount,
    dayDescr,
    hoursDescr,
    minutesDescr,
  } = createTimer(bannerTimer);

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    let seconds = Math.floor(timeRemaining / 1000 % 60);
    let minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    let hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    if (hours < 10) hours = `0${hours}`;
    if (hours < 1) {
      hours = '';
    }
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return {timeRemaining, seconds, minutes, hours, days};
  };

  const start = () => {
    const timer = getTimeRemaining();

    const DayTimestamp = new Date(24 * 60 * 60 * 1000) - new Date(0);
    if (timer.timeRemaining <= DayTimestamp) {
      dayCount.textContent = timer.hours;
      hoursCount.textContent = timer.minutes;
      minutesCount.textContent = timer.seconds;

      if (timer.hours < 1) {
        dayDescr.textContent = '';
      } else {
        dayDescr.textContent =
        declOfNum(timer.hours, ['час', 'часа', 'часов']);
      }

      hoursDescr.textContent =
      declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
      minutesDescr.textContent =
      declOfNum(timer.seconds, ['секунда', 'секунды', 'секунд']);
    } else {
      dayCount.textContent = timer.days;
      hoursCount.textContent = timer.hours;
      minutesCount.textContent = timer.minutes;
      dayDescr.textContent =
      declOfNum(timer.days, ['день', 'дня', 'дней']);
      hoursDescr.textContent =
      declOfNum(timer.hours, ['час', 'часа', 'часов']);
      minutesDescr.textContent =
      declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
    }

    let intervalId = setTimeout(start, 60000);
    if (timer.timeRemaining <= DayTimestamp) {
      clearInterval(intervalId);
      intervalId = setTimeout(start, 1000);
    }

    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      bannerTimer.remove();
    }
  };

  start();
};

timer(deadline, createTimer);

