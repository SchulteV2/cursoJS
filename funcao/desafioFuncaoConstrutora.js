function pessoa(nome){
    this.nome = nome

    this.getNome = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.getNome()