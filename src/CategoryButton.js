import data from './data'
import './CategoryButton.css'

export default function CategoryButton({
  categoryName,
  categoryCount,
  setFilteredData,
  selectedCategory,
  setSelectedCategory
  }) {
  const filterData = () => {
    if (categoryName === "All") {
      setFilteredData(data)
      setSelectedCategory("All")
    } else {
      const newFilteredData = [...data.filter((obj) => {
        return(obj.category === categoryName);
      })];
      setFilteredData(newFilteredData);
      setSelectedCategory(categoryName);
    }
  }
  return(
    <button
      className={categoryName === selectedCategory ? "SelectedCategoryButton" : "CategoryButton"}
      onClick={filterData}
      >
      <h3>{categoryName}</h3>
      <p>{categoryCount}</p>
    </button>
  );
};
