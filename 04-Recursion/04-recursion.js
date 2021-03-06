// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  var num = array.pop();
    if (!array.length) return num;
    return num * producto(array)
};


// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 


const isThere = function (obj, value){
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }

    if (typeof (obj[key]) === 'object'){
      return isThere(obj[key], value)
    }

    //else {return false}
  }
  return false
};

// console.log(isThere(obj, "Albus"))

module.exports = { producto, isThere };
