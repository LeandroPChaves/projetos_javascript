function btnFase2Guarda(){
    let opcoes = prompt (`
    Digite 1, 2 ou 3 para marcar a opção desejada:
    1: Permitir a construção, pois no projeto foi informado que a cada árvore cortada, será plantada duas em outra localidade.
    2: Encontrar outra opção viável para a construção do empreendimento.
    3: Ir até a floresta e ficar no local para impedir a obra.`);

    if(opcoes == 1){
        alert("Você perdeu, destruiu a Floresta Encantada.");
        location.replace("../gameOver/gameOver.html");
      }
       else if (opcoes == 2){
         alert("Parabéns, Você preservou a floresta e passou de fase.");
         location.replace("../fase3/fase3Guarda.html");
       }
        else if(opcoes == 3) {
         alert("Você perdeu, foi preso e a floresta destruída.");
         location.replace("../gameOver/gameOver.html");
        }
         else {
          alert("Dados incorreto. Digite 1, 2 ou 3.");
         }

}

function btnFase2Heroina(){
   let opcoes = prompt (`
   Digite 1, 2 ou 3 para marcar a opção desejada:
   1: Manter o planejamento do autódromo e shopping, pois não irá afetar a Floresta Encantada.
   2: Destruir o Projeto a todo o custo, pois a floresta será afetada.
   3: Acionar os órgãos competentes e conseguir conforme a Lei vetar o projeto.`);

   if (opcoes == 1){
      alert("Você perdeu, A construção do Shopping e autódromo acabou com a Floresta Encantada.");
      location.replace("../gameOver/gameOver.html");
   } 
      else if (opcoes == 2){
        alert("Você perdeu, Temos que agir de forma planejada. O seu despero fortaleceu aqueles que são contra a natureza e a Floresta Encantada foi destruída.");
        location.replace("../gameOver/gameOver.html"); 
        } 
          else if (opcoes == 3){
          alert("Você venceu. A justiça prevaleceu, o Projeto foi cancelado e a Floresta Encantada preservada.");
          location.replace("../fase3/fase3Heroina.html");
        }
        else {
          alert("Dados incorreto. Digite 1, 2 ou 3.");
        }
}  

function btnFase2Biologo(){
  let opcoes = prompt (`
  Digite 1, 2 ou 3 para marcar a opção desejada:
  1: Fiscalizar e controlar todos os movimentos das empresas em relação a possíveis contaminações, orientando-as da forma correta de agir para manutenção da Floresta Encantada.
  2: Traçar um plano para tirar todas as empresas ao redor da Floresta Encantada.
  3: Multar as empresas a cada ação que contamine a Floresta Encantada.`);

  if (opcoes == 1){
     alert("Você venceu, sua dedicação tem sido de extrema importância para conscientização das empresas pela Preservação da Floresta.");
     location.replace("../fase3/fase3Biologo.html");
  } 
    else if (opcoes == 2){
       alert("Você perdeu, Não devemos retirar as empresas e sim conscientizá-las. Sem a ação correta, as empresas contaminaram a Floresta até acabar com toda a área natural.");
       location.replace("../gameOver/gameOver.html"); 
       } 
        else if (opcoes == 3){
         alert("Você perdeu. Multar as empresas a todo instante não resolve o problema e a contaminação prosseguiu mesmo com as multas.");
         location.replace("../gameOver/gameOver.html");
       }
       else {
         alert("Dados incorreto. Digite 1, 2 ou 3.");
       }
} 
   