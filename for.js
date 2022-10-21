const cars = ['saab', 'volvo', 'bwm'];

for (let i = 0; i < cars.length; i++) {
  const element = cars[i];

  console.info(element);
  if (element === 'volvo') {
    console.info('found it');
    break;
  }
}
