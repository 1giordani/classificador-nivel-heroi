# ⚔️ Classificador de Nível de Herói

Projeto de lógica de programação do desafio da DIO. Classifica heróis de acordo com sua experiência (XP), utilizando JavaScript.

## Objetivo

Armazenar nome e XP de heróis, determinar o nível de cada um e exibir a mensagem:

```text
O Herói de nome {nome} está no nível de {nivel}
```

## Conceitos utilizados

| Conceito | Aplicação |
| --- | --- |
| Variáveis | `nome`, `xp` e `nivel` |
| Operadores | Atribuição, comparação e operadores lógicos |
| Laço de repetição | `for...of` para percorrer a lista de heróis |
| Estruturas de decisão | `if`, `else if` e `else` para classificar o XP |

## Faixas de classificação

| XP | Nível |
| --- | --- |
| 0 a 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| A partir de 10.001 | Radiante |

**Decisão sobre o enunciado:** o desafio original não define o nível para exatamente 1.000 XP. Neste projeto, esse valor foi incluído em Ferro para não deixar uma lacuna. O XP deve ser um número inteiro não negativo e representável com segurança em JavaScript; entradas inválidas recebem uma mensagem e não são classificadas.

## Como executar

Pré-requisito: Node.js instalado.

1. Baixe os arquivos do projeto.
2. Abra o terminal na pasta que contém `index.js`.
3. Execute:

```bash
node index.js
```

Saída dos exemplos:

```text
O Herói de nome Giordani está no nível de Platina
O Herói de nome Thor está no nível de Bronze
O Herói de nome Diana está no nível de Radiante
```

## Como personalizar

Edite a lista `herois` no início de `index.js`. Por exemplo:

```javascript
const herois = [
  { nome: "Giordani", xp: 10001 }
];
```

Execute novamente. O herói será classificado como Radiante.

As condições são avaliadas em sequência: ao chegar a `xp <= 8000`, os valores até 7.000 já foram descartados, portanto essa condição corresponde à faixa de Platina.

## Arquivos

- `index.js`: código comentado do classificador.
- `README.md`: documentação do projeto.

## Contexto

Desenvolvido como solução de estudo para o desafio **Classificador de Nível de Herói**, da DIO. Não utiliza dependências externas, banco de dados ou template Figma.
