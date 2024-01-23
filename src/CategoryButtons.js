import CategoryButton from './CategoryButton';
import './CategoryButtons.css'

export default function CategoryButtons({ categoriesWithCount, setFilteredData, selectedCategory, setSelectedCategory }) {
  return(
    <div className='CategoryButtons'>
      {categoriesWithCount.map(obj => {
      return(<CategoryButton
        categoryName={obj.name}
        categoryCount={obj.count}
        setFilteredData={setFilteredData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        ></CategoryButton>);
    })}
    </div>
    );
};
