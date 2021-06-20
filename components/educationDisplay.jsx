import styles from './styles/educationcontainer.module.css'

export default function EducationDisplay({ props }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <i className="fas fa-graduation-cap"/>
            </div>
            <div className={styles.right}>
                <h3>{props.degree} {props.major} ({props.date})</h3>
                <h4>{props.school}</h4>
            </div>
        </div>
    )
}