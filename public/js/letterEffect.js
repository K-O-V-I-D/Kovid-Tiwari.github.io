document.addEventListener("DOMContentLoaded", function() {
  const letterBoxes = document.querySelectorAll("[data-letter-effect]");

  let activeLetterBoxIndex = 0;
  let lastActiveLetterBoxIndex = 0;
  let totalLetterBoxDelay = 0;

  const setLetterEffect = function () {
    for (let i = 0; i < letterBoxes.length; i++) {
      let letterAnimationDelay = 0;
      const letters = letterBoxes[i].textContent.trim();
      letterBoxes[i].textContent = "";

      for (let j = 0; j < letters.length; j++) {
        const span = document.createElement("span");
        span.style.animationDelay = `${letterAnimationDelay}s`;

        if (i === activeLetterBoxIndex) {
          span.classList.add("in");
        } else {
          span.classList.add("out");
        }

        span.textContent = letters[j];
        if (letters[j] === " ") span.classList.add("space");
        letterBoxes[i].appendChild(span);

        if (j >= letters.length - 1) break;
        letterAnimationDelay += 0.05;
      }

      if (i === activeLetterBoxIndex) {
        totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
      }

      if (i === lastActiveLetterBoxIndex) {
        letterBoxes[i].classList.add("active");
      } else {
        letterBoxes[i].classList.remove("active");
      }
    }

    setTimeout(function () {
      lastActiveLetterBoxIndex = activeLetterBoxIndex;
      activeLetterBoxIndex = activeLetterBoxIndex >= letterBoxes.length - 1 ? 0 : activeLetterBoxIndex + 1;
      setLetterEffect();
    }, (totalLetterBoxDelay * 1000) + 3000);
  };

  window.addEventListener("load", setLetterEffect);
});

document.addEventListener('DOMContentLoaded', function() {
  const phrases = ["Full stack developer", "Security analyst", "Cloud geek"];
  let currentPhraseIndex = 0;
  let currentLetterIndex = 0;
  const element = document.createElement('div');
  document.body.appendChild(element);

  function type() {
    if (currentLetterIndex < phrases[currentPhraseIndex].length) {
      element.textContent += phrases[currentPhraseIndex].charAt(currentLetterIndex);
      currentLetterIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (currentLetterIndex > 0) {
      element.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex - 1);
      currentLetterIndex--;
      setTimeout(erase, 100);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  type();
});
