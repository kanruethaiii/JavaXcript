let furniture = ['Table', 'Chairs', 'Couch'];

furniture.forEach(item => {
  console.log(`Letters in "${item}":`);
  for (let letter of item) {
    console.log(letter);
  }
});
