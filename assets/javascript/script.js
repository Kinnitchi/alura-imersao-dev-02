function converterRealParaDolar() {
  let valorInserido = parseFloat(document.getElementById("valorReal").value);
  let cotacaoDolar = parseFloat(document.getElementById("valorDolar").value);
  const cotacaoBitcoin = 197142.05;
  const valorConvertido = (valorInserido * cotacaoDolar).toFixed(2);
  const valorEmBitcoin = (valorInserido * cotacaoBitcoin).toFixed(2);

  const textoValorConvertido =
    "O valor convertido em Dólar é: U$ " + valorConvertido;
  const textoValorConvertidoEmBitcoin =
    "O valor convertido em BTC é: BTC " + valorEmBitcoin;

  document.getElementById("valorConvertido").innerHTML = textoValorConvertido;
  document.getElementById("valorConvertidoEmBitcoin").innerHTML =
    textoValorConvertidoEmBitcoin;
}

function converterRealParaEuro() {
  let valorInserido = parseFloat(
    document.getElementById("valorRealParaEuro").value
  );
  let cotacaoEuro = parseFloat(document.getElementById("valorEuro").value);
  const cotacaoBitcoin = 197142.05;
  const valorConvertido = (valorInserido * cotacaoEuro).toFixed(2);
  const valorEmBitcoin = (valorInserido * cotacaoBitcoin).toFixed(2);

  const textoValorConvertido =
    "O valor convertido em EUR é: € " + valorConvertido;
  const textoValorConvertidoEmBitcoin =
    "O valor convertido em BTC é: BTC " + valorEmBitcoin;

  document.getElementById("valorConvertido").innerHTML = textoValorConvertido;
  document.getElementById("valorConvertidoEmBitcoin").innerHTML =
    textoValorConvertidoEmBitcoin;
}
