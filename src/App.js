import './App.css';
import { useState } from 'react';
import Buttons from './Buttons';
import Products from './Products'
import data, { categoriesAll, categoriesUnique, categoriesWithCount } from './data';

function App() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <Buttons
        categoriesWithCount={categoriesWithCount}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      ></Buttons>
      <Products data={filteredData}></Products>
    </>
  );
}

export default App;
