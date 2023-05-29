document.getElementById('calcular').addEventListener('click', function () {
  var principal = parseFloat(document.getElementById('principal').value);
  var taxa = parseFloat(document.getElementById('taxa').value) / 100;
  var periodo = parseInt(document.getElementById('periodo').value);

  var simplesSelecionado = document.getElementById('simples').checked;
  var compostoSelecionado = document.getElementById('composto').checked;

  var jurosSimples = 0;
  var jurosCompostos = 0;

  if (simplesSelecionado) {
    jurosSimples = principal * taxa * periodo;
  }

  if (compostoSelecionado) {
    jurosCompostos = principal * Math.pow(1 + taxa, periodo) - principal;
  }
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Juros Simples: R$ ' + jurosSimples.toFixed(2) + '<br>Juros Compostos: R$ ' + jurosCompostos.toFixed(2);
});


const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

var theme = "dark";
const container = document.getElementsByClassName("escuro")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}

function setLight() {
  container.classList.remove("preto");
  setTimeout(() => {
    container.classList.add("branco");
  }, 50);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}

function setDark() {
  container.classList.remove("branco");
  setTimeout(() => {
    container.classList.add("preto");
  }, 50);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}

function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('escuro');
}