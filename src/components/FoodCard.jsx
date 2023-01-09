import { useContext, useState } from "react";
import { FoodMenuContext } from "../context/FoodMenuContext";

function FoodCard({ products }) {
  const { addOrder, deleteOrder } = useContext(FoodMenuContext);
  // const [gallery, setGallery] = useState();
  let gallery;

  let card;

  function handleBtnCard(event, product) {

    if (event.target.className.includes("add")) {
      event.target.className = event.target.className.replace("add", "remove");
      addOrder(product);
    } else {
      event.target.className = event.target.className.replace("remove", "add");
      deleteOrder(product.id);
    }
  }

  function mouseDown(event) {
    if(event.target.id.includes('btn-card')){return};
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
      draggable="true"
      id={`gallery-${products[0].type}`}
      className="flex list-card"
      onMouseDown={(e) => mouseDown(e, products[0].type)}
      dir="ltr"
    >
      {products.map((product) => (
        <div
          className="card min-w-max snap-center text-center  bg-slate-800"
          key={product.id}

        >
          <div>{product.name}</div>
          <button
            id={`btn-card-${product.id}`}
            className="w-full add"
            onClick={(e) => handleBtnCard(e, product)}
          >
            add
          </button>

          <div className="max-w-[400px] w-screen h-[100vh] max-h-[400px]">
            <div className="h-0">
              <img src={product.imgURL} className="card-img" alt="" />
            </div>

            <div className="description-food max-w-[400px] w-screen h-[100vh] max-h-[400px] opacity-0  z-1">
              {product.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCard;
