import { useState } from 'react';
import styles from './styles/contact-button.module.css'
import classNames from 'classnames'

export default function ContactButton({ props }) {
    const [hover, setHover] = useState(false);

    return (
        <a href={props.href} target='_blank' rel='noopener noreferrer'>
            <i
                className={classNames(props.icon, styles.contact_button)}
                style={{backgroundColor: hover ? props.background : null, color: hover ? props.foreground : null}}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            />
        </a>
    )
}