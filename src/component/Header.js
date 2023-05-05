import React from 'react';
import './Header.css';
import './Header.css';


const Header = () => {

   

    return (
        <div className="HeaderGroup">

            <div className="HeaderImage">
                {/* <img src={require('../Images/Logo.png')} /> */}
            </div>
            <div className="HeaderTitle">
               <ul className="list">
                    <li><a href="#about">ABOUT</a> </li>
                    <li><a href="#skill">SKILLS</a></li>
                    <li><a href="#education">EDUCATION</a></li>
                    <li><a href="#project">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>

            
        </div>
        
    )
}



export default Header;