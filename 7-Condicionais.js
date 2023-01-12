console.log("Trabalhando com Condicionais")

console.log(`Destinos possíveis:`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
 
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

// if(idadeComprador >= 18){
//     console.log("Venda concluida! Comprador maior de idade.");
//     listaDeDestinos.splice(1,1); //a contagem de itens da lista começa pelo 0
//     console.log(listaDeDestinos);

// }
// else if(estaAcompanhada){
//         console.log("Venda concluida! Comprador com acompanhante presente.");
//         listaDeDestinos.splice(1,1); 
//         console.log(listaDeDestinos);
//     }else{

//         console.log("Não é possivel vender a passagem para menores de idade!");
    
//     }


    if(idadeComprador >= 18  || estaAcompanhada == true){
        console.log("Venda concluida!");
        listaDeDestinos.splice(1,1); //a contagem de itens da lista começa pelo 0
        console.log(listaDeDestinos);
    
    }else{
    
            console.log("Não é possivel vender a passagem para menores de idade!");
        
        }

        console.log("Embarque: \n\n")
        
        if(idadeComprador >= 18 || estaAcompanhada && temPassagemComprada){
             console.log("Boa viagem");
        }else{
            console.log("Você não pode embarcar");
        }



//>18
//>18
//<=18
//>18
//==18



