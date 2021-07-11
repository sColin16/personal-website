import Link from 'next/link'
import styles from './styles/header.module.css'

/**
 * Defines the partial header for non-homepages
 * @returns {ReactElement}
 */
export default function PartialHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.primary_nav_partition}>
                <Link href='/'>
                    <a><h1>Colin Siles</h1></a> 
                </Link>
            </div>
        </header>
    )
}