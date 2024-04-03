options = ["","pedra","tesoura","papel"];
var player = prompt('Digite o sua opção: \n[1]pedra\n[2]tesoura\n[3]papel');
var enemy = Math.floor(Math.random() * 2) + 1;
window.alert("Inimigo escolheu  a opção "+options[enemy]);

if (player == enemy){
    window.alert("Deu Empate! Vocês dois escolheram "+ options[player]);
}else if(player == 1){
    switch(enemy){
        case 2: window.alert("Você venceu, "+options[player]+ " vence "+options[enemy]+"!"); break;
        case 3: window.alert("Você perdeu, "+options[player]+ " perde para "+options[enemy]+"!"); break;
    }
}else if(player == 2){
    switch(enemy){
        case 1: window.alert("Você perdeu, "+options[player]+ " perde para "+options[enemy]+"!"); break;
        case 3: window.alert("Você ganhou, "+options[player]+ " vence "+options[enemy]+"!"); break;
    }
}else if(player == 3){
    switch(enemy){
        case 1: window.alert("Você ganhou, "+options[player]+ " vence "+options[enemy]+"!"); break;
        case 2: window.alert("Você perdeu, "+options[player]+ " perde para "+options[enemy]+"!"); break;
    }
}
