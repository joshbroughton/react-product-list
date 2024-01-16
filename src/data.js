import data from './data.json';

const categoriesAll = data.map((product) => product.category);

const categorySet = new Set(categoriesAll);
const categoriesUnique = Array.from(categorySet);

const categoriesWithCounts = data.reduce((obj, product) => {
  let category = product.category
  if (Object.keys(obj).includes(category)) {
    obj[`${category}`] += 1;
  } else {
    obj[`${category}`] = 1;
  }

  return obj;
}, {})

const namesAndCategories = categoriesUnique.map(name => {
  return {name: name, count: categoriesWithCounts[`${name}`] }
})

export default data;

export { categoriesAll, categoriesUnique, namesAndCategories }
