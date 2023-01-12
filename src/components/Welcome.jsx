
import qr from "../assets/qrcode.png"

function Welcome() {
  return (
    <div className="w-full z-20  gap-5 h-[100vh] text-lg flex flex-col flex-wrap items-center justify-center content-center  bg-pink-900">
        <div className="text-5xl">Good Food</div>
        <div className="w-[87vw] max-w-[400px] text-center">
            
            <p>
            menu prototype for a restaurant designed for mobile and the user experience for more information visit their
            </p>
            <a  className="text-orange-400" href="https://github.com/ivanScaglioni/GoodFood">Github repository</a>

        </div>

        <img src={qr} alt="" />
        <p className="text-center">
          idea and creation by  
          <a className="text-orange-400" href="https://github.com/ivanScaglioni"> IVAN SCAGLIONI</a>
          
        </p>
           
        <div>
          BUON APPETITO
        </div>
    </div>
  )
}

export default Welcome