
//declarar y asignar variable y reasignar
var lastName = 'Emilian';
lastName = 'Verstappen';
console.log(lastName);

let monoplaza = 'RB16B';
monoplaza = 'RB18';
console.log(monoplaza);

const drivers = () => {
    if(true) {
        var driver1 = 'Sergio';  //function scope
        let driver2 = 'Max';  // block scope
        const driver3 = 'Charles';  //block scope
    }

    console.log(driver1);
    console.log(driver2);
    console.log(driver3);
}

drivers();
