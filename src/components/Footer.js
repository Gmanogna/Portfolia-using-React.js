import './FooterStyles.css';
import {FaHome,FaPhone,FaMailBulk,FaGithub,FaLinkedin} from 'react-icons/fa';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
             <div className='left'>
                <div className='location'>
                     <FaHome size={20} style={{color:"white",marginRight:'2rem'}} />
                     <div>
                        <p>H.No:42-271/1/E,Wanaparthy</p>
                          <p>  Telangana,509103</p>
                     </div>
                </div>
                <div className='phone'>
                    <p><FaPhone size={20} style={{color:'white',marginRight:'2rem'}}/>
                    7732030639</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={20} style={{color:'white',marginRight:'2rem'}}/>
                    manogna2102@gmail.com</p>
                </div>
             </div>
             <div className='right'>
                <div className='linkedin'>
                   <p><FaLinkedin size={20} style={{color:'white',marginRight:'2rem'}}/> linkedin/manogna2102</p>
                </div>
                <div className='git'>
                   <p><FaGithub size={20} style={{color:'white',marginRight:'2rem'}}/> github/manognaG</p>
                </div>
             </div>
        </div>

    </div>
  )
}

export default Footer