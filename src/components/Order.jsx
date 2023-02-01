import { useContext } from "react";
import { FoodMenuContext } from "../context/FoodMenuContext";
import trash from "../assets/icons/trash3-fill.svg";
import caretUp from "../assets/icons/caret-up-fill.svg";
import caretDown from "../assets/icons/caret-down-fill.svg";
import xicon from "../assets/icons/x.svg";
import cart from "../assets/icons/cart4.svg";


function Order() {
  const { total, allUnits, order, deleteOrder, handleOrder, handleUnits, reset } =
    useContext(FoodMenuContext);

  return (
    <div
      id="order"
      draggable="false"
      className="w-[100vw] max-w-[800px] h-auto fixed z-10 max-h-[34vh] mx-auto flex flex-col"
    >
      <div
        id="header-order"
        className="cursor-pointer flex place-content-between"
        onClick={(e) => handleOrder(e)}
      >
        <div className="flex">
          <div className="">
            {allUnits}
          </div>
          
          <img className="h-[25px] pl-2 " src={cart} alt="" />
          
        </div>
     
        
        <div className="flex gap-3">
          <div className="total">
            Total 
          </div>

          <div>$ {total}</div>
          
          <button  onClick={reset}  id="make-order" className=" ">order</button>
        </div>

       
      </div>

      <div id="container-item" className="overflow-auto ">
        {order.map((ord, index) => (
          <div
            className="item-order flex w-full place-content-between py-4"
            id={`item-${ord.id}`}
            key={ord.id}
          >
            <div className="self-center flex gap-4 text">
              <button className="self-center" onClick={() => deleteOrder(ord)}>
                <img  src={trash} alt="" />
              </button>
              {ord.name}
            </div>
            <div className="flex gap-2">
              <div className="self-center">${ord.price}</div>
              <div className="self-center">
                <img src={xicon} alt="" />
              </div>
              <div className="flex flex-col  text-center">
                <button onClick={() => handleUnits(index, 1)}>
                  <img className="w-[25px]" src={caretUp} alt="" />
                </button>
                <div>{ord.units}</div>
                <button onClick={() => handleUnits(index, -1)}>
                  <img className="w-[25px]" src={caretDown} alt="" />
                </button>
              </div>
            </div>
        
          </div>


        ))}

        <div className="h-[40px]">
       
        </div>
      </div>
    </div>
  );
}

export default Order;
