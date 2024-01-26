import "./../scss/style.scss";

// Lotto-Zahlen Generator
function generateLottoNumbers() {
  let lottoNumbers = [];

  while (lottoNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;

    if (lottoNumbers.indexOf(randomNumber) === -1) {
      lottoNumbers.push(randomNumber);
    }
  }

  return lottoNumbers;
}

console.log(generateLottoNumbers());
