import promodata from "../utils/promoBBDD.json";
import { useState, useEffect } from "react";

function Promo() {
  const [promoList, setPromoList] = useState(promodata);
  const [promo, setPromo] = useState(promodata[0]);
  // const [indexPromo, setIndexPromo] = useState(0);
  let indexPromo = 0;
  useEffect(() => {
    setPromoList(promodata);
    setPromo(promodata[0]);
 
    return () => {
      const timerPromo =setInterval(() => {
        handlePromo();
      }, 5000);
      
    };
  }, []);

  function handlePromo() {
    if (indexPromo == promoList.length-1) {

      indexPromo = 0
      setPromo(promoList[0]);
    
    } else {
     
      indexPromo += 1
      setPromo(promoList[indexPromo]);
    }



  }

  return (
    <div className="bg-slate-900 flex">
      {promoList.length > 0 && (
        <div>
          <img src={promo.imgURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default Promo;
