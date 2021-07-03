import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/projectcard.module.css'

export default function ProjectCard({ projectInfo }) {
    return (
        <div className={styles.outer_container}>
            <Link href={`/project/${projectInfo.id}`}>
                <div className={styles.inner_container}>
                    <div className={styles.thumbnail_container}>
                        <Image src={projectInfo.thumbnail} alt={`${projectInfo.name} thumbnail`} width={200} height={200}/>
                    </div>
                    <div className={styles.info_container}>
                        <h2>{projectInfo.name}</h2>
                        <p>{projectInfo.description}</p>
                    </div>
                    <div className={styles.tag_container}>
                        {projectInfo.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </Link>

            <div className={styles.links_container}>
                {projectInfo.links.map(link => (
                    <a href={link.href} key={link.href}>
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
        </div>
    )
}
