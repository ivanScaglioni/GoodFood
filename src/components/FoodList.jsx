
import FoodCard from "./FoodCard";

function FoodList({list}) {
    
    

    return (
        <div className="flex overflow-auto flex-col">
            {list.map((arr, index)=>(
                <div className={arr[0].type} key={index}>
                    <FoodCard products={arr}/>
                </div>
         
                
            ))}
        </div>
        
    )
}

export default FoodList