import Button from './Button';

export default function Buttons({ categoriesWithCount, setFilteredData }) {
  return(
    categoriesWithCount.map(obj => {
    return(<Button
      categoryName={obj.name}
      categoryCount={obj.count}
      setFilteredData={setFilteredData}
      ></Button>);
  }));
};
