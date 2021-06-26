import EducationDisplay from "./educationDisplay"
import styles from './styles/educationcontainer.module.css'

const EDUCATION = [
    {'degree': 'B.S.', 'major': 'Computer Science', 'date': 'May 2022', 'school': 'Colorado School of Mines'}
]
export default function EducationContainer() {
    return (
        <div className={styles.container}>
            <h2>Education</h2>
            {EDUCATION.map(props => (
                <EducationDisplay props={props} key={props.degree + props.major + props.date} />
            ))}
        </div>
    )
}