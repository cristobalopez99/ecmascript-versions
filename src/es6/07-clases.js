


class driver {
    //metodos

    wChamps() {
        return 'Two times world champion';
    }
};

const Max = new driver();
console.log(Max.wChamps());

//constructor 

class Driver {
    constructor() {
        console.log('New driver');
    }
    wChamps() {
        return 'Seven times world champion'
    }
    
}

const Lewis = new Driver();

//this 

class driver {
    constructor(name) {
        this.name = name;
    }

    //metodos
    poles() {
        return '103 poles';
    }
    wChamps() {
        return `${this.poles()} ${this.name}`;
    }
}
const Carlos = new driver('Carlos');
console.log(Carlos.wChamps());


// getters setters

class driver {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    escuderia() {
        return 'Ferrari';
    }

    presentation() {
        return `${this.name()} ${this.escuderia}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const driver1 = new driver('Carlos', 25);
console.log(driver1.uAge);
console.log(driver1.uAge = 25);