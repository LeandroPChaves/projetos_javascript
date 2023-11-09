function contar(){
let num1 = document.querySelector('#numini');
let num2 = document.querySelector('#numfim');
let intervalo = document.querySelector('#numint');
let res = document.getElementsByTagName('p')[0];


let primeironum = Number(num1.value);
let segundonum = Number(num2.value);
let pulo = Number(intervalo.value);


if (primeironum == 0 || segundonum == 0 || pulo <= 0 ) {
  res.innerHTML = "Impossível contar"
}
else {
  res.innerHTML ='Contando: ';
  
  if (primeironum < segundonum) {
  for (let i = primeironum; i <= segundonum; i += pulo) {
      res.innerHTML += ` ${i} \u{1F449}`
  }
  res.innerHTML += `\u{1F3C1}`
} else { 
    for (let i = primeironum; i >= segundonum; i -=pulo) {
      res.innerHTML += ` ${i} \u{1F449}`
    }
  res.innerHTML += `\u{1F3C1}`  
}
}
} 
//Para pegar os emojis, ir no google e procurar por unicode emoji list e acessa o site unicode.org
















