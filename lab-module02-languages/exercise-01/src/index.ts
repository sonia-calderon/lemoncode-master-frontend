console.log('/////////////////////////////////////////////');

const cities: string[] = ["Madrid", "Barcelona", "Bilbao", "Valencia", "Sevilla"];

///// Head
const head01 = (array: string[]): void => {
    const [first, second, third, fourth, fifth] = array;
    console.log(`Head01 - resultado: ${first}`);
};

head01(cities);

const head02 = ([first, ]: string[]): void => {
    console.log(`Head02 - resultado: ${first}`);
};

head02(cities);

console.log('/////////////////////////////////////////////');

///// Tail
const tail = (array: string[]): void => {
    const [first, ...rest] = array;
    console.log(`Tail - resultado: ${rest}`);
    console.log(`Tail - el array sigue siendo inmutable: ${array}`);
};

tail(cities);

console.log('/////////////////////////////////////////////');

///// Init
const init = (array: string[]): void => {
    const result = array.slice(0, 4)
    console.log(`Init - resultado: ${result}`);
    console.log(`Init - el array sigue siendo inmutable: ${array}`);
};

init(cities);

console.log('/////////////////////////////////////////////');

///// Last
const last01 = (array: string[]): void => {
    const result = array.slice(4, 5);
    console.log(`Last01 - resultado: ${result}`);
    console.log(`Last01 - el array sigue siendo inmutable: ${array}`);
};

last01(cities);

const last02 = (array: string[]): void => {
    const [first, second, third, fourth, fifth] = array;
    console.log(`Last02 - resultado: ${fifth}`);
    console.log(`Last02 - el array sigue siendo inmutable: ${array}`);
};

last02(cities);