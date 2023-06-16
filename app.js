// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 106.58;
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 159.88;
    return valueInPound;
} 
console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(4.2))
console.log(fromYenToPound(447.636))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };