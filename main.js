/* Variáveis */
let hora = 0
let min = 0
let seg = 0
let mil = 0

const tempo = 10 // conta a cada milissegundo
let cron

/* Funções - Botões */
function comecar() {
  let check = document.getElementsByClassName('comecar')

  if (check[0].classList.length == 2) {
    cron = setInterval(timer, tempo)
    check[0].classList.remove('off')
  } else {
    return
  }
}

function pausar() {
  let check = document.getElementsByClassName('comecar')

  if (check[0].classList.length == 1) {
    check[0].classList.add('off')
    clearInterval(cron)
  } else {
    clearInterval(cron)
  }
}

function reiniciar() {
  hora = 0
  min = 0
  seg = 0
  mil = 0
  document.getElementsByClassName('timer')[0].innerText = '00:00:00:00'
}

/* Display */
function timer() {
  mil++

  if (mil == 100) {
    mil = 0
    seg++
  }

  if (seg == 60) {
    seg = 0
    min++
  }

  if (min == 60) {
    min = 0
    hora++
  }
  //Formatar os dados do display
  let formato =
    (hora < 10 ? '0' + hora : hora) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (seg < 10 ? '0' + seg : seg) +
    ':' +
    (mil < 10 ? '0' + mil : mil)
  // Mostrar no display
  document.getElementsByClassName('timer')[0].innerText = formato
}
