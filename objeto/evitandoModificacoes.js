// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.nome = 'Cleito'
pessoa.idade = 15
console.log(pessoa)

// Object.freeze = selado + valores constantes
const carro = { marca: 'Volvo', modelo: 'A40'}
Object.freeze(carro)
console.log('Selado:', Object.isSealed(carro))
carro.velFinal = 350
delete carro.marca
carro.marca = 'Audi'
carro.modelo = 'R8'
console.log(carro)