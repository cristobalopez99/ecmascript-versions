const aFunction = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey you!!');
        } else {
            reject('Pfff it did not work!')
        }
    })
}

aFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally it is over'));