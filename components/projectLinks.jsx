import styles from './styles/projectlinks.module.css'

export default function ProjectLinks({ links }) {
    return (
        <div className={styles.container}>
            <h2>Links</h2>

            {
                links.map(link => (
                    <p><i className={link.icon}></i> {link.title}</p>
                ))
            }

        </div>
    )
}
