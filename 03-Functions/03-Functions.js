function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
var regex = /PM$/
var aux = parseInt(time);
if (!time || time[0] > 2 || time[1] > 4 || time[3] > 6 || time[6] > 6) {
    return false;
} if (regex.test(time)) {
    if (aux === 12) {
        aux = '12'
    } else {
        aux = aux + 12
    }
return aux + time.slice(2, 8)
} else if (aux === 12 && regex.test(time) === false) {
aux = '00'
return aux + time.slice(2, 8)
} else {
return time.slice(0, 8)
}
}

module.exports = {
    timeConversion
}