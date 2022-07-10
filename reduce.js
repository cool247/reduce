const products = [
  { name: 'apples', category: 'fruits' },
  { name: 'oranges1', category: 'fruits' },
  { name: 'oranges2', category: 'fruits' },

  { name: 'oranges2', category: 'dryFRUITS' },
  { name: 'oranges2', category: 'dryFRUITS' },
  { name: 'oranges2', category: 'dryFRUITS' },
  { name: 'oranges2', category: 'dryFRUITS' },


  { name: 'potatoes', category: 'vegetables' },
  { name: 'potatoes1', category: 'vegetables' },
  { name: 'potatoes2', category: 'vegetables' },
  { name: 'potatoes3', category: 'vegetables' },
  { name: 'potatoes4', category: 'vegetables' },
];


const sop = products.reduce((group, el) => {
  const { category } = el;
    group[category]  = group[category] ?? 0;
    group[category] += 1;
  return group;
}, {});
 console.log(sop)
