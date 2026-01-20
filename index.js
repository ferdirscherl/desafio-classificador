// 1. Variáveis: Criando uma lista de heróis para usar o laço de repetição
let herois = [
    { nome: "Arthur", xp: 950 },
    { nome: "Jiana", xp: 2500 },
    { nome: "Uther", xp: 7500 },
    { nome: "Sylvanas", xp: 10005 }
];

// 2. Laço de repetição: Percorre cada herói da lista
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // 3. Estrutura de decisão e Operadores: Define o nível baseado no XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // 4. Saída: Exibe a mensagem conforme o padrão solicitado
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}
