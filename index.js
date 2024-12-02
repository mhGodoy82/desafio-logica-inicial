const partidasRankeadas = require("readline");

const rl = partidasRankeadas.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularRank = (vitorias, derrotas) => {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) nivel = "Ferro";
    else if (vitorias <= 20) nivel = "Bronze";
    else if (vitorias <= 50) nivel = "Prata";
    else if (vitorias <= 80) nivel = "Ouro";
    else if (vitorias <= 90) nivel = "Diamante";
    else if (vitorias <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
};

rl.question("Digite o número de vitórias: ", (inputVitorias) => {
    const vitorias = parseInt(inputVitorias);

    rl.question("Digite o número de derrotas: ", (inputDerrotas) => {
        const derrotas = parseInt(inputDerrotas);

        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.log("Por favor, insira números válidos!");
        } else {
            console.log(calcularRank(vitorias, derrotas));
        }

        rl.close();
    });
});
