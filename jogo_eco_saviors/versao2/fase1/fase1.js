function btnFase1Guarda(){
    let opcoes = prompt (`
    Digite 1, 2 ou 3 para marcar a opção desejada:
    1: Partir para o confronto corporal de imediato, afinal o momento requer uma ação urgente. 
    2: Acionar os órgãos competentes para definição de uma estratégia, mas isso pode levar alguns dias. 
    3: Utilizar seus super poderes para neutralizar a ação dos caçadores.`);

      if(opcoes == 1){
        alert("Você perdeu, foi morto pelos caçadores.");
        location.replace("../gameOver/gameOver.html");
      }
       else if (opcoes == 2){
         alert("Você perdeu, os caçadores executaram vários animais foram embora.");
         location.replace("../gameOver/gameOver.html");
       }
        else if(opcoes == 3) {
         alert("Parabéns, Você prendeu os caçadores e passou de fase.");
         location.replace("../fase2/fase2Guarda.html");
        }
         else {
          alert("Dados incorreto. Digite 1, 2 ou 3.");
         }
}

function btnFase1Heroina(){
    let opcoes = prompt(`
    Digite 1, 2 ou 3 para marcar a opção desejada:
    1: Ativar uma escudo protetor contra armas químicas na área de preservação.
    2: Retirar todas os animais da área de preservação.
    3: Descobrir quem são os vilões e prendê-los.`)

     if (opcoes == 1){
       alert ("Parabéns. Você ativou o escudo com sucesso e toda a área foi preservada.");
       location.replace("../fase2/fase2Heroina.html");
     }
      else if (opcoes == 2){
         alert ("Você perdeu, não deu tempo de retirar todos os animais e a maioria morreu.");
         location.replace("../gameOver/gameOver.html");
      }
       else if (opcoes == 3){
          alert ("Você perdeu, enquanto tentava descobrir os vilões, eles conseguiram ativar a arma química e acabar com a área de preservação.");
          location.replace("../gameOver/gameOver.html");
       }
       else {
        alert("Dados incorreto. Digite 1, 2 ou 3.");
       }
}

function btnFase1Biologo(){
  let opcoes = prompt(`
  Digite 1, 2 ou 3 para marcar a opção desejada:
  1: Fazer uma fórmula para aplicar nas aguas, plantas e frutas, tirando os efeitos da contaminação.
  2: Purificar uma área isolada, colocar todas as éspécies nela enquanto for descontaminando o restante da mata.
  3: Deixar que os animais procurem locais para se salvar devido ao seu instinto de sobrevivência.`)

   if (opcoes == 1){
     alert ("Você perdeu, Até a fórmula ficar pronta, toda a área de preservação foi destruída.");
     location.replace("../gameOver/gameOver.html");
   }
    else if (opcoes == 2){
       alert ("Parabéns, você agiu rápido e salvou todas as espécies da área de preservação.");
       location.replace("../fase2/fase2Biologo.html");
    }
     else if (opcoes == 3){
        alert ("Você perdeu, os animais não encontraram locais descontaminados e morreram.");
        location.replace("../gameOver/gameOver.html");
     }
     else {
      alert("Dados incorreto. Digite 1, 2 ou 3.");
     }
}