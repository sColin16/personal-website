import Link from 'next/link'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import classNames from 'classnames'
import styles from './styles/header.module.css'

/**
 * The header displayed on all parts of the site 
 * @param {Object} props React props passed to this component
 * @param {boolean} props.home Whether or not the header is being displayed on the home page
 * @returns {ReactElement}
 */
export default function Header({ home }) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.primary_nav_partition}>
                <Link href='/'>
                    <a><h1>Colin Siles</h1></a> 
                </Link>

                <div className={styles.hamburger_container}>
                    <Hamburger distance='sm' rounded size={40} toggled={navOpen} toggle={setNavOpen}/>
                </div>
            </div>

            { home &&
                <nav className={classNames(styles.nav, {[styles.open]: navOpen })}>
                    <a href='/#about-section'><h2>About Me</h2></a>
                    <a href='/#portfolio-section'><h2>Portfolio</h2></a>
                    <a href='/#post-section'><h2>Posts</h2></a>
                </nav>
            }
        </header>
    )
}