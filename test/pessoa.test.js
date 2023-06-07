const assert = require('assert').strict
const Pessoa = require('..') //npx mocha

describe('Teste - Desafio 4 MTS - Julio de Lima\n', function(){
    it('Verificação se a quantidade de itens na lista está correto', function(){
        const pessoa = new Pessoa()
        assert.equal(pessoa.listarPessoas(), 6)
    })
})
