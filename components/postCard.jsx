import Link from 'next/link'
import styles from './styles/postcard.module.css'

export default function PostCard({ postInfo }) {
    return (
        <Link href={`/posts/${postInfo.id}`}>
            <div className={styles.container}>
                <div className={styles.title_wrapper}>
                    <h2>{postInfo.title}</h2>
                </div>
                <p className={styles.date_container}>
                    <i className="far fa-calendar"></i>
                    <span>{postInfo.date}</span>
                </p>
                <p className={styles.description}>
                    {postInfo.description}
                </p>
            </div>
        </Link>
    )
}