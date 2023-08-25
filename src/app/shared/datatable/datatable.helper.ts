export const getInstockClass = (instock: boolean) => {
  switch (instock) {
    case true:
      return 'fa-solid fa-check text-success';
    case false:
      return 'fa-solid fa-times text-danger';
    default:
      return 'fa-solid fa-question text-warning';
  }
};

export const getHorsepowerClass = (horsepower: number) => {
  switch (true) {
    case horsepower < 100:
      return '#8B0001';
    case horsepower < 200:
      return '#FFCE03';
    case horsepower < 300:
      return '#FD9A01';
    case horsepower <= 450:
      return '#FD6104';
    case horsepower <= 550:
      return '#FF2C05';
    default:
      return '#FEF001';
  }
};

export const getColors = () => {
  return [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'brown',
    'black',
    'white',
    'silver',
    'gold',
    'bronze',
    'grey',
    'pink',
    'copper',
  ];
};
