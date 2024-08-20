//1

var nums = [6, 5, 2];

function soma() {
    var soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

function qddNum(a, b) {
    var num = [a * a, b * b];
    return num;
}

var quadrado = qddNum.apply(null, nums.slice(0, 2));


alert("1 ) A soma dos elementos é " + soma.apply(null, nums) + "\nO quadrado do primeiro número é " + quadrado[0] + "\nO quadrado do segundo número é " + quadrado[1]);


//2

function palavras(p1,p2){
    if (!p1 || !p2 || p1.trim() === "" || p2.trim() === "") {
        return "erro";
    }else if (p1.includes(p2) || p2.includes(p1)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}
//erro
alert("1º ' ' & 2º casa\n" +palavras("", "casa"))
alert("1º local & 2º undefined\n" +palavras("local", undefined))

//subconjunto
alert("1º tratamento & 2º tratam\n" +palavras("tratamento", "tratam"))
alert("1º livra & 2º livramento\n" +palavras("livra", "livramento"))

//não é um subconjunto
alert("1º vídeo & 2º sala\n" +palavras("vídeo", "sala"))
alert("1º casa & 2º chacará\n" +palavras("casa", "chacará"))
