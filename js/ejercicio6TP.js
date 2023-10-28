let valor1 = parseInt(prompt("Ingrese el primer valor: "));
let valor2 = parseInt(prompt("Ingrese el segundo valor: "));
if(valor1 > valor2){
    document.write(`<p> El valor mayor es: ${valor1}`);
}else{
    document.write(`<p> El valor mayor es: ${valor2}`);
}