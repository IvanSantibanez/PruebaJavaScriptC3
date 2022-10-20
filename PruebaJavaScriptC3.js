//EJERCICIO 1

/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.*/


var compra = [1000,500,2000,12000]
var dia = 'lunes'
var totalCompra = 0;
function descuentoDias (dia){
    for ( i=0;i<compra.length;i++){
       
        if (dia == 'lunes'|| 'miercoles'||'viernes'||'sabado'||'domingo'){
            totalCompra = totalCompra+compra[i];
           return console.log('El total de su compra es: '+ totalCompra);
        }else{
            totalCompra = totalCompra*0.80;
            console.log('El total de su compra es: '+totalCompra);
        }
    }
}

compraSinDescuento = descuentoDias ('lunes');


//EJERCICIO2

/*Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.*/
var compra2 = [1000,200,650,15000]
var nuevoTotal = []
var compraMayor = compra2[0];
function descuentoCompra (compra2){
    for (i=0;i<compra2.length;i++)
        if(compra2[i]>compraMayor){
           compraMayor = compra[i]
            if (compra2.length > 3 && compraMayor>10000){
                return console.log(compra2.forEach(i => nuevoTotal.push(i*0.95)));
                    
                

            }
    }
}
descuentoCompra(compra2);




//EJERCICIO3
/*
Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba. */


var compra3 = [1000,200,300,-600]
var compraMenor = compra3[0];
function valoresNeg (compra3){
    for (i =0;i<compra3.length;i++){
        if(compra[i]<compraMenor){
            console.log(compraMenor = compra[i])
        }
    }return compraMenor
}

var valorMenor = valoresNeg(compra3)
console.log(valorMenor)


//EJERCICIO4

/*Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ 
○ 
*/
//Crea una función que retorne el valor del producto menos costoso.

var arreglo = [200,5500,900,7000,500,300];
var menorValor = arreglo[0];
function menosCostoso (arreglo){
    for(i=0;i<arreglo.length;i++){
        if (arreglo[i]<menorValor){
            menorValor = arreglo[i]
            
        } 
    
    } return menorValor;
} 
var productoMenosCostoso = menosCostoso(arreglo)
console.log('El valor menos costoso es: '+productoMenosCostoso);

// Crea una función que retorne el valor del producto más costoso.

//function masCostoso ()
var mayorValor = arreglo[0]
function masCostoso (arreglo){
    for ( i=0;i<arreglo.length;i++){
        if (arreglo[i]>mayorValor){
            mayorValor=arreglo[i]
            
        }
    } return mayorValor;
}

var productoMasCosotoso = masCostoso(arreglo)
console.log('El valor mas cosotos es: '+mayorValor)



