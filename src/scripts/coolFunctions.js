/* Fisher-Yates Shuffle */
function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

let isCopying = false

/* Copy Function */
function copyText(str) {
  if (isCopying) return;
  isCopying = true;
   // Copy the text inside the text field
  navigator.clipboard.writeText(str);
  
  const reply = document.querySelectorAll(".tooltiptext");
  reply.forEach(tip => {
    tip.innerHTML = "Copied!";


    setTimeout(() => {
      tip.innerHTML = "Copy Text.";
      isCopying = false;
    }, 1000);
  });
}

