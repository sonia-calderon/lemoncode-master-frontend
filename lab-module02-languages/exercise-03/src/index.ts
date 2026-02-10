///// Clone
console.log('///////////////////////////////////////////// CLONE - MAIN SOLUTION');

interface Person {
    name: string;
    surname: string;
    city: string;
};

const person: Person = {
    "name": "Sonia",
    "surname": "Calderón",
    "city": "Madrid"
};

function clone (source: object): void {
    const newObject: object = {...source};
    console.log(`Clone - Resultado del nuevo objeto: `);
    console.log(newObject);
};

clone(person);

///// Merge
console.log('///////////////////////////////////////////// MERGE - MAIN SOLUTION');

interface Student {
    name: string;
    surname: string;
    type: string;
    master: string;
}

const lemoncodeStudent: Student = {
    "name": "Test",
    "surname": "Calderón",
    "type": "online",
    "master": "frontend"
};

function merge (source: object, target: object): void {
    const mergedObject: object = {...target, ...source};
    console.log(`Merge - Resultado del nuevo objeto: `);
    console.log(mergedObject)
};

merge(person, lemoncodeStudent);