const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  // for(let item of animalHierarchy) {
  //   if(item.parent === parent) {

  //   }
  // }
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
//console.log(traverse(animalHierarchy, null));
// console.log(traverse(animalHierarchy, 'Dogs'));
// console.log(traverse(animalHierarchy, 'Husky'));

const tree = traverse(animalHierarchy, null);
console.log(tree);
console.log(tree.Animals.Mammals.Dogs);
