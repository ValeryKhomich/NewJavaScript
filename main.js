function calculateAverage(x, y) {
  return (x + y) / 2
};

function compareAverages() {
  let one = calculateAverage(7, 5);
  let two = calculateAverage(9, 3);
  
  (one > two) ? console.log('Среднее значение первого набора больше')
  : (one < two) ? console.log('Среднее значение второго набора больше')
  : console.log('Средние значения наборов равны');
};

compareAverages();