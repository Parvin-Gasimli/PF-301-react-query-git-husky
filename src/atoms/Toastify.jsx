import React from 'react'
import { ToastContainer } from 'react-toastify'



const Toastify = ({ position }) => {
    return (
        <ToastContainer
            position={position}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default Toastify