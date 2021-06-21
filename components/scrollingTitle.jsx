import { useState } from 'react';
import classNames from 'classnames'
import styles from './styles/scrollingtitle.module.css'

export default function ScrollingTitle({ titles }) {
    const [activeTitle, setActiveTitle] = useState(titles[0]);

    return (
        <span className={styles.container}>
            {titles.map(title => (
                <span className={classNames(styles.title, {[styles.active]: activeTitle === title})} key={title}>{title}</span>
            ))}
        </span>
    )
}