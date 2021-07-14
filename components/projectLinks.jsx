import styles from './styles/projectlinks.module.css'

export default function ProjectLinks({ links }) {
    return (
        <div className={styles.container}>
            <h2>Links</h2>

            <ul>
                {links.map(link => (
                    <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer">
                        <div><i className={link.icon}></i> {link.title}</div>
                    </a></li>))
                }
            </ul>

        </div>
    )
}
