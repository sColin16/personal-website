import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/project-card.module.css'

export default function ProjectCard({ projectInfo }) {
    return (
        <Link href={`/project/${projectInfo.id}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>{projectInfo.name}</h2>
                    <div className={styles.thumbnail_container}>
                        <Image src={projectInfo.thumbnail} alt={`${projectInfo.name} thumbnail`} width={70} height={70}/>
                    </div>
                </div>
                <p>{projectInfo.description}</p>

                <div className={styles.tag_container}>
                    {projectInfo.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}
