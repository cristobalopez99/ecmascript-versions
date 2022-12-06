class driver {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    #escuderia() {
        return 'Ferrari';
    }

    presentation() {
        return `${this.name()} ${this.escuderia}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const driver1 = new driver('Carlos', 25);
console.log(driver1.uAge);
console.log(driver1.uAge = 25);