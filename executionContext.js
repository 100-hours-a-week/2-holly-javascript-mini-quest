const message = 'Hello, JavaScript!';

const showMessage = () => {
  //console.log(message); // undefined
  let message = 'Hello, ES6!';
  console.log(message); // Hello, ES6!
};

showMessage();

////////////////////////////

const color = 'blue';

const firstLevel = () => {
  let color = 'red';
  
  const secondLevel = () => {
    let color = 'green';
    console.log(color); // (1) green
  };
  
  secondLevel();
  console.log(color); // (2) red
};

firstLevel();
console.log(color); // (3) blue
