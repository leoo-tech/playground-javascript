//gerar cor aleatoria
function geraCorAleatoria() {
  var letras = "0123456789ABCDEF";
  var cor = "#";
  for (var i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

//calcular cor e mudar a cor do texto

function calculaLuminosidade(cor) {
  var r = parseInt(cor.substr(1, 2), 16);
  var g = parseInt(cor.substr(3, 2), 16);
  var b = parseInt(cor.substr(5, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

// Função para mudar a cor de fundo e cor do texto
function mudaCorDeFundo() {
  var cor = geraCorAleatoria();
  document.body.style.backgroundColor = cor;
  if (calculaLuminosidade(cor) > 128) {
    document.body.style.color = "black";
  } else {
    document.body.style.color = "white";
  }
}

// Adiciona um ouvinte de evento ao botão
document.getElementById("botao").addEventListener("click", mudaCorDeFundo);

//somar e subtrair
var valor = document.getElementById("valor");
var soma = document.getElementById("soma");
var subtrai = document.getElementById("subtrai");

soma.addEventListener("click", function () {
  if (parseInt(valor.innerText) < 5) {
    valor.innerText = parseInt(valor.innerText) + 1;
  }
});

subtrai.addEventListener("click", function () {
  if (parseInt(valor.innerText) > 0) {
    valor.innerText = parseInt(valor.innerText) - 1;
  }
});

//verificar se é divisivel
function verificaDivisibilidade(num1, num2) {
  if (num2 === 0) {
    return "Divisão por zero não é permitida.";
  }
  return num1 % num2 === 0 ? "Divisível" : "Não divisível";
}

var botao = document.getElementById("botaoDivide");
botao.addEventListener("click", function () {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var resultado = verificaDivisibilidade(num1, num2);
  document.getElementById("resultadoDivide").innerText = resultado;
});

//verificar o mes
function exibeMes(numero) {
  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (numero < 1 || numero > 12) {
    return "Valor do mês incorreto";
  } else {
    return meses[numero - 1];
  }
}

var botao = document.getElementById("botaoMes");
botao.addEventListener("click", function () {
  var numero = document.getElementById("numero").value;
  var resultado = exibeMes(numero);
  document.getElementById("resultado").innerText = resultado;
});

//contador de palavras
var frase = document.getElementById("frase");
var contador = document.getElementById("contador");

frase.addEventListener("input", function () {
  var palavras = frase.value.split(/\s+/).filter(function (palavra) {
    return palavra.length > 0;
  });
  contador.innerText = palavras.length + " palavras";
});
