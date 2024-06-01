import React from 'react'
import "./ImageStyles.css"

function Image(props){
    return (

        <div className="mid-img">
             <div className="content"> 
               <h1>{props.heading}</h1>
               <p>{props.text}</p>

             </div>
        </div>
    )
}
export default Image;