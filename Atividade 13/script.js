// Notação Literal
const Aluno1 = {
    ra: '123456',
    nome: 'João Silva'
};

alert(Aluno1.ra + " | " + Aluno1.nome);

// Função Construtora
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;
}

const Aluno2 = new Aluno('123456', 'Luiz Felipe');

alert(Aluno2.ra + " | " + Aluno2.nome);

// Classe
class Aluno3 {
    constructor(ra, nome) {
        this.ra = ra;
        this.nome = nome;
    }
}

const Aluno4 = new Aluno3('123456', 'Ricardo Silva');

alert(Aluno4.ra + " | " + Aluno4.nome);
