function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let secretNumber = generateRandomNumber(1, 100);
  let attempts = 5;
  
  function checkGuess() {
    let guess = parseInt(document.getElementById("guessField").value);
    let message = document.getElementById("message");
    let attemptsSpan = document.getElementById("attempts");
  
    if (guess === secretNumber) {
      message.textContent = `Харош (${secretNumber}).`;
      message.style.color = "green";
      document.getElementById("guessField").disabled = true;
      return;
    }
  
    attempts--;
    attemptsSpan.textContent = attempts;
  
    if (attempts === 0) {
      message.textContent = `Попробуй еще ${secretNumber}.`;
      message.style.color = "red";
      document.getElementById("guessField").disabled = true;
      return;
    }
  
    if (guess < secretNumber) {
      message.textContent = "Маловато";
      message.style.color = "orange";
    } else {
      message.textContent = "Большевато";
      message.style.color = "orange";
    }
  
    document.getElementById("guessField").value = "";
  }
  