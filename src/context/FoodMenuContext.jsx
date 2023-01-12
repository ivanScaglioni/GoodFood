import { createContext, useState, useEffect } from "react";
import data from "../utils/foodBBDD.json";

export const FoodMenuContext = createContext();

export function FoodMenuContextProvider(props) {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [containerItem, setContainerItem] = useState()
  const [allUnits, setAllUnits] = useState(0);
  let openOrder = false;

  useEffect(() => {
    setMenu(data);
    setContainerItem(document.getElementById("container-item"))
  }, []);



  function handleOrder(event) {
  
    if(event.target.id == 'make-order'){
      return
    }
    if(openOrder){
      containerItem.style.maxHeight = '0px'
      openOrder = false;
    }else if(order.length > 0 ){
      containerItem.style.maxHeight = '30vh'
      openOrder=true;
    }
    
  }

  function addOrder(product) {
    setOrder([
      ...order,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        units: 1,
      },
    ]);
    setAllUnits(allUnits + 1);
    setTotal(total + product.price);
  }

  function deleteOrder(product) {

    const card = document.getElementById(`card-${product.id}`);
    card.className = card.className.replace("remove", "add");
    const orderProduct = order.find((o) => o.id == product.id);
    setOrder(order.filter((ord) => ord.id != product.id));
    if(allUnits - orderProduct.units == 0){
      containerItem.style.maxHeight = '0px'
      openOrder = false;
    }
    setAllUnits(allUnits - orderProduct.units);
    setTotal(total - (orderProduct.price * orderProduct.units) )
    // handleOrder('resize');
  
    return
  }

  function handleUnits(i, n) {
    if (order[i].units + n < 1) {
      return;
    }
    order[i].units += n;
    setOrder([...order]);
    setTotal( total +(order[i].price * n))
    setAllUnits(allUnits + n);
  }

  function reset(){
    if(order.length == 0){
      return;
    }
    for (let index = 0; index < order.length; index++) {
      const element = document.getElementById(`card-${order[index].id}`)
      element.className = element.className.replace("remove", "add");
    }
    setOrder([])
    setTotal(0)
    setAllUnits(0)
    containerItem.style.maxHeight = '0px'
    openOrder = false;
    const modalElement = document.getElementById('modal-reorder')
    modalElement.style.display="flex"
  }


  return (
    <FoodMenuContext.Provider
      value={{
        total,
        order,
        menu,
        allUnits,
        addOrder,
        deleteOrder,
        handleOrder,
        handleUnits,
        reset
      }}
    >
      {props.children}
    </FoodMenuContext.Provider>
  );
}
