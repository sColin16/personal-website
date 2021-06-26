import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"
import ProjectCard from "./projectCard"

const projects = [
    {
        id: 'visplay',
        name: 'Visplay',
        thumbnail: '/visplay-icon.svg',
        description: 'A digital signage solution that makes improvement on the existing software controlling digital displays around Mine\'s campus',
        links: [ {'href': 'https://gitlab.com/ColoradoSchoolOfMines/visplay', 'icon': 'fab fa-gitlab'}, {'href': 'https://coloradoschoolofmines.gitlab.io/visplay/', 'icon': 'fas fa-external-link-alt'} ],
        tags: ['Distributed Systems', 'Backend']
    },
    {
        id: 'visplay',
        name: 'Visplay',
        thumbnail: '/visplay-icon.svg',
        description: 'A digital signage solution that makes improvement on the existing software controlling digital displays around Mine\'s campus',
        links: [ {'href': 'https://gitlab.com/ColoradoSchoolOfMines/visplay', 'icon': 'fab fa-gitlab'}, {'href': 'https://coloradoschoolofmines.gitlab.io/visplay/', 'icon': 'fas fa-external-link-alt'} ],
        tags: ['Distributed Systems', 'Backend']
    },
    {
        id: 'visplay',
        name: 'Visplay',
        thumbnail: '/visplay-icon.svg',
        description: 'A digital signage solution that makes improvement on the existing software controlling digital displays around Mine\'s campus',
        links: [ {'href': 'https://gitlab.com/ColoradoSchoolOfMines/visplay', 'icon': 'fab fa-gitlab'}, {'href': 'https://coloradoschoolofmines.gitlab.io/visplay/', 'icon': 'fas fa-external-link-alt'} ],
        tags: ['Distributed Systems', 'Backend']
    },
    {
        id: 'visplay',
        name: 'Visplay',
        thumbnail: '/visplay-icon.svg',
        description: 'A digital signage solution that makes improvement on the existing software controlling digital displays around Mine\'s campus',
        links: [ {'href': 'https://gitlab.com/ColoradoSchoolOfMines/visplay', 'icon': 'fab fa-gitlab'}, {'href': 'https://coloradoschoolofmines.gitlab.io/visplay/', 'icon': 'fas fa-external-link-alt'} ],
        tags: ['Distributed Systems', 'Backend']
    },
    {
        id: 'visplay',
        name: 'Visplay',
        thumbnail: '/visplay-icon.svg',
        description: 'A digital signage solution that makes improvement on the existing software controlling digital displays around Mine\'s campus',
        links: [ {'href': 'https://gitlab.com/ColoradoSchoolOfMines/visplay', 'icon': 'fab fa-gitlab'}, {'href': 'https://coloradoschoolofmines.gitlab.io/visplay/', 'icon': 'fas fa-external-link-alt'} ],
        tags: ['Distributed Systems', 'Backend']
    },
]

export default function PortfolioSection() {
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