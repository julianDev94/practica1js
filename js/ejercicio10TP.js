let valor = parseInt(prompt("Ingrese un valor: "));

if(valor % 2 === 0){
    alert(`El valor ${valor} es divisible por 2`);
}else if(valor % 3 === 0){
    alert(`El valor ${valor} es divisible por 3`);
}else if(valor % 5 === 0){
    alert(`El valor ${valor} es divisible por 5`);
}else if( valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 7`);
}