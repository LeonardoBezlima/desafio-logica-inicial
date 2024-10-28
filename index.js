let nome = ""
let quantidadeDexp = 1000;



if(quantidadeDexp < 1000){
    nome = "Ferro"
  
}
else if(quantidadeDexp >= 1001 && quantidadeDexp <= 2000){
    nome = "Bronze"
    
}
else if(quantidadeDexp >= 2001 && quantidadeDexp <= 5000){
    nome = "Prata"
    
}
else if(quantidadeDexp >= 6001 && quantidadeDexp<=7000){
    nome = "Ouro"
    
}
else if(quantidadeDexp >= 7001 && quantidadeDexp<=8000){
    nome = "Platina"
    
}
else if(quantidadeDexp >= 8001 && quantidadeDexp <=9000){
    nome = "Ascendente"
    
}
else if(quantidadeDexp >= 9001 && quantidadeDexp<=10000){
    nome = "Imortal"
    
}
else if(quantidadeDexp >= 10001){
    nome = "Radiante"
    
}

console.log("O Herói de nome " + nome + " está no nível de " + quantidadeDexp )