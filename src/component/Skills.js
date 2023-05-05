import React, { useEffect } from 'react';
import './Skills.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Skills = () =>{

    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    return(
        
        <div  id="skill" className="Skills">
            <div className="SkillsTitle">
                <h2  data-aos="fade-down" >Skills</h2>
            </div>
            
            <div  className="SkillsContent">

                <div data-aos="fade-right" className="Rectangle">
                    <h3>Programming Languages</h3>
                    <div className="RectangleGroup">
                        <div className="SkillList">      
                        <img src={require('../Images/C++.jpeg')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>C++
                            </h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/Python.jpeg')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Python</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                             <img src={require('../Images/java.jpeg')}/> 
                        </div>
                        <div className="SkillListTitle">
                            <h4>Core Java</h4>
                            <p>Beginner</p>  
                        </div>           
                    </div>


                   <div className="RectangleGroup">
                        <div className="SkillList">      
                             <img src={require('../Images/C.jpeg')}/> 
                        </div>
                        <div className="SkillListTitle">
                            <h4>C</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>
                </div>

                
                <div data-aos="fade-up" className="Rectangle">
                    <h3>Front-end</h3>

                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/html.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>HTML</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/javascript.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>JavaScript</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/css3-.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>CSS</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/react.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>React</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>
                </div>


                <div data-aos="fade-left" className="Rectangle">
                    <h3>Back-end</h3>

                    <div className="RectangleGroup">
                        <div className="SkillList">      
                             <img src={require('../Images/node.jpeg')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Node.js</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                             <img src={require('../Images/mongo.jpeg')}/> 
                        </div>
                        <div className="SkillListTitle">
                            <h4>MongoDB</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                             <img src={require('../Images/MYSQL.jpeg')}/> 
                        </div>
                        <div className="SkillListTitle">
                            <h4>MySQL</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                          
                        </div>
                        <div className="SkillListTitle">
                            <h4></h4>
                            <p></p>  
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills