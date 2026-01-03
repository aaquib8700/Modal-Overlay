import React, { useState } from 'react'
import Modal from './components/Modal';

const App = () => {
  const[isShow,setShow]=useState(false);
  const [offer, setOffer] = useState(false)

  const handleModal=()=>{
    setShow(true)
  }

  const handleClose=()=>{
    setShow(false)
  }

  const handleAccept=()=>{
    setOffer(true);
    setShow(false)
  }


  return (
    <div>
      <div className='h-[100vh] flex justify-center items-center'>
        {!offer ? (<button onClick={handleModal} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Show Offer</button>): <div className='font-semibold text-4xl'>Offer Accepted!</div>}
      </div>
      {isShow && <Modal handlClose={handleClose} handleAccept={handleAccept}/> }
    </div>
  )
}

export default App