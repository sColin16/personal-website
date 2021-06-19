import styles from './styles/homesectionlayout.module.css'

export default function HomeSectionLayout({ children }) {
    // Make sure we only have a left and right child
    console.assert(children.length === 2)

    return (
        <section className={styles.section}>
            <div className={styles.left_section_partition}>{children[0]}</div>
            <div className={styles.right_section_partition}>{children[1]}</div>
        </section>
    )
}