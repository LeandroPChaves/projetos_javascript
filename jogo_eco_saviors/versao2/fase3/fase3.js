function btnFase3Guarda(){
    let opcoes = prompt(`
    Digite 1, 2 ou 3 para escolher a Opção desejada:
    1: Buscar aliança com uma forte potência. assim apoiando ela na guerra.
    2: Procurar uma caverna para se proteger e assim ficar fora da guerra.
    3: Buscar acordos de Paz entre as potência inimigas para afastar o perigo da guerra.`)

    if (opcoes == 1){
        alert ("Você perdeu, pode até estar no lado vencedor, mas a guerra trouxe várias baixas e enorme prejuízo ao mundo.");
        location.replace("../gameOver/gameOver.html");
    } else if (opcoes == 2){
          alert ("Você Perdeu. Não evitou a guerra e morreu com uma bomba que atingiu a caverna.");
          location.replace("../gameOver/gameOver.html");
     } else if (opcoes == 3){
            alert ("Parabéns, Você buscou a Paz e a conversa em um ambiente de enorme tensão. A guerra não ocorreu e o planeta foi salvo.")
            location.replace("../desafioFinal/desafioFinal.html");
      } else {
        alert("Dados incorreto. Digite 1, 2 ou 3.");
      }
}

function btnFase3Heroina(){
    let opcoes = prompt(`
    Digite 1, 2 ou 3 para escolher a Opção desejada:
    1: Identificar qual a nação está iniciando a guerra e destruí-la.
    2: Ir para um lugar isolado em outra galáxia e deixar que a guerra aconteça, afinal vc estará a salvo.
    3: Mostrar as nações que as pendências podem ser resolvidas no diálogo com cada um cedendo uma parte.`)

    if (opcoes == 1){
        alert ("Você perdeu, Destruiu a nação que iniciou a guerra, porém outras nações se revoltaram e a guerra ocorreu da mesma forma.");
        location.replace("../gameOver/gameOver.html");
    } else if (opcoes == 2){
          alert ("Você Perdeu. Não evitou a guerra, o planeta foi destruído e você ficou sozinho vivendo com tristeza e solidão.");
          location.replace("../gameOver/gameOver.html");
     } else if (opcoes == 3){
            alert ("Parabéns, Você buscou a Paz e a conversa em um ambiente de enorme tensão. A guerra não ocorreu e o planeta foi salvo.")
            location.replace("../desafioFinal/desafioFinal.html");
      } else {
        alert("Dados incorreto. Digite 1, 2 ou 3.");
      }
}

function btnFase3Biologo(){
    let opcoes = prompt(`
    Digite 1, 2 ou 3 para escolher a Opção desejada:
    1: Aplicar sanções comerciais, esportivas e políticas nas principais nações que estão forçando o início da guerra.
    2: Acionar todos os órgãos de proteção Mundial para buscar um consenso entre as nações, evitando a guerra.
    3: O Biólogo finalizou uma fórmula que cura de qualquer doença e acordou com as nações que em caso de paz libera a fórmula para todos.`)

    if (opcoes == 1){
        alert ("Você perdeu, Mesmo com aplicações de sanções, os países mais entusiastas pela guerra se reuniram e deram início a terrível guerra Mundial.");
        location.replace("../gameOver/gameOver.html");
    } else if (opcoes == 2){
          alert ("Você Venceu. ONU, OTAN, UNIÃO EUROPÉIA, MERCOSUL e demais tratados que representam os principais países entraram em acordo e a Guerra foi cancelada. O planeta foi salvo.");
          location.replace("../desafioFinal/desafioFinal.html");
     } else if (opcoes == 3){
            alert ("Você perdeu, O Biólogo foi traído, assasinado, sua fórmula foi roubada e a Guerra agora tem o poder da fórmula como principal motivo.")
            location.replace("../gameOver/gameOver.html");
      } else {
        alert("Dados incorreto. Digite 1, 2 ou 3.");
      }
}