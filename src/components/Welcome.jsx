
import qr from "../assets/qrcode.png"

function Welcome() {
  return (
    <div className="w-full z-20  gap-5 min-h-[100vh] text-lg flex flex-col flex-wrap items-center justify-center content-center  bg-fuchsia-900">
        <div className="text-5xl p-6 title title-welcome">Good Food</div>
        <div className="w-[87vw] max-w-[400px] text-xl text-center">
            
            <p>
            Menu prototype for a restaurant designed for mobile and the user experience for more information visit their 
            <a  className="text-orange-400  " href="https://github.com/ivanScaglioni/GoodFood"> Github repository</a>
            </p>
           

        </div>
          

        <img src={qr} alt="" />

        <p className="text-center text-sm">
          Idea and creation by  
          <a className="text-orange-400" href="https://github.com/ivanScaglioni"> IVAN SCAGLIONI</a>
          
        </p>
           

    </div>
  )
}

export default Welcome