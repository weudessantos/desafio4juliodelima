class Pessoa{
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    listarPessoas(){

        //definindo as variaveis

        let listaDePessoas = []
        let contador = 0

        //criando as pessoas

        let pessoa1 = new Pessoa("João Martins", 17, "joao.martins@desafio4.juliodelima.com")
        let pessoa2 = new Pessoa("Rita de Cassia", 18, "rita.cassia@desafio4.juliodelima.com")
        let pessoa3 = new Pessoa("Maria Mendes", 11, "maria.mendes@desafio4.juliodelima.com")
        let pessoa4 = new Pessoa("Clodoaldo Augusto", 40, "clodoaldo.augusto@desafio4.juliodelima.com")
        let pessoa5 = new Pessoa("Renan Rocha", 12, "renan.rocha@desafio4.juliodelima.com")
        let pessoa6 = new Pessoa("Gabriel Sena", 8, "gabriel.sena@desafio4.juliodelima.com")

        //setando as pessoas na lista

        listaDePessoas.push(pessoa1)
        listaDePessoas.push(pessoa2)
        listaDePessoas.push(pessoa3)
        listaDePessoas.push(pessoa4)
        listaDePessoas.push(pessoa5)
        listaDePessoas.push(pessoa6)

        //exibindo uma tabela com todos os dados informados

        console.log(`------------------------Tabela com os dados informados------------------------\n\n`)
        console.table(listaDePessoas)
        console.log(`\n\n----------------Analisando se é Criança, Adolescente ou Adulto----------------\n\n`)
        
        //realizando a classificação

        listaDePessoas.forEach(pessoa => {
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


}

//rodar o codigo do node apenas

//const pessoa = new Pessoa()
//pessoa.listarPessoas();

//exportar a classe para utilizar no 

module.exports = Pessoa