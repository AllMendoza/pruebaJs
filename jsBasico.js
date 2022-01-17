//Clase 1: Valores
    /*Valores Primitivos*/ 
    40
    "Allan Mendoza"
    true
    false
    null
    undefined 

    /* Valores de objeto*/

    [1,2,3]
    {1,2,3}
    /*Checar el tipo de un objeto*/
    typeof 40 
    //Null se llama a si mismo un tipo Objeto, cuidado

//Clase 2 Variables
    var nombre = "Allan";
    var elements = ["indio","heineken"];

    var frutas =["manzana","platano"];
    frutas = frutas.push("uvas"); //lo mete al final
    frutas = frutas.pop("uvas"); //lo elimina
    frutas = frutas.unshift("uvas");//lo mete al inicio
    frutas = frutas.shift("uvas");//elimina el primer elemento con nombre..

    var posicion = frutas.indexOf("platano");




    var Cheves = {
        nombre: "indio",
        costo: 15
    };

    var elem = ["e1", "e2"];
    elem[0]
    //Accesas al e1

//Clase 3 Funciones 
    //funcion clasica
     function test(a,b){
        return a+b;
     }
     //Funcion anonima
     var var_fun = finction(a,b)
                    { return a+b;}

     function printt(someting){
         console.log(someting);
     }
     printt("Hola");

    // (`) es con altGr + }
     function SaludarEstudiantes(estudiante){
        console.log(`Hola ${estudiante}`);
        }

//Clase 5 parse String/number
    var a = 20; //number
    var b = String(a); //string
    var c = Number(c); //Number

    //booleans falsos
    Boolean(0);
    Boolean(null);
    Boolean(NaN);
    Boolean(undefined);
    Boolean(false);
    Boolean("")

    //booleans verdaderos
    Boolean(1);
    Boolean(2);//cualquier numero no 0
    Boolean(function f(){});//cualquier funcion
    Boolean({});//cualquier objeto

//clase 6 flujo basico
    var a = 1; //Asigna
    3=="3" //Compara que el valor sea igual TRUE en este caso
    3 === "3" //Compara Valor y tipo False en este caos

    a&&b //a y b es verdad...
    a||b //a o b es verdad...

    if(false)
    {
        console.log("Hola");
    } else 
    {
        console.log("Fue Falso");
    }

    var numero =1;
    var resultado = numero === 1 ? "Si soy Uno": "No soy Uno";

    var numero = 1;
    switch(numero)
    {
        case 1:
            console.log("Caso 1");
            break;
        case 2:
            console.log("Caso 2");
            break;
        default:
            console.log("opcion invalida");
    }

    var juegos =["chrono","zelda", "Xcom", "starcraft"];

    for(var i=0; i < juegos.length; i++)
    {
        console.log(juegos[i] +" Es un gran juego!");
    }

    for (var juego of juegos)
    {
        console.log(juego +" Es un gran juego!");
    }

    while(juegos.length>0){
        var juego = juegos.shift();
        console.log(juego +" Es un gran juego!");
    }

//Objetos
    var personaje = {
        nombre: "Ritz",
        edad: 23,
        elemento:"Tierra/Rayo/Fuego",
        detalle:function(){
            return this.nombre+ "Es un personaje de un juego de roll con "+this.edad+"años";
        }
    };

    personaje.detalle;


var articulos =[
    {nombre: "bici",costo:3000},
    {nombre: "tv",costo:2500},
    {nombre: "libro",costo:320},
    {nombre: "lap",costo:1000},
    {nombre: "teclado",costo:20000},
    {nombre: "audifonos",costo:500}
]
//Opcion 1 Filtro
var articulosFiltrados = articulos.filter(function (articulo){
    return articulo.costo<=1000
})

articulosFiltrados[0] //te trae de los menores a 1000 el primero que seria libro

//Opcion 2 Map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})

//Opcion Find
var searchArticulo = articulos.find(function(articulo){
    return articulo.nombre === "lap"
})

//Opcion Foreach //No crea nuevo solo filtra
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// Some... es un.. si existe... True/False
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo<=700;
})