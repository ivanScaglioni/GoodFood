import { useContext} from "react";
import { FoodMenuContext } from "../context/FoodMenuContext";

function Order() {
  const { order, deleteOrder,handleOrder } = useContext(FoodMenuContext);


  return (
    <div
      id="order" 
      draggable="false"
      className="w-96 h-auto fixed z-10  bg-stone-900 mx-auto"
      
    >
      <div id="header-order" onClick={handleOrder}>
        {order.length}
      </div>
      <div className="overflow-auto max-h-80">
        {order.map((ord) => (
          <div  className="item-order" id={ord.id}  key={ord.id}>
            <div className="bg-teal-700">{ord.name}</div>
            <button onClick={() => deleteOrder(ord.id)}> delete </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Order;
