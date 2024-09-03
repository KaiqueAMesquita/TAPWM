class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getNomeCorrentista() {
        return this.nomeCorrentista;
    }

    setNomeCorrentista(nome) {
        this.nomeCorrentista = nome;
    }

    getBanco() {
        return this.banco;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta(numero) {
        this.numeroConta = numero;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }

    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    getJuros() {
        return this.juros;
    }

    setJuros(juros) {
        this.juros = juros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}

const contaCorrente = new Corrente('João da Silva', 'Banco ABC', '54321-0', 2000, 300);

const contaPoupanca = new Poupanca('Maria dos Santos', 'Banco GHI', '09876-5', 3500, 0.07, '2026-01-31');

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
