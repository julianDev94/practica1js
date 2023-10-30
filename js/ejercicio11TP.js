let valor = parseInt(prompt("Ingrese un valor: "));

if(valor % 2 === 0 && valor % 3 === 0 && valor % 5 === 0 && valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 2, 3, 5, 7`);
}else if(valor % 2 === 0 && valor % 3 === 0 && valor % 5 === 0){
    alert(`El valor ${valor} es divisible por 2, 3, 5`);
}else if(valor % 3 === 0 && valor % 5 === 0 && valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 3, 5, 7`);
}else if(valor % 2 === 0 && valor % 3 === 0){
    alert(`El valor ${valor} es divisible por 2, 3`);
}else if(valor % 2 === 0 && valor % 5 === 0){
    alert(`El valor ${valor} es divisible por 2, 5`);
}else if(valor % 2 === 0 && valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 2, 7`);
}else if(valor % 3 === 0 && valor % 5 === 0){
    alert(`El valor ${valor} es divisible por 3, 5`);
}else if(valor % 3 === 0 && valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 3, 7`);
}else if(valor % 5 === 0 && valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 5, 7`);
}else if(valor % 2 === 0){
    alert(`El valor ${valor} es divisible por 2`);
}else if(valor % 3 === 0){
    alert(`El valor ${valor} es divisible por 3`);
}else if(valor % 5 === 0){
    alert(`El valor ${valor} es divisible por 5`);
}else if( valor % 7 === 0){
    alert(`El valor ${valor} es divisible por 7`);
}

