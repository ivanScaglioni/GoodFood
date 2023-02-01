import React from "react";




function Modal() {

    function reorder(){
        const modalElement =document.getElementById('modal-reorder')
        modalElement.style.display = "none"
    }


    return (
        <div id="modal-reorder" className="z-[100]  fixed bg-[#0000009d] w-full h-full justify-center items-center hidden">
            <div className="rounded-md gap-5 bg-slate-800 w-[100vw] max-w-[400px] h-[100vh] max-h-[200px] flex justify-center items-center flex-col">
                <div className="text-lg">
                    <p >Your order was successful</p>
                 
                </div>
                <button  className="bg-slate-100 text-xl  text-slate-900 p-4 rounded-md" onClick={reorder}>reorder</button>
            </div>
        </div>
    );
}

export default Modal;
