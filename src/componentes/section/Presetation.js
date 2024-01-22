import styles from './Presetation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presetation (){

    const [text, setText] = useState('');
    const toRotate = [ 'My name is Wiill', 'I am devoloper Fron-End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
// eslint-disable-next-line
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
    
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.presetation} id="Presetation">
            <h4><strong> Welcome to my portifolio </strong></h4>
            <h1> Hi! {text}</h1>
            <p> I'm a front-end developer 
                with a keen eye for creating <br/>
                engaging user interfaces,
                bringing products to life </p> 
            
            <ButtonA link='https://github.com/wiilloliveirah' text='Connect with me!'/>
        </div>
        
    )
}

export default Presetation