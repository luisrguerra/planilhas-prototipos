const allSaldoByClass = document.getElementsByClassName('saldo');
for (let contagem = 0; contagem < allSaldoByClass.length; contagem++) {
  const texto = allSaldoByClass[contagem].textContent;
  const isNegativo = texto.includes("-");
  if (isNegativo){
    allSaldoByClass[contagem].style.color = '#d93025';
  }
  else{ /*positivo*/
    allSaldoByClass[contagem].style.color = '#188038';
  }
}
