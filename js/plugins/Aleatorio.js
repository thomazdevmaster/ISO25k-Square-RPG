var numerosGerados = [];

// Função para gerar números aleatórios únicos
function gerarNumeroUnico(min, max) {
  var numero;
  do {
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numerosGerados.includes(numero) || 
          ((numero == 2 || numero == 8) && numerosGerados.length == 0)
  );
  numerosGerados.push(numero);
  console.log(numerosGerados)
  return numero;
}