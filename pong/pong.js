let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d'); 

let x = 0; //variável eixo x
let y = 0; // variável eixo y
let raio = 8; // variável raio da bola
let velocidadeX = 8; //velocidade da bola eixo x
let velocidadeY = 8; //velocidade da bola eixo y
let xRaqueteCasa = 2; // posição da raquete do jogador no eixo x
let xRaqueteFora = 588; // posição da raquete da máquina no eixo x
let yRaqueteCasa = 150; // posição da raquete do jogador no eixo y
let yRaqueteFora = 150; // posição da raquete da máquina no eixo y
let raqueteComprimento = 10; // Comprimento da raquete
let raqueteAltura = 80; // Altura da raquete
let teclaCima = 38; // tecla PgUp para manusear a raquete para cima
let teclaBaixo = 40; // tecla PgDn para manusear a raquete para baixo 
let velocidadeyOponente; // Veloicidade da raquete do oponente
let divisoriaX = 300; // posição da linha do meio no eixo x
let divisoriaY = 0; // posição da linha do meio no eixo y
let divisoriaComprimento = 5; // comprimento da linha do meio
let divisoriaAltura = 400; // altura da linha do meio

    //Definindo a cor preta para a quadra
    pincel.fillStyle = "black";
    pincel.fillRect(0,0,600,400);

    //Função para criar a bola
    function desenhaCirculo(x, y, raio){
        pincel.fillStyle = "white";
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill()
    }

    //Criando a primeira raquete
    function criarRaquete1(xRaqueteCasa, yRaqueteCasa, raqueteComprimento, raqueteAltura){
        pincel.fillStyle = "white";
        pincel.fillRect(xRaqueteCasa, yRaqueteCasa, raqueteComprimento, raqueteAltura);
    }

    //Criando a segunda raquete
    function criarRaquete2(xRaqueteFora, yRaqueteFora, raqueteComprimento, raqueteAltura){
        pincel.fillStyle = "white";
        pincel.fillRect(xRaqueteFora, yRaqueteFora, raqueteComprimento, raqueteAltura);
    }

    //Criando a linha do meio
    function criarDivisoria(divisoriaX, divisoriaY, divisoriaComprimento, divisoriaAltura){
        pincel.fillStyle = "white";
        pincel.fillRect(divisoriaX, divisoriaY, divisoriaComprimento, divisoriaAltura);
    }

    
    //Função que limpa a tela para que o movimento possa acontecer
    function limpaTela(){
        pincel.clearRect(0,0,600,400);
    }  

    //Função que faz o jogo acontecer: limpa a tela, recria a quadra, as raquetes e a linha do meio.
    //Faz a programação para a bola andar e no final programa a raquente da máquina para se movimentar.
    function atualizaTela(){
        limpaTela();
        pincel.fillStyle = "black";
        pincel.fillRect(0,0,600,400);
        criarRaquete1(xRaqueteCasa, yRaqueteCasa, raqueteComprimento, raqueteAltura);
        criarRaquete2(xRaqueteFora, yRaqueteFora, raqueteComprimento, raqueteAltura);
        criarDivisoria(divisoriaX, divisoriaY, divisoriaComprimento, divisoriaAltura);
        
        
        x += velocidadeX;  // x = x + velocidadeX
        y += velocidadeY;  // y = y + velocidadeY

        // if e else if para fazer a bola tocar na borda e voltar
        if (x >= 600 - raio || x <= 0 - (raio - 13)){
            velocidadeX *= -1
            
        } else if (y >= 400 - raio|| y <= 0 - (raio - 13)) {
            velocidadeY *= -1  
        }
        
        // if que calcula o impacto da bola com a raquete
        if (x - raio < xRaqueteCasa + raqueteComprimento && y - raio < yRaqueteCasa + raqueteAltura && y + raio > yRaqueteCasa) { 
            velocidadeX *= -1
        }
        
        // faz a raquete do oponente se movimentar
        velocidadeyOponente = y - yRaqueteFora - raqueteComprimento / 2 - 80;
        yRaqueteFora += velocidadeyOponente;

        desenhaCirculo(x,y,raio);
         
         
    }
    setInterval(atualizaTela, 30);   // setInterval define o tempo que a bola vai andar
    
    //Essa função recebe um evento, através do KeyCode mostra o código da tecla e com essas informações realizamos o if para manipular a tecla. e através do addEventListener que escuta o evento, chamamos a função mostraNumTecla.
    function mostraNumTecla(evento){
        // alert(evento.keyCode);
        let key = evento.keyCode;
        if(key === teclaCima){
            yRaqueteCasa -= 10;
        }
        if (key === teclaBaixo) {
            yRaqueteCasa += 10;
        }
        
    }
    window.addEventListener("keydown", mostraNumTecla)
    mostraNumTecla(evento);
    