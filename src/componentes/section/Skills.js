import styles from './Skills.module.css'
import javascript from '../../image/skilss/javascript.svg'
import html from '../../image/skilss/html.svg'
import css from '../../image/skilss/css.svg'
import typescript from '../../image/skilss/typescript.svg'
import react from '../../image/skilss/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id="Skills">
            <h1> Skills </h1>
            <p> Get to know some of my main skills and knowledge! </p>
            <div>
               <img src={javascript}/>
               <img src={html}/>
               <img src={css}/>
               <img src={typescript}/>
               <img src={react}/> 
            </div>
        </div>
    )
}

export default Skills