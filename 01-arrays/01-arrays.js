
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if(array[i] > 9) { 
            continue
    } else {
        newArray.unshift(array[i])
    }
}
    return newArray
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    var min1 = array1[0]
    var min2 = array2[0]
for(var i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) !== -1) {
        return array1[i]
} else if (array1[i] < min1) {
    min1 = array1[i]
}
}
for (var j = 0; j < array2.length; j++) {
    if (array2[j] < min2) {
        min2 = array2[j]
    } 
}
if (min1 < min2) {
    return min1
} else {
    return min2
}
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    var newArray = [];
            for (var i = 0; i < array.length; i++) {
                if (Array.isArray(array[i])) {
                    sumArr = 0;
                    for (var j = 0; j < array[i].length; j++) {
                        sumArr += array[i][j];
                    }
                    newArray.push(sumArr);
                } else if (typeof array[i] === 'number') {
                    newArray.push(array[i]);
                }
            }
            return newArray;
        };


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    if (Number.isInteger(numero / divisor)) {
        var resultado = numero / divisor;
        var aux = divisor;
        var newArr = [];
        while (aux > 0) {
            newArr.push(resultado);
            aux--
        }
    } else {
        return false;
    }
    return newArr;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    var min = array[0];
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
    min = array[i];
    } else if (array[i] > max) {
    max = array[i]
    }
    }
    for (var j = 0; j < array.length; j++) {
    if (array[j] !== min && array[j] !== max) {
        array.splice(j, 1);
        j--;
    }
    }
    return array;
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};