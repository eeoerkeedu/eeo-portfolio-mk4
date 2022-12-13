import "./About.css";

import {GiShieldBash} from "react-icons/gi"
import {WiSunrise} from "react-icons/wi"
import {GoChecklist} from "react-icons/go"
import {HiOutlineLightBulb} from "react-icons/hi"

const About = () => {
    return (
        <div>
            <main id="about" className="container text">
                <h2>About Me</h2>
                <p> 
                    Hello! If you are looking for an ambitious, attentive, and  motivated Junior Web Developer look no further. My name is Erik and I'd love to help you with your next project.
                    <br/>
                    <br/>
                    Seeking Careers, as well as Contract & Freelance work.
                </p>
                <ul>
                    <li className="about__List"><WiSunrise/> Desire to do better than the previous day.</li> 
                    <li className="about__List"><HiOutlineLightBulb/> Always working smarter not harder</li>
                    <li className="about__List"><GiShieldBash/> Strong values of honesty and integrity.</li>
                    <li className="about__List"><GoChecklist/> Determination to see things through and always be there for the team.</li>
                </ul>
            </main>
        </div>
    )
};

export default About;