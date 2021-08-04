import ScrollingTitle from "./ScrollingTitle"
import EducationCard from "./EducationCard"
import RenderedContent from "./RenderedContent"
import CardCollection from "./CardCollection"
import styles from './styles/about-right.module.css'

const TITLES = ['Colin Siles', 'a Software Engineer', 'a Data Scientist']

export default function AboutSectionRight({ educationList, aboutHtml }) {
    return (
        <>
            <h1 className={styles.headline}>
                <span className={styles.headline_prefix}>Hi there! I'm </span>
                <ScrollingTitle titles={TITLES}/>
            </h1>

            <RenderedContent htmlContent={ aboutHtml }/>

            <h2 className={styles.education_header}>Education</h2>

            <CardCollection initialCards={educationList.length} displayDelay={100}>
                {educationList.map(education => (
                    <EducationCard educationInfo={education} key={education.degree + education.major + education.date}/>
                ))}
            </CardCollection>
        </>
    )
}