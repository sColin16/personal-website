import HomeSectionLayout from "./HomeSectionLayout"
import CardCollection from "./CardCollection"
import ProjectCard from "./ProjectCard"

export default function PortfolioSection({ projects }) {
    return (
        <HomeSectionLayout id='portfolio-section'>
            <h1>Portfolio</h1>

            <CardCollection initialCards={4} increment={2} displayDelay={100}>
                {projects.map(project => (
                    <ProjectCard projectInfo={project} key={project.id}/>
                ))}
            </CardCollection>
        </HomeSectionLayout>
    )
}