setInterval(() => {
  // отримуємо елементи індикатора часу
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let secondes = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  // тут цифри індикатора часу
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');


 // крапковий індикатор часу
  let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');

  // отримуємо поточний час
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';

  // конвертуємо в 12-годинний формат замість 24
  if (h > 12) {
    h = h - 12;
  }

// додаємо 0 перед однією цифрою
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

// встановлюємо час і мітку
  hours.innerHTML = h + '<br /><span>Hours</span>';
  minutes.innerHTML = m + '<br /><span>Minutes</span>';
  secondes.innerHTML = s + '<br /><span>Seconds</span>';
  ampm.innerHTML = ap;

 // встановлюємо часовий круговий індикатор
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

// і встановлюємо індикатора позиції точки
  dotH.style.transform = `rotate(${h * 30}deg)`;
  dotM.style.transform = `rotate(${m * 6}deg)`;
  dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);