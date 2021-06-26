import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"
import ProjectCard from "./projectCard"

export default function PortfolioSection({ projects }) {
    return (
        <HomeSectionLayout id='portfolio-section'>
            <h1>Portfolio</h1>

            <CardCollection initialCards={3} increment={2} displayDelay={100}>
                {projects.map(project => (
                    <ProjectCard projectInfo={project} key={project.id}/>
                ))}
            </CardCollection>
        </HomeSectionLayout>
    )
}