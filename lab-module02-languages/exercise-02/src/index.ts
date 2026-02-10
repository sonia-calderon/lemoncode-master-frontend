///// Concat
const mainCities: string[] = ["Madrid", "Barcelona", "Bilbao", "Valencia", "Sevilla"];

const moreCities: string[] = ["Málaga", "Zaragoza", "Gijón", "Toledo", "Salamanca"];

const otherCities: string[] = ["Donosti", "Granada", "Santa Cruz de Tenerife", "Mérida"];

// Solución principal
console.log('///////////////////////////////////////////// MAIN SOLUTION');

const concat01 = (a: string[], b: string[]): void => {
    const result = [...a, ...b];
    console.log(`Concat - Resultado: ${result}`);
    console.log(result);
};

concat01(mainCities, moreCities);

// Otra solución sin utilizar rest/spread
console.log('///////////////////////////////////////////// OTHER SOLUTION WITHOUT REST/SPREAD');

const concat02 = (a: string[], b: string[]): void => {
    const result = a.concat(b);
    console.log(`Concat - Otra solución: ${result}`);
    console.log(result);
};

concat02(mainCities, moreCities);

// Solución de ejercicio opcional
console.log('///////////////////////////////////////////// OPTIONAL EXCERCISE SOLUTION');

const concat03 = (...arrays: string[][]): void => {
    const result = arrays.reduce((acc, arr) => {
        return [...acc, ...arr];
    });
    console.log(`Concat Opcional - Solución: ${result}`);
    console.log(result)
};

concat03(mainCities, moreCities, otherCities);

console.log('///////////////////////////////////////////// OPTIONAL EXCERCISE OTHER SOLUTION');

const concat04 = (...arrays: string[][]): void  => {
    const result = arrays.flat();
    console.log(`Concat Opcional - Otra solución: ${result}`);
    console.log(result);
};

concat04(mainCities, moreCities, otherCities);

