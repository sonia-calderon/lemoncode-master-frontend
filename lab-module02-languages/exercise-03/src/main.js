///// Clone
console.log('///////////////////////////////////////////// CLONE - MAIN SOLUTION');

const person = {
    "name": "Sonia",
    "surname": "Calderón",
    "city": "Madrid"
};

function clone (source) {
    const newObject = {...source};
    console.log(`Clone - Resultado del nuevo objeto: `);
    console.log(newObject);
};

clone(person);

///// Merge
console.log('///////////////////////////////////////////// MERGE - MAIN SOLUTION');

const lemoncodeStudent = {
    "name": "Sonia",
    "surname": "Calderón",
    "type": "online",
    "master": "frontend"
};

function merge (source, target) {
    const mergedObject = {...source, ...target};
    console.log(`Merge - Resultado del nuevo objeto: `);
    console.log(mergedObject)
};

merge(person, lemoncodeStudent);