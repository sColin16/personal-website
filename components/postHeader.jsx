import Image from 'next/image'
import styles from './styles/post-header.module.css'

/**
 * Holds the primary information about a project, including project header
 * Note that this may be broken up into the header and content later on
 */
export default function PostHeader({ postInfo }) {
    return (
        <div className={styles.container}>
                <h1>{postInfo.title}</h1>
                <p className={styles.date_container}>
                    <i className="far fa-calendar" />
                    <span>{postInfo.date}</span>
                </p>
        </div>
    )
}