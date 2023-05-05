
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>



const Projects = () =>{

    

    return(
        <div id="project" className="Projects">
            <div className="ProjectTitle">
                <h2 data-aos="fade-down" >Projects</h2>
            </div>
            
            <div className="ProjectContent">

                <div data-aos="fade-left"  className="Rectangle">
                    <h3>Video Streaming Platform</h3>
                    <div className="RectangleGroup">
                       
                        <div className="ProjectListTitle">
                            <div className="Change2"><img src={require('../Images/video.jpeg')}/> </div>
                            <p className="Heading"> In this Project primary features are uploading videos by users
                            sharing of videos and viewing of videos<br/> Technology used: React </p>  
                        </div>            
                    </div>


                    <div className="RectangleGroup">
                       
                    </div>


                    <div className="RectangleGroup">
                       
                    </div>


                    <div className="RectangleGroup">
                        
                    </div>
                </div>

                
                <div data-aos="fade-up"  className="Rectangle">
                    <h3>Portfolio</h3>

                    <div className="RectangleGroup">
                        
                        <div className="ProjectListTitle">
                        <div className="Change1"><img src={require('../Images/Portfolio.jpeg')}/> </div>
                            
                            <p className="Heading1">A simple portfolio project<br/>Technology used: React</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                       
                    </div>


                    <div className="RectangleGroup">
                        
                    </div>



                </div>


                <div data-aos="fade-right" className="Rectangle">
                    <h3>Sorting Visualizer</h3>

                    <div className="RectangleGroup">
                        
                        <div className="ProjectListTitle">
                        <div className="Change"><img src={require('../Images/sorting2.jpeg')}/> </div>
                            <p className="Heading4" >A web based project which performs sorting in a graphical format with specifications change 
                                in speed and time complexity<br/> Technologies used : HTML,CSS,Javascript</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                       
                    </div>


                    <div className="RectangleGroup">
                        
                    </div>


                    <div className="RectangleGroup">
                       
                    </div>
                </div>
            </div>
        </div>
    )
                    }

export default Projects