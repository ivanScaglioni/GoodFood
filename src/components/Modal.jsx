import React from "react";




function Modal() {

    function reorder(){
        const modalElement =document.getElementById('modal-reorder')
        modalElement.style.display = "none"
    }


    return (
        <div id="modal-reorder" className="z-[100]  fixed bg-[#072c42af] w-full h-full justify-center items-center hidden">
            <div className="rounded-xl gap-5 bg-slate-800 w-[100vw] max-w-[400px] h-[100vh] max-h-[400px] flex justify-center items-center flex-col">
                <div className="">
                    <p>Your order was successful</p>
                 
                </div>
                <button  className="bg-slate-100 text-lg text-slate-900 p-4 rounded-md" onClick={reorder}>reorder</button>
            </div>
        </div>
    );
}

export default Modal;
