 function btnb1(){
     var opcoes = prompt (`
     1: Partir para o confronto corporal de imediato, afinal o momento requer uma ação urgente. 
     2: Acionar os órgãos competentes para definição de uma estratégia, mas isso pode levar alguns dias. 
     3: Utilizar seus super poderes para neutralizar a ação dos caçadores.`);

       if(opcoes == 1){
         alert("Você perdeu, foi morto pelos caçadores.");
         location.replace("gameover.html");
       }
        else if (opcoes == 2){
          alert("Você perdeu, os caçadores executaram vários animais e já foram embora");
          location.replace("gameover.html");
        }
         else if(opcoes == 3) {
          alert("Parabéns, Você prendeu os caçadores e passou de fase");
          location.replace("fase2biologo.html");
         }
          else {
           alert("Dados incorreto. Digite 1, 2 ou 3.");
          }
}

 function btnb2(){
     var opcoes = prompt (`
     1: Permitir a construção, pois no projeto foi informado que a cada árvore cortada, será plantada duas em outra localidade.
     2: Encontrar outra opção viável para a construção do empreendimento.
     3: Ir a Floresta e ficar no local para impedir a obra.`);

      if(opcoes == 1) {
       alert("Você perdeu. Destruiu a Floresta Encantada.");
       location.replace("gameover.html");
     }
       else if(opcoes == 2) {
        alert("Parabéns, Você preservou a Floresta e passou de fase");
        location.replace("fase3biologo.html");
       }
        else if(opcoes == 3) {
         alert("Você perdeu. foi preso e destruiu a floresta");
         location.replace("gameover.html")
        }
         else {
          alert("Dados incorreto. Digite 1, 2 ou 3.");
         }
}
 
function btn(){
  var opcoes = prompt (`
  1: Econtrar os vilões e detê-los antes de soltar a bomba.
  2: Criar uma super proteção para a bomba não atingir o planeta.
  3: Criar uma bomba para destruir a dos bandidos.`);

   if(opcoes == 1) {
    alert("Você venceu. Deteve os vilões e salvou o planeta");
    location.replace("vencedor.html");
  }
    else if(opcoes == 2) {
     alert("Você perdeu. Sua proteção falhou e o planeta foi destruído.");
     location.replace("gameover.html");
    }
     else if(opcoes == 3) {
      alert("Você perdeu. As duas bombas se chocaram e o planeta foi destruído");
      location.replace("gameover.html");
     }
      else {
       alert("Dados incorreto. Digite 1, 2 ou 3.");
      }
}

function btnh1(){
  var opcoes = prompt (`
  1: Partir para o confronto corporal de imediato, afinal o momento requer uma ação urgente. 
  2: Acionar os órgãos competentes para definição de uma estratégia, mas isso pode levar alguns dias. 
  3: Utilizar seus super poderes para neutralizar a ação dos caçadores.`);

    if(opcoes == 1){
      alert("Você perdeu, foi morto pelos caçadores.");
      location.replace("gameover.html");
    }
     else if (opcoes == 2){
       alert("Você perdeu, os caçadores executaram vários animais e já foram embora");
       location.replace("gameover.html");
     }
      else if(opcoes == 3) {
       alert("Parabéns, Você prendeu os caçadores e passou de fase");
       location.replace("fase2heroina.html");
      }
       else {
        alert("Dados incorreto. Digite 1, 2 ou 3.");
       }
}

function btnh2(){
  var opcoes = prompt (`
  1: Permitir a construção, pois no projeto foi informado que a cada árvore cortada, será plantada duas em outra localidade.
  2: Encontrar outra opção viável para a construção do empreendimento.
  3: Ir a Floresta e ficar no local para impedir a obra.`);

   if(opcoes == 1) {
    alert("Você perdeu. Destruiu a Floresta Encantada.");
    location.replace("gameover.html");
  }
    else if(opcoes == 2) {
     alert("Parabéns, Você preservou a Floresta e passou de fase");
     location.replace("fase3heroina.html");
    }
     else if(opcoes == 3) {
      alert("Você perdeu. foi preso e destruiu a floresta");
      location.replace("gameover.html")
     }
      else {
       alert("Dados incorreto. Digite 1, 2 ou 3.");
      }
}

function btng1(){
  var opcoes = prompt (`
  1: Partir para o confronto corporal de imediato, afinal o momento requer uma ação urgente. 
  2: Acionar os órgãos competentes para definição de uma estratégia, mas isso pode levar alguns dias. 
  3: Utilizar seus super poderes para neutralizar a ação dos caçadores.`);

    if(opcoes == 1){
      alert("Você perdeu, foi morto pelos caçadores.");
      location.replace("gameover.html");
    }
     else if (opcoes == 2){
       alert("Você perdeu, os caçadores executaram vários animais e já foram embora");
       location.replace("gameover.html");
     }
      else if(opcoes == 3) {
       alert("Parabéns, Você prendeu os caçadores e passou de fase");
       location.replace("fase2guarda.html");
      }
       else {
        alert("Dados incorreto. Digite 1, 2 ou 3.");
       }
}

function btng2(){
  var opcoes = prompt (`
  1: Permitir a construção, pois no projeto foi informado que a cada árvore cortada, será plantada duas em outra localidade.
  2: Encontrar outra opção viável para a construção do empreendimento.
  3: Ir a Floresta e ficar no local para impedir a obra.`);

   if(opcoes == 1) {
    alert("Você perdeu. Destruiu a Floresta Encantada.");
    location.replace("gameover.html");
  }
    else if(opcoes == 2) {
     alert("Parabéns, Você preservou a Floresta e passou de fase");
     location.replace("fase3guarda.html");
    }
     else if(opcoes == 3) {
      alert("Você perdeu. foi preso e destruiu a floresta");
      location.replace("gameover.html")
     }
      else {
       alert("Dados incorreto. Digite 1, 2 ou 3.");
      }
}
