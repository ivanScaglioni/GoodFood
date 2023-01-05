import { useContext } from "react";
import {FoodMenuContext} from "../context/FoodMenuContext"

function FoodCard({ products }) {

  const {addOrder} = useContext(FoodMenuContext);
  
  
  return (
    <div className="flex overflow-auto gap-80">
      {products.map((product) => (
        <div className="min-w-[500px]" key={product.id}>
          <div>
          {product.name}
          </div>


          <img src={product.imgURL} className="w-52" alt="" />
          <div  className="description-food  w-52 h-52 opacity-0  z-1">
            {product.description}
          </div>
          <button onClick={()=>addOrder(product)}>add</button>
        </div>
        
      ))}
    </div>
  );
}

export default FoodCard;
