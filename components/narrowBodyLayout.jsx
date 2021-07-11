import styles from './styles/narrowbodylayout.module.css'

/**
 * Defines a container for narrow displays that have a single maximum width and no breakpoints
 * @returns {ReactElement}
 */
export default function NarrowBodyLayout({ children }) {
    return (
        <main className={styles.container}>
            {children}        
        </main>
    )
}
