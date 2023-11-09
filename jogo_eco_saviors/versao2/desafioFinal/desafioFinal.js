function btnDesafioFinal(){
let opcoes = prompt(`
Digite 1, 2 ou 3 para escolher a opção correta:
1: Encontrar os vilões e detê-los antes de soltarem as bombas.
2: Criar uma super proteção para as bombas não atingirem o planeta.
3: Criar bombas para contra atacarem e destruírem a dos bandidos.`)

if (opcoes == 1){
    alert ("Você venceu. Deteve os vilões e salvou o planeta.");
    location.replace("../vencedor/vencedor.html");
    }else if (opcoes == 2){
          alert ("Você perdeu. Sua proteção falhou e o planeta foi destruído.");
          location.replace("../gameOver/gameOver.html")
          }  else if (opcoes == 3){
                  alert ("Você perdeu, as bombas se chocaram uma com as outras e o planeta foi destruído.");
                  location.replace("../gameOver/gameOver.html");
          }
          else {
                alert("Dados incorreto. Digite 1, 2 ou 3.");
               }
}