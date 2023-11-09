 function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || Number(fano.value) > ano){
       alert ('Verifique os dados e tente novamente')
   }  else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute ('id', 'foto')
      if (fsex[0].checked) {
          genero = "Masculino"
          if (idade >= 0 && idade < 12) { 
            img.setAttribute('src', 'imagem/criancamasculino.jpg') 
          }
           else if (idade < 21) {
            img.setAttribute('src', 'imagem/jovemmasculino.jpg')   
           }
            else if (idade < 50) {
              img.setAttribute('src', 'imagem/adulto.jpg')    
            }
             else {
              img.setAttribute('src', 'imagem/idoso.jpg')  
             }
             
      } 
        else if (fsex[1].checked){
          genero = "Feminino"
          if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagem/criancafeminina.jpg') 
          }
           else if (idade < 21) {
            img.setAttribute('src', 'imagem/jovemfeminina.jpg')  
           }
            else if (idade < 50) {
              img.setAttribute('src', 'imagem/adulta.jpg')   
            }
             else {
              img.setAttribute('src', 'imagem/idosa.jpg') 
             }
          
        }
      
      res.innerHTML = `A pessoa  é do sexo ${genero} e tem ${idade} anos.`  
      res.appendChild(img)
   }
    

 }