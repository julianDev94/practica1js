let valor = parseInt(prompt("Ingrese un valor para saber si es divisible por 2: "));
if(valor % 2 === 0){
    document.write(`<p>El valor ${valor} es divisible por 2</p>`);
}else{
    document.write(`<p>El valor ${valor} no es divisible por 2</p>`);
}