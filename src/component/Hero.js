import React from 'react';
import './Hero.css';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Hero = () =>{
    return(
            <div id="about" className="HeroGroup">
                <div className="HeroTitle">
                    <h2>Hello, I’m</h2>
                    <h1>Ankita Tripathi</h1>
                    <p>I am passionate web developer and coding enthusiast. <br/>
                        I specialize in creating user-friendly interface <br/>
                        for web applications.</p><br/>
                       <p> As well as an expertise in creating responsive and  visually appealing websites,seeking a suitable
                        and rewarding career with an esteemed organization ,this would offer good advancement potential ,challenges
                        and opportunities to  zoom my career growth.</p>
                    <div className="HeroButton">
                        <button className="DownloadCV">DOWNLOAD CV</button>
                    </div>
                </div>
                <div className="HeroImage">
                     <img src={require('../Images/we.jpeg')}/> 
                    
                    
                </div>
            </div>
    )
}

export default Hero;