function desenharCanvas() {
  jogo.lineWidth = 8;
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.fillStyle = "#F3F5FC";
  jogo.strokeStyle = "#0A3871";
  jogo.fillRect(0, 0, 1200, 800);
  jogo.beginPath();
  jogo.moveTo(650, 500);
  jogo.lineTo(900, 500);
  jogo.stroke();
  jogo.closePath();
}

function desenharLinhas() {
  jogo.lineWidth = 6;
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.strokeStyle = "#0A3871";
  jogo.beginPath();
  let largura = 600 / palavraSecreta.length;
  for (let i = 0; i < palavraSecreta.length; i++) {
    jogo.moveTo(500 + largura * i, 640);
    jogo.lineTo(550 + largura * i, 640);
  }
  jogo.stroke();
  jogo.closePath();
}
function escreverLetraCorreta(index) {
  jogo.font = "bold 52px Inter";
  jogo.lineWidth = 6;
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.fillStyle = "#0A3871";
  let largura = 600 / palavraSecreta.length;
  jogo.fillText(palavraSecreta[index], 505 + largura * index, 620);
  jogo.stroke();
}

function escreverLetraIncorreta(letra, errorsLeft) {
  jogo.lineWidth = 6;
  jogo.font = "bold 40px Inter";
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.fillStyle = "#0A3871";
  jogo.fillText(letra, 535 + 40 * (10 - errorsLeft), 710, 40);
}

function desenharForca(pontos) {
  jogo.lineWidth = 8;
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.strokeStyle = "#0A3871";
  if (pontos === 8) {
    jogo.moveTo(700, 500);
    jogo.lineTo(700, 100);
  }
  if (pontos === 7) {
    jogo.moveTo(850, 100);
    jogo.lineTo(700, 100);
  }
  if (pontos === 6) {
    jogo.moveTo(850, 100);
    jogo.lineTo(850, 171);
  }
  if (pontos === 5) {
    jogo.moveTo(900, 230);
    jogo.arc(850, 230, 50, 0, Math.PI * 2);
  }
  if (pontos === 4) {
    jogo.moveTo(850, 389);
    jogo.lineTo(850, 289);
  }
  if (pontos === 3) {
    jogo.moveTo(850, 389);
    jogo.lineTo(800, 450);
  }
  if (pontos === 2) {
    jogo.moveTo(850, 389);
    jogo.lineTo(890, 450);
  }
  if (pontos === 1) {
    jogo.moveTo(850, 330);
    jogo.lineTo(800, 389);
  }
  if (pontos === 0) {
    jogo.moveTo(850, 330);
    jogo.lineTo(890, 389);
  }
  jogo.stroke();
  jogo.closePath();
}

function exibirDerrota() {
  jogo.font = " bold 42px Inter";
  jogo.lineWidth = 6;
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.fillStyle = "red";
  jogo.fillText("Fim de jogo!", 930, 320);
}

function exibirVitoria() {
  jogo.font = "bold 42px Inter";
  jogo.lineWidth = 6;
  jogo.lineCap = "round";
  jogo.lineJoin = "round";
  jogo.fillStyle = "green";
  jogo.fillText("Ganhou,", 950, 320);
  jogo.fillText("Parabéns!", 930, 360);
  setTimeout(recarregar, 1000);
}

function recarregar() {
  location.reload();
}
