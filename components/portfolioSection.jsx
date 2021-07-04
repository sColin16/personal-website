import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"
import ProjectCard from "./projectCard"
import styles from './styles/portfoliosection.module.css'

export default function PortfolioSection({ projects }) {
    return (
        <HomeSectionLayout id='portfolio-section'>
            <h1>Portfolio</h1>

            <CardCollection initialCards={4} increment={2} displayDelay={100} wrapperClass={styles.card_constraints} containerClass={styles.container_constraints}>
                {projects.map(project => (
                    <ProjectCard projectInfo={project} key={project.id}/>
                ))}
            </CardCollection>
        </HomeSectionLayout>
    )
}