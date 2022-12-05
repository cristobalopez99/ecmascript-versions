const user = { username: 'Rob', age: 18, country: 'Great Britain'};
const { username , ...values} = user;
console.log(username);
console.log(values);

