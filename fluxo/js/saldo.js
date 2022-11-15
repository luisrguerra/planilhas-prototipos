const allSaldoByClass = document.getElementsByClassName('saldo');
for (let contagem = 0; contagem < allSaldoByClass.length; contagem++) {
  const element =  allSaldoByClass[contagem];
  const texto = element.textContent;
  const isNegativo = texto.includes("-");
  if (isNegativo){
   element.classList.add("saldoNegativo");
  }
  else{ /*positivo*/
   element.classList.add("saldoPositivo");
  }
}
