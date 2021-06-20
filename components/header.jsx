import Link from 'next/link'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react';
import classNames from 'classnames'
import styles from './styles/header.module.css'

// Section ids and the corresponding header text for each section of the home page
const SECTIONS = {'about-section': 'About Me',
                  'portfolio-section': 'Portfolio', 
                  'post-section': 'Posts'}

/**
 * Obtains the scroll position of the given element 
 * @param {string} sectionId the id of the section of which to get the scroll position for
 * @returns {Number} an integer specifying the scroll position of the top of the element
 */
function getScrollY(sectionId) {
    const element = document.getElementById(sectionId);

    return element.getBoundingClientRect().top
}

/**
 * Builds the initial state to track the section scroll positions
 * @param {Array} sections array of section ids
 * @returns {Object} of (sectionId, DOM element) pairs
 */
function getScrollPositions(sections) {
    return Object.fromEntries(
        sections.map(sectionId => [sectionId, getScrollY(sectionId)])
    )
}

/**
 * The header displayed on all parts of the site 
 * @param {Object} props React props passed to this component
 * @param {boolean} props.home Whether or not the header is being displayed on the home page
 * @returns {ReactElement}
 */
export default function Header({ home }) {
    const [navOpen, setNavOpen] = useState(false); // Track if the navbar menu is open on small devices
    const [activeSectionId, setActiveSectionId] = useState(null); // Track which section id is active

    // Mount an event listener to track and update the scroll positions 
    // Note: this isn't a very React way to do this. I think we should be using refs
    useEffect(() => {
        const updateActive = () => {
            const scrollPositions = getScrollPositions(Object.keys(SECTIONS));

            let newActiveSection = activeSectionId;

            for (const [sectionId, position] of Object.entries(scrollPositions)) {
                if (position < 100) {
                    newActiveSection = sectionId
                }
            }
    
            setActiveSectionId(newActiveSection); 
        }

        updateActive()
        window.addEventListener('scroll', updateActive);

        // Remove the event listener on unmount
        return () => {
            window.removeEventListener('scroll', updateActive);
        }
    }, [])

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
                    {Object.entries(SECTIONS).map(([sectionId, text]) => (
                        <a href={`/#${sectionId}`}  key={sectionId}>
                            <h2 className={classNames({[styles.active]: activeSectionId === sectionId})}>{text}</h2>
                        </a>
                    ))}
                </nav>
            }
        </header>
    )
}