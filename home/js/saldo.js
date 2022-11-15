function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
};

addStyle(`
.saldoNegativo{
    color:#d93025 !important;
} 
.saldoNegativo::selection {
    color: white;
    background: #d93025;
}
.saldoPositivo{
    color:#188038 !important;
}
.saldoPositivo::selection {
    color: white;
    background: #188038;
}
`);

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
};
