import { useContext} from "react";
import { FoodMenuContext } from "../context/FoodMenuContext";

function Order() {
  const { order, deleteOrder,handleOrder } = useContext(FoodMenuContext);



  return (
    <div
      id="order" 
      draggable="false"
      className="w-[800px] h-auto fixed z-10  bg-stone-900 mx-auto"
      
    >
      <div id="header-order" className="cursor-pointer" onClick={handleOrder} >
        <p>
          Your order {order.length}
        </p>  
      </div>

      <div className="overflow-auto max-h-80">
        {order.map((ord) => (
          <div  className="item-order" id={`item-${ord.id}`}  key={ord.id}>
            <div className="bg-teal-700">{ord.name}</div>
            <button onClick={() => deleteOrder(ord.id)}> delete </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Order;
