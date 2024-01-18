import data from './data'

export default function Button({ categoryName, categoryCount, setFilteredData }) {
  const filterData = () => {
    const newFilteredData = [...data.filter((obj) => {
      return(obj.category === categoryName);
    })];
    setFilteredData(newFilteredData);
  }
  return(
    <button onClick={filterData}>
      <h3>{categoryName}</h3>
      <p>{categoryCount}</p>
    </button>
  );
};
