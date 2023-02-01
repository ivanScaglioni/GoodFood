import  burgersvg    from "../assets/icons/burger.svg"
import  icesvg    from "../assets/icons/icecream.svg"
import  beersvg   from "../assets/icons/beer.svg"

function NavBar() {
  return (
    <div className="fixed top-0  p-2  z-20  gap-4 rounded-b flex   self-end justify-center">
        <a href="#food"> 
          <img className="h-[30px]" src={burgersvg} alt="" />
        </a>
        <a href="#drink">
        <img  className="h-[30px]" src={beersvg} alt="" />
        </a>
        <a href="#dessert">
        <img  className="h-[30px]" src={icesvg} alt="" />
        </a>
    </div>
  )
}

export default NavBar