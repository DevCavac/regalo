const openGift = document.querySelector('#open-gift');
const surprise = document.querySelector('#birthday-surprise');
openGift.addEventListener('click', () => {
  openGift.setAttribute('aria-expanded', 'true');
  surprise.hidden = false;
  document.querySelector('#gift-scene').hidden = true;
  document.querySelector('#letter-title').focus({ preventScroll: true });
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
