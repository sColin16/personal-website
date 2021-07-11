import styles from './styles/widebodylayout.module.css'

/**
 * Defines width breakpoints for wide-body pages (e.g. home page)
 * @returns {ReactElement}
 */
export default function WideBodyLayout({ children }) {
    return (
        <main className={styles.container}>
            {children}
        </main>
    )
}