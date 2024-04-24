
altura = prompt("Digite sua altura em metros: ");
peso = prompt("Digite seu peso");

parseFloat(altura);
parseFloat(peso);

imc = peso/Math.pow(altura,2).toFixed(2);

if(imc < 18.5){
    alert(`Seu IMC é ${imc} e você está abaixo do Peso Ideal.`);
}else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu IMC é ${imc} e você está no Peso Ideal.`);
} else if (imc > 24.9 && imc <= 29.9) {
    alert(`Seu IMC é ${imc} e você está com Sobrepeso.`);
} else if(imc > 30 && imc < 39.9){
    alert(`Seu IMC é ${imc} e você tem Obesidade.`);
}else{
    alert(`Seu IMC é ${imc} e você tem Obesidade Grave`)
}