var options = [["Piedra",0],["Papel",1],["Tijera",2]]
var score = [
    {name:"Derrota", cantidad: 0},
    {name:"Victoria", cantidad: 0},
    {name:"Empate", cantidad: 0}
]


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function check(opt1,opt2)
{
    //Piedra,Papel,Tijera
    var matriz=[
        [[2],[0],[1]],
        [[1],[2],[0]],
        [[0],[1],[2]]
    ];
    return matriz[opt1][opt2];
}
                                                                                                                                                          


function jugar(opt)
{
    var bot_option = options[getRandomInt(0,3)];
    console.log("el bot elige "+bot_option[0]);
    console.log("Usted elige "+opt[0]);

    var ans=check(opt[1],bot_option[1]);
    score[ans][1]+=1;

    return score[ans]["name"];
}

var opt =["Piedra",0]
jugar(opt);


