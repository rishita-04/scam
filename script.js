const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");
const gif = document.getElementById("loveGif");
const music = document.getElementById("bgMusic");

// Start music on first click anywhere
document.body.addEventListener("click", () => {
  if (music) {
    music.volume = 0.7;
    music.play();
  }
}, { once: true });

// Floating background hearts (continuous)
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.opacity = Math.random();
  heart.style.zIndex = "0";

  document.body.appendChild(heart);

  let rise = Math.random() * 2 + 1;

  const floatUp = setInterval(() => {
    heart.style.bottom = parseFloat(heart.style.bottom) + rise + "px";
    if (parseFloat(heart.style.bottom) > window.innerHeight) {
      clearInterval(floatUp);
      heart.remove();
    }
  }, 20);
}

// Start hearts forever
setInterval(createHeart, 500);

// Simple confetti
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#ef476f"][Math.floor(Math.random() * 5)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";
    document.body.appendChild(confetti);

    let fall = Math.random() * 3 + 2;

    const drop = setInterval(() => {
      confetti.style.top = confetti.offsetTop + fall + "px";
      if (confetti.offsetTop > window.innerHeight) {
        clearInterval(drop);
        confetti.remove();
      }
    }, 10);
  }
}

// YES CLICK
yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  buttons.style.display = "none";

  message.textContent = "YAY!🎉";
  gif.style.display = "block";

  launchConfetti();
});

// NO RUNS AWAY
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
