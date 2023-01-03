
function FoodCard({ products }) {


  return (
    <div className="flex">
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default FoodCard;
