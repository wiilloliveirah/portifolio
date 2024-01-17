import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a target='blank' href='https://www.instagram.com/wiilloliveirah/'><FaInstagram size={30}/></a> </li>
                <li><a target='blank' href='https://github.com/wiilloliveirah'><FaGithub size={30}/></a></li>
                <li><a target='blank' href='https://www.linkedin.com/in/william-oliveira-92b8b32aa/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>dev.williamoliveira@gmail.com</p>
            <p> William F. Oliveira © 2024 </p>
        </div>
    )
}

export default Footer