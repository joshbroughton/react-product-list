import './App.css';
import { useState } from 'react';
import CategoryButtons from './CategoryButtons';
import Products from './Products'
import data, { categoriesAll, categoriesUnique, categoriesWithCount } from './data';

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className='App'>
      <CategoryButtons
        categoriesWithCount={categoriesWithCount}
        setFilteredData={setFilteredData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      ></CategoryButtons>
      <Products data={filteredData}></Products>
    </div>
  );
}

export default App;
