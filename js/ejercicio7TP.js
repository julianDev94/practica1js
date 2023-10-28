let valor1 = parseInt(prompt("Ingrese el primer valor: "));
let valor2 = parseInt(prompt("Ingrese el primer valor: "));
let valor3 = parseInt(prompt("Ingrese el primer valor: "));

if(valor1 > valor2 && valor1 > 3){
    document.write(`<p>El valor mayor es: ${valor1}</p>`);
}else if(valor2 > valor1 && valor2 > valor3){
    document.write(`<p>El valor mayor es: ${valor2}</p>`);
}else{
    document.write(`<p>El valor mayor es: ${valor3}</p>`);
}