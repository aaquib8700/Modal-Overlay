import React from 'react'

const Modal = ({handlClose,handleAccept}) => {

    const handleOutsideClick=(e)=>{
        console.log(e.target.className);
        if(e.target === e.currentTarget){
            handlClose();
        }
    }

  return (
    <div className='modal fixed z-1 w-[100%] h-[100%] top-0 left-0 grid bg-zinc-400 place-items-center' onClick={handleOutsideClick}>
    <div className='bg-blue-900 flex flex-col relative gap-3 p-[16px]'>
        <button onClick={handlClose} className='px-2.5 py-0.5 bg-red-600 text-white font-semibold absolute'>X</button>
        <div className='mt-10 w-[300px] h-[200px] text-white'>
            Click the button below to accept our amazing offer
        </div>
        <button  onClick={handleAccept} className='bg-blue-500 text-white w-fit h-fit px-4 py-1.5 rounded-md '>Accept Offer</button>
    </div>
    </div>
  )
}

export default Modal