import React,{useState}from 'react'
import { Link } from 'react-router-dom';
import './HeaderStyles.css';
import {FaBars,FaTimes} from 'react-icons/fa';


const Header = () => {


    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);
  return (
    <div className={color ?'header header-bg':'header'}>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? 'nav-list active':'nav-list'}>
            <li>
                <Link to='/'>
                   <h4>Home</h4>
                </Link>
            </li>
            <li>
                <Link to='/About'>
                   <h4>About me</h4>
                </Link>
            </li>
            <li>
                <Link to='/Project'>
                   <h4>Projects</h4>
                </Link>
            </li>
            <li>
                <Link to='/Contact'>
                   <h4>Contact</h4>
                </Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
           {click?(<FaTimes size={20} style={{color:"white"}} />)
           :(<FaBars size={20} style={{color:"white"}} />)
           }
           
           
        </div>
    </div>
  )
}

export default Header