///// Concat
const mainCities = ["Madrid", "Barcelona", "Bilbao", "Valencia", "Sevilla"];

const moreCities = ["Málaga", "Zaragoza", "Gijón", "Toledo", "Salamanca"];

const otherCities = ["Donosti", "Granada", "Santa Cruz de Tenerife", "Mérida"];

const otherCities02 = ["León", "Santander"];

// Solución principal
console.log('///////////////////////////////////////////// MAIN SOLUTION');

const concat01 = (a, b) => {
    const result = [...a, ...b];
    console.log(`Concat - Resultado: ${result}`);
    console.log(result);
};

concat01(mainCities, moreCities);

// Otra solución sin utilizar rest/spread
console.log('///////////////////////////////////////////// OTHER SOLUTION WITHOUT REST/SPREAD');

const concat02 = (a, b) => {
    const result = a.concat(b);
    console.log(`Concat - Otra solución: ${result}`);
    console.log(result);
};

concat02(mainCities, moreCities);

// Solución de ejercicio opcional
console.log('///////////////////////////////////////////// OPTIONAL EXCERCISE SOLUTION');

const concat03 = (...array) => {
    const result = array.reduce((acc, arr) => {
        console.log(arr)
        return [...acc, ...arr];
    });
    console.log(`Concat Opcional - Solución: ${result}`);
    console.log(result)
};

concat03(mainCities, moreCities, otherCities);

console.log('///////////////////////////////////////////// OPTIONAL EXCERCISE OTHER SOLUTION');

const concat04 = (...array) => {
    const result = array.flat();
    console.log(`Concat Opcional - Otra solución: ${result}`);
    console.log(result);
};

concat04(mainCities, moreCities, otherCities);

