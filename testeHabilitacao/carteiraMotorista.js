//Programa para verificar se uma pessoa ja pode tirar carteira de motorista

function podeDirigir(){
    let nome = document.getElementById('nomeVerifica');
    let idade = document.getElementById('idadeVerifica');
    let nome1 = String(nome.value);
    let idade1 = Number(idade.value);


        while (nome1.length < 2 || nome1 < 0 || nome1 >= 0){
            nome1 = prompt("Nome Inválido. Digite novamente")
        }
        
        while (idade1 == ""|| idade1 >= "a" || idade1 > 100){
            idade1 = prompt("Idade inválida. Digite novamente")
        }
            if (idade1 >= 18){
                alert(` Com ${idade1} anos , o Sr(a) ${nome1} pode dirigir.`);
                
            } else {
                alert(` Com ${idade1} anos, o Sr(a) ${nome1} não pode dirigir.`);
            }
}



