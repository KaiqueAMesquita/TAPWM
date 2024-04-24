a = prompt("Digite o valor do lado a: ");
b = prompt("Digite o valor do lado b: ");
c = prompt("Digite o valor do lado c: ");

if(isNaN(a) && isNaN(b) && isNaN(c)){
    alert("Valores digitados não são números!");


}else{
    if (a == 0 || b == 0 || c == 0){
        alert ("Não é possível calcular um triângulo com zero ou menos de um dos lados.");
     } else {
         if (Math.abs(b -c) < a < (b+c) && Math.abs(a - c)< b < (a+c) && Math.abs(a-b)< c < (a+b)){
            if (a === b && b === c) {
                alert("O tipo do triangulo é Equilátero.");
            } else if (a !== b && a !== c && b !== c) {
              alert("O tipo do triangulo é Escaleno.")
            } else {
               alert("O tipo do triangulo é Isósceles.");
           };
         
         } else {
             alert("Os valores inseridos não podem formar um triângulo, pois os lados não Satisfazem a regra do triângulo.");
}
     }}
