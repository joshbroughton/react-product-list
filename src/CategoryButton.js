import data from './data'
import './CategoryButton.css'

export default function CategoryButton({ categoryName, categoryCount, setFilteredData }) {
  const filterData = () => {
    if (categoryName === "All") {
      setFilteredData(data)
    } else {
      const newFilteredData = [...data.filter((obj) => {
        return(obj.category === categoryName);
      })];
      setFilteredData(newFilteredData);
    }
  }
  return(
    <button className="CategoryButton" onClick={filterData}>
      <h3>{categoryName}</h3>
      <p>{categoryCount}</p>
    </button>
  );
};
