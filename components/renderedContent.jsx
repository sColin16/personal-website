import styles from './styles/rendered-content.module.css'

export default function RenderedMarkdown({ htmlContent }) {
    return (
        <div className={styles.container} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}