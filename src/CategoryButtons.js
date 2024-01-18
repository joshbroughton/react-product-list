import CategoryButton from './CategoryButton';
import './CategoryButtons.css'

export default function CategoryButtons({ categoriesWithCount, setFilteredData }) {
  return(
    <div className='CategoryButtons'>
      {categoriesWithCount.map(obj => {
      return(<CategoryButton
        categoryName={obj.name}
        categoryCount={obj.count}
        setFilteredData={setFilteredData}
        ></CategoryButton>);
    })}
    </div>
    );
};
