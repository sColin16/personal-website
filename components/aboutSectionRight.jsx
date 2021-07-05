import ScrollingTitle from "./scrollingTitle"
import EducationCard from "./educationCard"
import CardCollection from "./cardCollection"
import styles from './styles/aboutright.module.css'

const TITLES = ['Colin Siles', 'a Software Engineer', 'a Data Scientist']

export default function AboutSectionRight({ educationList }) {
    return (
        <>
            <h1 className={styles.headline}>
                <span className={styles.headline_prefix}>Hi there! I'm </span>
                <ScrollingTitle titles={TITLES}/>
            </h1>

            <p>I'm a student at Colorado School of Mines pursuing a B.S. in
            Computer Science, with a focus in Data Science. My interests include
            full-stack web development, machine learning, and distributed
            systems. I plan to pursue a Master's in Computer Science upon
            completion of my Bachelor's.</p>

            <p>I fell in love with coding when I was about ten, programming a
            Lego robot to do whatever I could imagine. Since then, I've
            continued expanding my repetoire of skills, through personal
            projects, formal education, and industry experience. I'm excited to
            continue learning new skills!</p>

            <p>Outside of software development, I'm also passionate about being
            a mentor, having been a TA for Computer Science classes for many
            semesters. In my free time, I enjoy coding, running, solving
            puzzles (e.g. Sudoku, Rubik's Cubes), cooking, and reading.</p>

            <h2 className={styles.education_header}>Education</h2>

            <CardCollection initialCards={educationList.length} displayDelay={100}>
                {educationList.map(education => (
                    <EducationCard educationInfo={education} key={education.degree + education.major + education.date}/>
                ))}
            </CardCollection>
        </>
    )
}