function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Robert', 'Brandon', 'Jon', 'Daemon']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);