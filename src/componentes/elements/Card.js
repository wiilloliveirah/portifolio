import styles from '../elements/Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, descrition, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt='error'/>
            </a>
            <section>
                <h3> {title} </h3>
                <p><strong>Technology: </strong>{tech}</p>
                <p>{descrition}</p>
                <ButtonB text='Acess my repository' link={repo}/>
            </section>
        </div>
    )    
}

export default Card