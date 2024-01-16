import './App.css';
import Buttons from './Buttons';
import Products from './Products'
import data, { categoriesAll, categoriesUnique, namesAndCategories } from './data';

function App() {
  return (
    <>
      <Buttons categoriesUnique={categoriesUnique}></Buttons>
      <Products data={data}></Products>
    </>
  );
}

export default App;
