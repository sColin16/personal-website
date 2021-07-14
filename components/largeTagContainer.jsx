import styles from './styles/largetagcontainer.module.css'

export default function LargTagContainer({ tags }) {
    return (
        <div className={styles.container}>
            {tags.map(tag => (
                <span key={tag}>{tag}</span>
            ))}
        </div>
    )
}
