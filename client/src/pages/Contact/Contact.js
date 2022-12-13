import { GoMail } from "react-icons/go"
import { MdOutlineContactPage } from "react-icons/md"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import Resume from "../../img/Resume_Profile.pdf"

import "./Contact.css";

const Contact = () => {

    return (
        <div>
            <main id="contact" className="container text">
                <h2>Contact Info</h2>
                <ul>
                    <li><a className="contact__links" href="mailto:eeoerkeedu@gmail.com" target="_blank" rel="noreferrer" alt="Erik's EDU Email link"><GoMail/> Email</a></li>
                    <li><a className="contact__links" href="https://bit.ly/3P8GKOu" target="_blank" rel="noreferrer" alt="Erik's GitHub link"><FaGithub/> GitHub</a></li>
                    <li><a className="contact__links" href="https://bit.ly/3yqOLZt" target="_blank" rel="noreferrer" alt="Erik's LinkedIn link"><FaLinkedin/> LinkedIn</a></li>
                    <li><a className="contact__links" href="https://bit.ly/3MZLuEn" target="_blank" rel="noreferrer" alt="Erik's Twitter link"><FaTwitter/> Twitter</a></li>
                    <li><a className="contact__links" href={Resume} target="_blank" rel="noreferrer"><MdOutlineContactPage/> Resume</a></li>
                </ul>
                    
            </main>
        </div>
    )
};

export default Contact;