import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Apresetationn'>Apresetation</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Skills</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projects</Nav.Link></li>
            </ul>
            <ul>
                <li><a target='blank' href='https://www.instagram.com/wiilloliveirah/'><FaInstagram size={30}/></a> </li>
                <li><a target='blank' href='https://github.com/wiilloliveirah'><FaGithub size={30}/></a></li>
                <li><a target='blank' href='https://www.linkedin.com/in/william-oliveira-92b8b32aa/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar