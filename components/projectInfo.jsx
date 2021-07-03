import Image from 'next/image'
import styles from './styles/projectinfo.module.css'

/**
 * Holds the primary information about a project, including project header
 * Note that this may be broken up into the header and content later on
 */
export default function ProjectInfo({ projectInfo }) {
    return (
        <section>
            <div className={styles.header}>
                <Image src={projectInfo.thumbnail} alt={`${projectInfo.name} thumbnail`} width={100} height={100}/>

                <div>
                    <h1>{projectInfo.name}</h1>
                    <p className={styles.date_container}>
                        <i className="far fa-calendar" />
                        <span>{projectInfo.startDate} - {projectInfo.endDate}</span>
                    </p>
                </div>
                {/* TODO: convert this into a component if we keep it on the card */}
                <div className={styles.link_container}>
                    {projectInfo.links.map(link => (
                        <a href={link.href} key={link.href}>
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
            <p>Project information goes here</p>
        </section>
    )
}
