import './Product.css'

export default function Product({ product }) {
  return(
    <div className="Product">
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <p>{product.price}</p>
    </div>
  );
};
