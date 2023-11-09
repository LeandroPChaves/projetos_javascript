function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var ola = document.getElementsByTagName('h2')[0];
var data = new Date();
var hora = data.getHours();
//var hora = 20
msg.innerHTML = `Agora são ${hora} horas <br> <br>`

if (hora >= 0 && hora < 12){
   img.src = 'Imagem/Manha.jpg'
   document.body.style.background = "#e2cd9f"
   ola.innerText = "Bom Dia"
}
 else if (hora >=12 && hora < 18) {
     img.src = 'Imagem/tarde.jpg'
     document.body.style.background = "#b9846f"
     ola.innerText = "Boa Tarde"
 }
  else {
      img.src = 'Imagem/noite.jpg'
      document.body.style.background = "#515154"
      ola.innerText = "Boa Noite"
  }
}

