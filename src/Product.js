export default function Product({ product }) {
  return(
    <div>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <p>{product.price}</p>
    </div>
  );
};
