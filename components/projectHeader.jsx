import Image from 'next/image'
import styles from './styles/projectheader.module.css'

/**
 * Holds the primary information about a project, including project header
 * Note that this may be broken up into the header and content later on
 */
export default function ProjectHeader({ projectInfo }) {
    return (
        <div className={styles.container}>
                <div className={styles.thumbnail_container}>
                    <Image src={projectInfo.thumbnail} alt={`${projectInfo.name} thumbnail`} width={120} height={120}/>
                </div>

                <div className={styles.title_container}>
                    <h1>{projectInfo.name}</h1>
                    <p className={styles.date_container}>
                        <i className="far fa-calendar" />
                        <span>{projectInfo.startDate} - {projectInfo.endDate}</span>
                    </p>
                </div>
        </div>
    )
}
