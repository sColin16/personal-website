import CardCollection from './cardCollection'
import ProjectCard from './projectCard'
import styles from './styles/relatedprojects.module.css'

export default function RelatedProjects({ projects }) {
    return (
        <>
            <h2 className={styles.header}>Related Projects</h2>
            <CardCollection initialCards={2} increment={2} displayDelay={100}>
                {projects.map(project => (
                    <ProjectCard projectInfo={project} key={project.id}/>
                ))}
            </CardCollection>
        </>
    )
}