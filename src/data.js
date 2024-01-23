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

const categoriesWithCount = categoriesUnique.map(name => {
  return {name: name, count: categoriesWithCounts[`${name}`] }
})

categoriesWithCount.push({name: "All", count: categoriesWithCount.reduce((runningSum, obj) => {
  return(runningSum + obj.count);
}, 0)})

export default data;

export { categoriesAll, categoriesUnique, categoriesWithCount }
