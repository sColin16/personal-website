
import styles from './styles/renderedcontent.module.css'
export default function RenderedMarkdown({ htmlContent }) {
    return (
        <div className={styles.container} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}