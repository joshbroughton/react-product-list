import './App.css';
import { useState } from 'react';
import CategoryButtons from './CategoryButtons';
import Products from './Products'
import data, { categoriesAll, categoriesUnique, categoriesWithCount } from './data';

function App() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className='App'>
      <CategoryButtons
        categoriesWithCount={categoriesWithCount}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      ></CategoryButtons>
      <Products data={filteredData}></Products>
    </div>
  );
}

export default App;
