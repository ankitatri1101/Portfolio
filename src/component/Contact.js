import React from 'react';
import './Contact.css';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>

const Contact = () =>{
    return(
        
        <div id="contact" className="Contact">
            <h2>Contact Me</h2>
            <div className="ContactGroup">
                <div className="left">
                 
                    <p>If you liked my work and you need me.<br/>
                        let's work together to create something grate.</p>
                    <button className="DownloadCV">DOWNLOAD CV</button>
                    <text>© Ankita Tripathi. All rights reserved. 2023</text>
                        
                </div>
                <div className="links">
                    <div clsaname = "Center">
                        <div className="Content">
                            <img src={require('../Images/mail.png')} />
                            <p><a href="mailto:triankita1101@gmail.com">triankita1101@gmail.com</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/behance.png')} />
                            <p><a href="https://www.behance.net/gihancjayasek">Ankita Tripathi</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/phone.png')} />
                            <p>+917007433695</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="Content">
                            <img src={require('../Images/linkedin.png')} />
                            <p><a href="https://www.linkedin.com/in/ankita-tripathi-7989a7257">Ankita Tripathi</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/github.png')} />
                            <p><a href="https://github.com/ankitatri1101">Ankita Tripathi</a></p>
                        </div>
                        
                </div>
            </div>
            </div>
                   
            </div>
    )   
}

export default Contact