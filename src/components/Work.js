import "./ProjectCardStyles.css"

import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="card-container">
        <h1 className="heading">Projects</h1>
        <div className="projects-card">
           {ProjectCardData.map((val,ind)=>{
            return (
                <ProjectCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
           })}
        </div>
    </div>
  )
}

export default Work