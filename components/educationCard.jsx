import Image from 'next/image'
import styles from './styles/education-card.module.css'

export default function educationCard({ educationInfo }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>{educationInfo.degree} {educationInfo.major}</h2>
                <div className={styles.thumbnail_container}>
                    <Image src={educationInfo.thumbnail} alt={`${educationInfo.school} thumbnail`} width={70} height={70}/>
                </div>
            </div>

            <h3>{educationInfo.school}</h3>

            <p className={styles.date_container}>
                <i className="far fa-calendar"></i>
                <span>{educationInfo.date}</span>
            </p>
    </div>
    )
}
