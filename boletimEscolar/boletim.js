 function boletim(){

   
   let nomeDoAluno = document.querySelector("#nomealuno");
   let notaDoAluno1 = document.querySelector('#nota1');
   let notaDoAluno2 = document.querySelector('#nota2');
   let notaDoAluno3 = document.querySelector('#nota3');
   let notaDoAluno4 = document.querySelector('#nota4');
   
   let nome = String(nomeDoAluno.value);
   let num1 = Number(notaDoAluno1.value);
   let num2 = Number(notaDoAluno2.value);
   let num3 = Number(notaDoAluno3.value);
   let num4 = Number(notaDoAluno4.value);
   
    let soma = num1 + num2 + num3 + num4;
    let media = (soma / 4);

    
    while (nome.length < 2 || nome < 0 || nome >= 0){
      nome = prompt("Nome Inválido. Digite novamente")
    }
    
    while (num1 > 10 || num1 < 0){
      num1 = prompt("Valor Inválido. Digite um número entre 1 e 10")
    }
    
    while (num2 > 10 || num2 < 0){
      num2 = prompt("Valor Inválido. Digite um número entre 1 e 10")
    }

    
    while (num3> 10 || num3 < 0){
      num3 = prompt("Valor Inválido. Digite um número entre 1 e 10")
    }

    while (num4 > 10 || num4 < 0){
      num4 = prompt("Valor Inválido. Digite um número entre 1 e 10")
    }

    if (media >= 7){
        // alert (`O(a) aluno(a) ${nome} foi aprovado com a média ${media}.`);
        var res = document.getElementsByTagName('p')[0]
        res.innerText = `O(a) aluno(a) ${nome} foi aprovado com a média ${media}.`

     } else if (media >= 5 && media < 7){
        //alert (`O(a) aluno(a) ${nome} está de recuperação. média ${media}.`);
        var res = document.getElementsByTagName('p')[0]
        res.innerText = `O(a) aluno(a) ${nome} está de recuperação. média ${media}.`

      } else {
        //alert (`O(a) aluno(a) ${nome} foi reprovado com a média ${media}.`);
        var res = document.getElementsByTagName('p')[0]
        res.innerText = `O(a) aluno(a) ${nome} foi reprovado com a média ${media}.`
       }

      
}

function ApenasLetras(e, t) {
   try {
       if (window.event) {
           var charCode = window.event.keyCode;
       } else if (e) {
           var charCode = e.which;
       } else {
           return true;
       }
       if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
           return true;
       else
           return false;
   } catch (err) {
       alert(err.Description);
   }
}


