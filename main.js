function listarPessoas(lista){

    //definindo as variaveis

    // let listaDePessoas = []
    let contador = 0

    //exibindo uma tabela com todos os dados informados

    console.log(`------------------------Tabela com os dados informados------------------------\n\n`)
    // console.table(listaDePessoas)
    console.table(lista)
    console.log(`\n\n----------------Analisando se é Criança, Adolescente ou Adulto----------------\n\n`)
    
    //realizando a classificação
    
    lista.forEach(pessoa => {
        if(pessoa.idade < 12){
            console.log(`Temos uma criança aqui! ${pessoa.nome} com apenas ${pessoa.idade} anos e de posse do E-mail: ${pessoa.email}.`)
        }
        else{
            if(pessoa.idade < 18){
                console.log(`Temos uma adolescente aqui! ${pessoa.nome} ja não é mais criança, com seus ja ${pessoa.idade} anos e de posse do E-mail: ${pessoa.email}.`)
            }
            else{
                console.log(`Temos um adulto aqui! ${pessoa.nome} ja está na maioridade com seus ${pessoa.idade} anos de experiência e de posse do E-mail: ${pessoa.email}.`)
            }
        }

        //contando as pessoas na lista

        contador++
    });

    console.log(`\n\n--------------------------------Fim da Analise--------------------------------\n\n`)

    //retornando o contador de pessoas na lista

    return contador;
}

module.exports = listarPessoas