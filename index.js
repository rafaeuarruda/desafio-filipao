let nickname = "Rhaennerys"
let experiencia = 10.000
let nivel = if (experiencia<=1000) {console.log("Ferro");}
else if (experiencia<=2000) {console.log("Bronze");} 
else if (experiencia<=5000) {console.log("Prata");}
else if (experiencia<=7000) {console.log("Ouro");}
else if (experiencia<=8000) {console.log("Platina");}
else if (experiencia<=9000) {console.log("Ascendente");}
else if (experiencia<=10000) {console.log("Imortal");}
else if (experiencia>=10001) {console.log("Radiante");}


const mensagem = "O Herói de nome" + nickname "está no nível de" + nivel 

console.log(mensagem)


