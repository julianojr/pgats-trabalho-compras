const calcularTotal = (ferramentas, comprar) => {
    let ferramentasEncontradas = [];
    let nomes = "";
    let somaPrecos = 0;

    if(ferramentas.length == 0 || comprar.length == 0){
        throw new Error(`Ambas as listas precisam ter ao menos um item.`);
    }
    
    for(let indiceComprar = 0; indiceComprar < comprar.length; indiceComprar++){
        for(let indiceFerramentas = 0; indiceFerramentas < ferramentas.length; indiceFerramentas++){
            if(ferramentas[indiceFerramentas].nome === comprar[indiceComprar]){
                ferramentasEncontradas[ferramentasEncontradas.length] = ferramentas[indiceFerramentas];
            }
        }
    }

    if(ferramentasEncontradas.length == 0){
        throw new Error(`Nenhuma ferramenta desejada encontrada.`); 
    }

    for (let indiceNomes = 0; indiceNomes < ferramentasEncontradas.length; indiceNomes++) {
        somaPrecos += ferramentasEncontradas[indiceNomes].preco;
        nomes += ferramentasEncontradas[indiceNomes].nome;
        if (indiceNomes < (ferramentasEncontradas.length - 1)) {
            nomes += ", ";
        }
    }

    return `O valor a pagar pelas ferramentas (${nomes}) é R$ ${somaPrecos.toFixed(2)}`;

}

module.exports = {
    calcularTotal
}