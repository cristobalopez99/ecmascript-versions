function newDriver(name, age, country) {
    var name = name || 'Nick';
    var age = age || 28;
    var country = country || 'Netherlands';
    console.log(name, age, country);

}

newDriver();
newDriver('Oscar', 24, 'France');

function newBoss(name = 'Matia', age = 45, country = 'Italia') {
    console.log(name, age, country);
}

newBoss();
newBoss('Christian', 49, 'Austria');