import Product from './Product';

export default function Products({data}) {
  return(data.map(product => <Product product={product}></Product>))
};

