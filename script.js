//aqui é a nota que vai ser digitada e vai aparecer na tela
function getScore() {
  let score = document.getElementById('nota').value

  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  }

  if (scoreB) {
    scoreFinal = 'B'
  }

  if (scoreC) {
    scoreFinal = 'C'
  }

  if (scoreD) {
    scoreFinal = 'D'
  }

  if (scoreF) {
    scoreFinal = 'F'
  }

  if (!score) {
    scoreFinal = 'Nota inválida, tente novamente.'
  }

  alert(scoreFinal)
}
