import Product from './Product';
import './Products.css'

export default function Products({data}) {
  return(
    <div className='Products'>
      {data.map(product => <Product product={product}></Product>)}
    </div>)
};

