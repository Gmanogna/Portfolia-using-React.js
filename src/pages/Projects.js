import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from '../components/Image'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Header/>
      <Image heading="PROJECTS" text="You can see my recent works below ...."/>
      <Work />
      <Footer/>
    </div>
  )
}

export default Projects