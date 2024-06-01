import './MidSectionStyles.css';
import { Link } from 'react-router-dom';
import React from 'react'
import IntroImg from "../assets/intro-img1.jpg";


const MidSection = () => {
  return (
    <div className='mid'>
        <div className='img' >
            <img className='intro-img' src={IntroImg} alt="IntroImg"
            /* style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}*/ />
        </div>
        <div className='content'>
            <h1>Hello,I'm Manogna</h1>
            <p>I design and code simple yet beautiful websites</p>
            <div>
                <Link to='/project' className="btn">
                Projects
                </Link>
                <Link to='/contact' className="btn btn-light">
                 Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MidSection