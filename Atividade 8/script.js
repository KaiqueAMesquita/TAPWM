pessoasAEntrevistar = 2;
entrevistados  = new Array(pessoasAEntrevistar);

function entrevistado(nome, idade, sexo, opniao){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.opniao  = opniao;
}

for(var i = 0; i < pessoasAEntrevistar; i++){
nomeE = prompt("Digite seu nome: ");
idadeE = parseInt(prompt("Digite sua idade: "));
sexoE = prompt("Digite seu sexo, feminino(F), masculino(M)");
opniaoE = parseInt(prompt(` 
Qual sua avialação sobre o filme?
1- péssimo
2- regular
3 - bom
4 - ótimo`));
entrevistados[i] = new entrevistado(nomeE, idadeE, sexoE, opniaoE);
}
alert(`
    A média de idade dos entrevistados é  ${media()}\n
    A pessoa mais velha entrevista tem ${maisVelho()} e a mais jovem ${maisNovo()}\n
    O número de pessoas que deram nota péssima ao filme foi de ${qtdPessimo()}\n
    A porcentagem de pessoas que votoram em bom e ótimo foi ${perOtimoBom()}%\n    
    O número de mulheres é ${numeroSexo().qntF} e o de homens ${numeroSexo().qntM}
`)



//media idade
function media(){
idadeTotal = 0;
for(var j = 0; j < entrevistados.length;j++ ){
   idadeTotal+=entrevistados [j].idade;
}
media = idadeTotal / entrevistados.length;
return media;

}
//mais velho
function maisVelho(){
    maisvelho = entrevistados[0].idade;
    for(var j = 0; j < entrevistados.length; j ++){
        if (entrevistados[j].idade > maisvelho.idade){
            maisvelho = entrevistados[j].idade;
        }
    }
    return maisvelho;
}
//mais novo
function maisNovo(){
    maisNovo = entrevistados[0].idade;
    for(var j = 0; j < entrevistados.length; j ++){
        if (entrevistados[j].idade < maisNovo.idade){
            maisNovo = entrevistados[j].idade;
        }
    }
    return maisNovo;
}

//quantidade que votaram em pessimo
function qtdPessimo(){
pessimo = 0;
for(var j = 0; j < entrevistados.length;j++){
    if(entrevistados[j].opniao == 1){
        pessimo++;
    }
    }
    return pessimo;
}

//porcentagem de otimo e bom
function perOtimoBom() {
    qnt = 0;
    total = entrevistados.length;
    porcentagem = 0;
    for(var i = 0; i < total; i++){
        if(entrevistados[i].opniao == 3 || entrevistados[i].opniao == 4){
            qnt++;
        }
    }
    porcentagem = (qnt / total) * 100; 
    return porcentagem;
}
//número de homens e de mulher
function numeroSexo(){
    qnt = {
        qntM: 0,
        qntF: 0
    }
    for(var i = 0;i < entrevistados.length;i++){
        if(entrevistados[i].sexo == "M"){
            qnt.qntM++;
        }else if(entrevistados[i].sexo == "F"){
            qnt.qntF++
        }
}
return qnt;
}