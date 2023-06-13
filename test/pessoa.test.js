const listarPessoas = require("../main.js")
const assert = require('assert').strict
const Pessoa = require('../Pessoa') //npx mocha

describe('Teste - Desafio 4 MTS - Julio de Lima\n', function(){
    it('Verificação se a quantidade de itens na lista está correto', function(){

        let listaDePessoas = []

        let pessoa1 = new Pessoa("João Martins", 17, "joao.martins@desafio4.juliodelima.com")
        let pessoa2 = new Pessoa("Rita de Cassia", 18, "rita.cassia@desafio4.juliodelima.com")
        let pessoa3 = new Pessoa("Maria Mendes", 11, "maria.mendes@desafio4.juliodelima.com")
        let pessoa4 = new Pessoa("Clodoaldo Augusto", 40, "clodoaldo.augusto@desafio4.juliodelima.com")
        let pessoa5 = new Pessoa("Renan Rocha", 12, "renan.rocha@desafio4.juliodelima.com")
        let pessoa6 = new Pessoa("Gabriel Sena", 8, "gabriel.sena@desafio4.juliodelima.com")
        
        listaDePessoas.push(pessoa1)
        listaDePessoas.push(pessoa2)
        listaDePessoas.push(pessoa3)
        listaDePessoas.push(pessoa4)
        listaDePessoas.push(pessoa5)
        listaDePessoas.push(pessoa6)

        assert.equal(listarPessoas(listaDePessoas), 6)
    })
})
