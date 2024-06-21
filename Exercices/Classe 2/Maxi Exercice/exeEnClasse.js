let car = {
    marque: 'Toyota',
    modele: 'Yaris',
    annee: 2024,
    nouveau: true
  };
  
  console.log(car);
  
  console.log(car.marque);
  console.log(car.modele);
  
  Object.values(car).forEach(function(value){
    console.log(value);
  });
  
  /*Object.entries(car).forEach(funtcion([key, value]){
    console.log(`${key}: ${value}`);
  });*/
  
  Object.entries(car).forEach(value => console.log(value));
  
  car.portes = 5;
  console.log(car);
  
  