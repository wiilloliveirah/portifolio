import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Card from '../elements/Card'
import pjlp from '../../image/projects/pjlp.svg'
import portifolio from '../../image/projects/portifolio.svg'

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1> Projects </h1>
            <Card
                img={pjlp}
                title="My first project"
                tech="HTML, CSS, JS"
                descrition="Development of a Landing Page to launch technology training"
                repo="https://github.com/wiilloliveirah/ProjetoLP"
                site="https://vermillion-paprenjak-e9e73e.netlify.app"
                />
            <Card
                img={portifolio}
                title="My Portifolio"
                tech="React"
                descrition="Development of this page"
                repo="https://github.com/wiilloliveirah/portifolio"
                site="https://portifolio-omega-ten.vercel.app"
            />
            <ButtonB text='Access my repository' link='https://github.com/wiilloliveirah?tab=repositorieshttps://github.com/wiilloliveirah?tab=repositories'/>
        </div>
    )
}

export default Projects