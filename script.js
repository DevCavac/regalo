const openGift = document.querySelector('#open-gift');
const surprise = document.querySelector('#birthday-surprise');
const music = document.querySelector('#birthday-music');
const musicToggle = document.querySelector('#music-toggle');
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
let opening = false;
function revealGift() {
  surprise.hidden = false;
  document.querySelector('#gift-scene').hidden = true;
  document.querySelector('#keepsakes').hidden = false;
  document.querySelector('#letter-title').focus({ preventScroll: true });
}
function releaseBats(rect) {
  for (let i = 0; i < 28; i++) {
    const bat = document.createElement('div');
    bat.className = 'flying-bat';
    bat.setAttribute('aria-hidden', 'true');
    bat.innerHTML = '<svg viewBox="0 0 120 60"><g class="flutter"><path d="M52 25Q30 0 3 14Q16 19 13 35Q29 27 34 46Q42 34 53 38L67 38Q78 34 86 46Q91 27 107 35Q104 19 117 14Q90 0 68 25L67 12L60 20L53 12Z" fill="currentColor" stroke="#d3b7e7" stroke-width="1.2"/><path d="M56 28h1m6 0h1" stroke="#eedaf8" stroke-width="2.5" stroke-linecap="round"/></g></svg>';
    bat.style.left = `${rect.left + rect.width / 2}px`;
    bat.style.top = `${rect.top + 25}px`;
    bat.style.width = `${38 + Math.random() * 65}px`;
    bat.style.setProperty('--fly-x', `${(i % 2 ? 1 : -1) * (innerWidth * .5 + Math.random() * 220)}px`);
    bat.style.setProperty('--fly-y', `${-120 - Math.random() * innerHeight * .8}px`);
    bat.style.setProperty('--tilt', `${(i % 2 ? 1 : -1) * (15 + Math.random() * 30)}deg`);
    bat.style.animationDelay = `${i * 22}ms`;
    document.body.appendChild(bat);
    setTimeout(() => bat.remove(), 3400);
  }
  const glow = document.createElement('div');
  glow.className = 'gift-burst';
  glow.setAttribute('aria-hidden', 'true');
  glow.style.left = `${rect.left + rect.width / 2}px`;
  glow.style.top = `${rect.top + 25}px`;
  document.body.appendChild(glow);
  setTimeout(() => glow.remove(), 1800);
}
openGift.addEventListener('click', () => {
  if (opening) return;
  opening = true;
  openGift.setAttribute('aria-expanded', 'true');
  openGift.disabled = true;
  if (music.getAttribute('src')) {
    musicToggle.hidden = false;
    music.play().then(() => setMusicLabel()).catch(() => setMusicLabel());
  }
  if (reducedMotion()) { revealGift(); return; }
  document.querySelector('#gift-scene').classList.add('opening');
  releaseBats(document.querySelector('.gift-box').getBoundingClientRect());
  setTimeout(revealGift, 1400);
});
function setMusicLabel() {
  musicToggle.textContent = music.paused ? 'Reproducir música ♫' : 'Pausar música ♫';
  musicToggle.setAttribute('aria-label', music.paused ? 'Reproducir música' : 'Pausar música');
}
musicToggle.addEventListener('click', () => {
  if (music.paused) music.play().then(setMusicLabel).catch(setMusicLabel);
  else { music.pause(); setMusicLabel(); }
});

const button = document.querySelector('#wish');
const status = document.querySelector('#wish-status');
let wished = false;
button.addEventListener('click', () => {
  wished = !wished;
  document.body.classList.toggle('wished', wished);
  button.innerHTML = wished ? 'Otro deseo <span aria-hidden="true">↺</span>' : 'Pide un deseo <span aria-hidden="true">↗</span>';
  status.textContent = wished ? 'Que se te cumpla. Hoy y muchas veces más. ♡' : 'Y cuando estés lista, sopla las velitas.';
  if (!wished || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = button.getBoundingClientRect();
  for (let i = 0; i < 22; i++) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.setAttribute('aria-hidden', 'true');
    spark.textContent = ['✧', '·', '✦'][i % 3];
    spark.style.left = `${rect.left + rect.width / 2}px`;
    spark.style.top = `${rect.top}px`;
    spark.style.setProperty('--dx', `${(Math.random() - .5) * 420}px`);
    spark.style.setProperty('--dy', `${-70 - Math.random() * 300}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 2600);
  }
});
