console.log(`Trabalhando com listas`);

console.log(`Destinos possíveis`);

//Listas
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

listaDeDestinos.push(`Rio Grande do Sul`, `Ceara`); //Adicionando itens na lista

listaDeDestinos.splice(1,1); //Deletando itens na lista

console.log(listaDeDestinos[1]); //Imprimindo um item especifico da lista

//Itens da lista começam a contagem apartir de 0 e não de 1

console.log(listaDeDestinos);


