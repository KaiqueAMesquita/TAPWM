//1)

function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

const retangulo1 = new Retangulo(5, 10);

const area = retangulo1.calcularArea();
alert("A área do retângulo é: " + area);


//2)

function Conta(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
}

Conta.prototype = {
    getNomeCorrentista: function() {return this.nomeCorrentista;},
    
    setNomeCorrentista: function(nome) { this.nomeCorrentista = nome;},

    getBanco: function() {return this.banco;},

    setBanco: function(banco) {this.banco = banco;},

    getNumeroConta: function() {return this.numeroConta;},

    setNumeroConta: function(numero) { this.numeroConta = numero;},

    getSaldo: function() {return this.saldo;},

    setSaldo: function(saldo) {this.saldo = saldo;}
};

function Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;
}

Corrente.prototype = Object.create(Conta.prototype);
Corrente.prototype.constructor = Corrente;

Corrente.prototype.getSaldoEspecial = function() {
    return this.saldoEspecial;
};
Corrente.prototype.setSaldoEspecial = function(saldoEspecial) {
    this.saldoEspecial = saldoEspecial;
};

function Poupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
}

Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca;

Poupanca.prototype.getJuros = function() {
    return this.juros;
};
Poupanca.prototype.setJuros = function(juros) {
    this.juros = juros;
};
Poupanca.prototype.getDataVencimento = function() {
    return this.dataVencimento;
};
Poupanca.prototype.setDataVencimento = function(dataVencimento) {
    this.dataVencimento = dataVencimento;
};

var contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista('João da Silva');
contaCorrente.setBanco('Banco ABC');
contaCorrente.setNumeroConta('54321-0');
contaCorrente.setSaldo(2000);
contaCorrente.setSaldoEspecial(300);

var contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista('Maria dos Santos');
contaPoupanca.setBanco('Banco GHI');
contaPoupanca.setNumeroConta('09876-5');
contaPoupanca.setSaldo(3500);
contaPoupanca.setJuros(0.07);
contaPoupanca.setDataVencimento('2026-01-31');

alert('Conta Corrente:\n' +
      'Nome: ' + contaCorrente.getNomeCorrentista() + '\n' +
      'Banco: ' + contaCorrente.getBanco() + '\n' +
      'Número da Conta: ' + contaCorrente.getNumeroConta() + '\n' +
      'Saldo: ' + contaCorrente.getSaldo() + '\n' +
      'Saldo Especial: ' + contaCorrente.getSaldoEspecial());

alert('Conta Poupança:\n' +
      'Nome: ' + contaPoupanca.getNomeCorrentista() + '\n' +
      'Banco: ' + contaPoupanca.getBanco() + '\n' +
      'Número da Conta: ' + contaPoupanca.getNumeroConta() + '\n' +
      'Saldo: ' + contaPoupanca.getSaldo() + '\n' +
      'Juros: ' + contaPoupanca.getJuros() + '\n' +
      'Data de Vencimento: ' + contaPoupanca.getDataVencimento());
