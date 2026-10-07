// Edite os nomes e os valores de XP para experimentar.
const herois = [
  { nome: "Giordani", xp: 7500 },
  { nome: "Thor", xp: 1500 },
  { nome: "Diana", xp: 10500 }
];

for (const heroi of herois) {
  const nome = heroi.nome;
  const xp = heroi.xp;
  let nivel;

  // XP deve ser um número inteiro não negativo.
  if (!Number.isSafeInteger(xp) || xp < 0) {
    console.log(`XP inválido para o Herói ${nome}. Use um inteiro não negativo.`);
    continue;
  }

  // O enunciado omite 1.000 XP; neste projeto ele pertence a Ferro.
  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
