import React from 'react';
import './Education.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Education = () =>{
    return(
        <div id="education" className="EducationGrup">
            <h2>Education</h2>        
            <div className="EducationContent">
                <div className="line"/> 
                <text className="text1">2017</text>
                <text className="text2">2018</text>
                <text className="text3">2019</text>
                <text className="text4">2020</text>
                <text className="text5">Present</text>
            </div>

            <div data-aos="fade-right"  className="OlSchool">
                <div className="OlLine"/>
                <text className="text1">I studied at Elpis Global School,<br/>
                                        faced High School Examination in 2018.<br/>
                                        Scored 94.5%.</text>
                
            </div>
            <div data-aos="fade-right"  className="Esoft">
                <div className="EsostLine"/>
                <text className="text2">I studied at Elpis Global School,<br/>
                                        faced Senior Secondary School in 2020.<br/>
                                        Scored 95%.</text>

            </div>
            <div data-aos="fade-right"  className="AlSchool">
                <div className="AlSchoolLine"/>
                <text className="text3">Currently pursuing B.Tech at <br/>
                                        R.R Institute of Modern Technology,<br/>
                                        affiliated to AKTU University.<br/>
                                        Scored 92%.<br/><br/></text>

            </div>
            
        </div>
    )
}

export default Education