// use here
var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Robert',
  // do not use here
  sayHi: () => {
    console.log(arguments)
    console.log(`Hi. I'm ${user.name}`)
  },
  // use here
  sayHiAlt() {
    console.log(arguments)
    console.log(`Hi. I'm ${user.name}`)
  }
};

user.sayHiAlt(1,2,3);
