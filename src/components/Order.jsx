import { useContext } from "react"
import { FoodMenuContext } from "../context/FoodMenuContext"

function Order() {
  const { order, deleteOrder } = useContext(FoodMenuContext)
  return (
    <>
    {order.map((ord)=>(
      <div key={ord.id}>
        <div className="bg-teal-700">
          {ord.name}
        </div>
        <button onClick={()=>deleteOrder(ord.id)}> delete </button>
      </div>


    ))



    }
    </>

  )
}

export default Order