import { useState } from 'react'
import styles from '../elements/Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, descrition, repo, site}){

    const [info, setInfo] = useState(false)
    
    function InfoOn(){
        setInfo(true)
    }
    function InfoOf(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOf} className={styles.card}>
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='error'/>
            </a>
            {info === true &&(
                <section>
                <h3> {title} </h3>
                <p><strong>Technology: </strong>{tech}</p>
                <p>{descrition}</p>
                <ButtonB text='Acess my repository' link={repo}/>
            </section>
            )}
 
        </div>
    )    
}

export default Card