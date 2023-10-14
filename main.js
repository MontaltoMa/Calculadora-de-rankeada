let vitorias = 150;

let derrotas = 50;

let ranked = "" ;

function calculadora () {
    let resultado = vitorias - derrotas;
    return resultado
}


if (calculadora() <= 10) {
    ranked = "Ferro"
}else if (calculadora() <= 20) {
    ranked = "Bronze"
}else if (calculadora() <= 50) {
    ranked = "Prata"
}else if (calculadora() <= 80) {
    ranked = "Ouro"
}else if (calculadora() <= 90) {
    ranked = "Diamante"
}else if (calculadora() <= 100) {
    ranked = "Lendário"
}else {
    ranked = "Imortal"
}

console.log(`O Herói tem de saldo de vitorias de: ${calculadora()}, e está nível: ${ranked}`);