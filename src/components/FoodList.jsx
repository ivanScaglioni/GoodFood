
import FoodCard from "./FoodCard";

function FoodList({list}) {
    
    

    return (
        <div className="flex overflow-auto flex-col">
            
            {list.map((arr, index)=>(
                
                <div className={arr[0].type} key={index}>
                    <h1 className="text-2xl uppercase self-start title-type z-0 ">{arr[0].type}</h1>
                    <FoodCard products={arr}/>
                </div>
         
                
            ))}
        </div>
        
    )
}

export default FoodList