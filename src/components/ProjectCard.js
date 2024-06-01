import { NavLink } from "react-router-dom"
import "./ProjectCardStyles.css"


import React from 'react'

const ProjectCard = (props) => {
  return (
   
            <div className="pro-card">
               <img src={props.imgsrc} alt="img"/>
               <h2 className="pro-name">{props.title}</h2>
               <div className="pro-details">
               <p>{props.text}</p>
               <div className="pro-btn">
                    <NavLink to={props.view} className="btn" target= "_blank" >View</NavLink>
               </div>
               </div>
            </div>
  )
}

export default ProjectCard