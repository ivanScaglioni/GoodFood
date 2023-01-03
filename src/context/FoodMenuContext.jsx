import { createContext, useState, useEffect } from "react";
import data from "../utils/foodBBDD.json";

export const FoodMenuContext = createContext();

export function FoodMenuContextProvider(props) {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  function addOrder(ord) {
    
    setOrder([
      ...order,
      {
        id: ord.id,
        name: ord.name,
        price: ord.price,
      },
    ]);
  }

  function deleteOrder(id) {
    setOrder(order.filter(ord => ord.id != id))
  }

  useEffect(() => {
    setMenu(data);
  }, []);

  return (
    <FoodMenuContext.Provider value={{ order,menu, addOrder,deleteOrder }}>
      {props.children}
    </FoodMenuContext.Provider>
  );
}
