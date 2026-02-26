function splitWords(el, startDelay) {
    const nodes = [...el.childNodes];
    el.innerHTML = '';
    let delay = startDelay;

    nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent.trim().split(/\s+/).forEach(word => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.classList.add('heroWord');
                span.style.animationDelay = `${delay}s`;
                el.appendChild(span);
                delay += 0.08;
            });
        } else {
            node.classList.add('heroWord');
            node.style.animationDelay = `${delay}s`;
            el.appendChild(node);
            delay += 0.08;
        }
    });

    return delay;
}

const eyebrow = document.querySelector('.eyebrow-hero');
const h1 = document.querySelector('.header h1');
const subheader = document.querySelector('.caret-bar');
const buttons = document.querySelector('.header .buttons');

let delay = 0.1;
delay = splitWords(eyebrow, delay);
delay = splitWords(h1, delay);

subheader.classList.add('heroWord');
subheader.style.animationDelay = `${delay}s`;
delay += 0.2;

buttons.classList.add('heroWord');
buttons.style.animationDelay = `${delay}s`;
