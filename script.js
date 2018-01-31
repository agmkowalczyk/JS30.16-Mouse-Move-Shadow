const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 80;

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round(x / width * walk) - (walk / 2);
  const yWalk = Math.round(y / height * walk) - (walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 8px rgba(0,0,0,0.2),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,0,0.1)
    `;
}

hero.addEventListener('mousemove', shadow);
