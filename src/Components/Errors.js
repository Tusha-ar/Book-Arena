import React from 'react'
import error from '../404.gif'
import '../Components/css/error.css'

function Errors() {
    return (
        <div className="error">
           <img src={error} alt="Error"></img>
           <h1 className="ErrorMsg">PAGE NOT FOUND!!</h1>
        </div>
    )
}


export default Errors;