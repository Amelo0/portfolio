document.addEventListener('DOMContentLoaded', () => {
  // Gera um código secreto com 4 dígitos únicos
  const secretCode = generateCode();
  const guessInput = document.getElementById('guess-input');
  const guessButton = document.getElementById('guess-button');
  const showCodeButton = document.getElementById('show-code-button');
  const attemptsList = document.getElementById('attempts-list');

  // Exibe o código secreto ao clicar no botão "Mostrar Código"
  showCodeButton.addEventListener('click', () => alert(`O código é: ${secretCode}`));

  // Adiciona um evento para o botão de tentativa
  guessButton.addEventListener('click', makeGuess);

  // Função para gerar um código secreto com 4 dígitos únicos
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

  // Função para processar uma tentativa do jogador
  function makeGuess() {
    const guess = guessInput.value;
    if (guess.length !== 4 || isNaN(guess) || new Set(guess).size !== 4) {
      alert('Por favor, digite um número de 4 dígitos únicos.');
      return;
    }

    // Calcula "Bulls" e "Cows" para a tentativa atual
    const result = checkGuess(guess, secretCode);

    // Cria um item de lista para exibir a tentativa e o resultado
    const attemptItem = document.createElement('li');
    attemptItem.textContent = `Tentativa: ${guess} | ${result.bulls} Bulls, ${result.cows} Cows`;

    // Adiciona a tentativa ao início da lista para manter a ordem reversa
    attemptsList.insertBefore(attemptItem, attemptsList.firstChild);

    // Limpa o campo de entrada para a próxima tentativa
    guessInput.value = '';
  }

  // Função para calcular "Bulls" e "Cows"
  function checkGuess(guess, code) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === code[i]) {
        bulls++; // "Bull" quando o dígito e a posição estão corretos
      } else if (code.includes(guess[i])) {
        cows++; // "Cow" quando o dígito está correto, mas em outra posição
      }
    }
    return { bulls, cows };
  }
});
