document.addEventListener('DOMContentLoaded', () => {
    const secretCode = generateCode();
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const showCodeButton = document.getElementById('show-code-button');
    const attemptsList = document.getElementById('attempts-list');
  
    guessButton.addEventListener('click', makeGuess);
    showCodeButton.addEventListener('click', () => alert(`O código é: ${secretCode}`));
  
    function generateCode() {
      let code = '';
      while (code.length < 4) {
        const digit = Math.floor(Math.random() * 10).toString();
        if (!code.includes(digit)) {
          code += digit;
        }
      }
      return code;
    }
  
    function makeGuess() {
      const guess = guessInput.value;
      if (guess.length !== 4 || isNaN(guess)) {
        alert('Digite um número de 4 dígitos únicos.');
        return;
      }
  
      const result = checkGuess(guess, secretCode);
      const attemptItem = document.createElement('li');
      attemptItem.textContent = `Tentativa: ${guess} | ${result.bulls} Bulls, ${result.cows} Cows`;
      
      // Adiciona ao início da lista
      attemptsList.insertBefore(attemptItem, attemptsList.firstChild);
      guessInput.value = '';
    }
  
    function checkGuess(guess, code) {
      let bulls = 0;
      let cows = 0;
      for (let i = 0; i < 4; i++) {
        if (guess[i] === code[i]) {
          bulls++;
        } else if (code.includes(guess[i])) {
          cows++;
        }
      }
      return { bulls, cows };
    }
  });
  