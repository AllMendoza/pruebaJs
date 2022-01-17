console.log("Hola");


function calcularPerimetro(){
    let input = document.getElementById("InputCuadrado");
    let ladoCuadrado = input.value;
    console.log("los lados del cuadrado mdien:"+ladoCuadrado*4);
    alert("los lados del cuadrado mdien:"+ladoCuadrado*4);
}
//calcularPerimetro(10);
function CalcularDescuento(){
    let costo = document.getElementById("InputCosto").value;
    let descuento = document.getElementById("InputDescuento").value;
    let resultP = document.getElementById("ResultP");
    resultP.innerText ="te saldra al final en "+ (costo*(100-descuento)/100)+" Pesos";
}

