import { FoodMenuContext } from "../context/FoodMenuContext"
import { useContext } from "react"
import FoodCard from "./FoodCard";

function FoodList({list}) {
    
    const {addOrder} = useContext(FoodMenuContext);


    return (
        <div className="flex gap-4 overflow-auto flex-col">
            {list.map((arr, index)=>(
                <div className={arr[0].type} key={index}>
                    <FoodCard products={arr}/>
                </div>
         
                
            ))}
        </div>
        
    )
}

export default FoodList