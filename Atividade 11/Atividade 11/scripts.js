function maiorNumeroIf(n1, n2 ,n3){
    maior = n1;
    if(n1 < n2){
        maior = n2;
    } if(n2 < n3){
        maior = n3;
    }
    return maior;
}

function maiorNumeroMax(n1, n2 ,n3){
    var nums = [n1, n2, n3];
    var max = Math.max(...nums);

    return max;
}

function ordemCrescente(n1, n2, n3){
    var nums = [n1, n2, n3];
    for(let i = 0; i < nums.length+1; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] > nums[j+1]){
            let aux = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = aux;
        }
        }
    return nums;

}}

alert(maiorNumeroIf(2,11,10));
alert(maiorNumeroMax(4,15,21));
numeros = ordemCrescente(32,21,41);
alert(numeros[0]+" "+ numeros[1] +" "+numeros[2]);