import { useContext } from "react";
import { FoodMenuContext } from "../context/FoodMenuContext";
import FoodList from "./FoodList";

function Menu() {
  const { menu } = useContext(FoodMenuContext);
  const byType = (list) => {
    let arrType = [];
    let arrFood = [];
    for (let index = 0; index < list.length; index++) {
      if (!arrType.includes(list[index].type)) {
        arrType.push(list[index].type);
        let newType = new Array();
        newType.push(list[index]);
        arrFood.push(newType);
      } else {
        arrFood[arrType.indexOf(list[index].type)].push(list[index]);
      }
    }
    return arrFood;
  };

  const byCategory = (list)=>{
    let arrCate = new Array();
    let arrFood = new Array();
    for (let index = 0; index < list.length; index++) {
      if(!arrCate.includes(list[index][0].category)){
        arrCate.push(list[index][0].category)
        let newCate= new Array();
        newCate.push(list[index])
        arrFood.push(newCate)
      }else{
        arrFood[arrCate.indexOf(list[index][0].category)].push(list[index])
      }
      
    }

    return(arrFood)
  }
  const arrByType = byType(menu);
  const arrByCate = byCategory(arrByType);


  return (
    <div className="flex flex-col " id="all-food-container">
      
      {arrByCate.map((arr,index) => (
          <div id={`${arr[index][0].category}`} className="flex flex-col" key={index}>
            <h1  className="text-3xl uppercase self-start title-category title">{arr[index][0].category}</h1>
            <FoodList list={arr} />
          </div>

      ))}
    </div>
  );
}

export default Menu;
