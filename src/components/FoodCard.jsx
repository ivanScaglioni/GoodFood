import { useContext} from "react";
import { FoodMenuContext } from "../context/FoodMenuContext";

function FoodCard({ products }) {
  const { addOrder, deleteOrder } = useContext(FoodMenuContext);

  let gallery;

  let card;

  function handleBtnCard(event, product) {
    const myCard = document.getElementById(`card-${product.id}`)
   
    if (myCard.className.includes("add")) {
      myCard.className = myCard.className.replace("add", "remove");
      addOrder(product);
    } else {
      myCard.className = myCard.className.replace("remove", "add");
      deleteOrder(product);
    }
    
  }

  function mouseDown(event) {
    if (event.target.className.includes("btn-card")) {
      
      return;
    }
    if(window.innerWidth < 600){
      return
    }
    gallery = document.getElementById(`gallery-${products[0].type}`);
    card = document.getElementsByClassName("card")[0];
    if (window.innerWidth / 2 > event.clientX) {
      gallery.scrollLeft -= card.offsetWidth;
    } else {
      gallery.scrollLeft += card.offsetWidth;
    }
  }

  return (
    <div

      
      className="flex flex-col"
      
      dir="ltr"
    >

      <div className="flex list-card gap-4" draggable="true" id={`gallery-${products[0].type}`} onMouseDown={(e) => mouseDown(e, products[0].type)}>
        {products.map((product) => (
          <div
            id={`card-${product.id}`}
            className="card min-w-max snap-center text-center add"
            key={product.id}
          >
            <button onClick={(e) => handleBtnCard(e, product)} id={`btn-card-${product.id}`} className="card-header btn-card flex w-full add">
              <div className="w-full btn-card">
                <div className="btn-card">{product.name}</div>
                <div className="btn-card text-3xl">
                  ${product.price}
                </div>
                
              </div>

            </button>


            <div className="card-content">
              <div className="h-0">
                <img
                  src={product.imgURL}
                  className="card-img max-w-[350px] w-screen h-[100vh] max-h-[400px] object-cover "
                  alt=""
                />
              </div>

              <div className="description-food max-w-[350px] w-screen h-[100vh] max-h-[400px] opacity-0  z-1">
                {product.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default FoodCard;
