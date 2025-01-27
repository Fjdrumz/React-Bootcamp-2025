const targetOne = {
    name: `John`,
    age: 25,
    address: {
        city: `New York`,
    }
};

const targetTwo = {
    name: `Rex`,   
    age: 60,
    address: {
        city: `New York`,   
    }
};

const targetThree = {
    name:  `Emmanuel`,
    age: 30,
    address: {
        city: `New Olreans`,
    }
};

const source =  Object.assign(targetOne, targetTwo, targetThree);

console.log(source);



const subZero = Object.freeze(
    {
        name: `Sub Zero`,
        age: 30,
        address: {
            city: `New York`
        }

    }
);
subZero.name = `Scorpion`;

console.log(subZero);



 const sealedObject = Object.seal(
    {
        name: `Scorpion`,
        age: 30,
        address: {
            city: `New York`
        }
    }
 );

    sealedObject.name = `Sub Zero`;
    console.log(sealedObject);


    const firstObject = {
        name: `John`,
        age: 30,
        address: {
            city: `New York`}
    }
    const secondObject = {
        name: `Rex`,
        age: 30,
        address: {
            city: `Jalingon`}
    }
    const thirdObject = {
        name: `Emmanuel`,
        age: 30,
        address: {
            city: `New York`}
    }
    const fourthObject = {
        name: `victor`,
        age: 30,
        address: {
            city: `calabar`}
    }
    const fifthObject = {
        name: `steven`,
        age: 30,
        address: {
            city: `New York`}
    }







    const merge = {...firstObject, ...secondObject, ...thirdObject, ...fourthObject, ...fifthObject};
    console.log(merge);