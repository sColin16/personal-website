import styles from './styles/large-tag-container.module.css'

export default function LargeTagContainer({ tags }) {
    return (
        <div className={styles.container}>
            {tags.map(tag => (
                <span key={tag}>{tag}</span>
            ))}
        </div>
    )
}
