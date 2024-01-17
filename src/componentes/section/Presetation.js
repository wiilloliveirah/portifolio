import styles from './Presetation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presetation(){
    return(
        <div className={styles.presetation} id="Presetation">
            <h4><strong> Welcome to my portifolio </strong></h4>
            <h1> Hi! My name is Wiill</h1>
            <p> I'm a front-end developer 
                with a keen eye for creating <br/>
                engaging user interfaces,
                bringing products to life </p> 
            
            <ButtonA link='https://github.com/wiilloliveirah' text='Connect with me!'/>
        </div>
        
    )
}

export default Presetation