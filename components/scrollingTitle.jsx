import { createRef, useState, useRef, useEffect } from 'react';
import classNames from 'classnames'
import styles from './styles/scrollingtitle.module.css'

export default function ScrollingTitle({ titles }) {
    const [activeTitle, setActiveTitle] = useState(0);

    const containerRef = useRef(null);  // Reference to the container, from which children can be accessed

    /**
     * Utility to clear the size constraints of the title container
     * So that when we test the title sizes, they can take up us much space as needed
     */
    function clearContainerSizeConstraint() {
        containerRef.current.style.width = 'auto';
        containerRef.current.style.height = 'auto';
    }

    /**
     * Utility to force a title to be displayed
     */
    function displayTitle(targetTitle) {
        for (const child of containerRef.current.children) {
            if (child === targetTitle) {
                child.style.display = 'block'
            } else {
                child.style.display = 'none'
            }
        }
    }

    /**
     * Utility to remove the styles applied when isolating styles for display
     */
    function clearTitleStyles() {
        for (const child of containerRef.current.children) {
            child.style.display = ''
        }
    }

    /**
     * Helper method to compute the dimensions of the title container, based on the largest element
     * @returns {Array} of length 2, [width, height]
     */
    function computeContainerSize() {
        let maxHeight = 0;
        let maxWidth = 0;

        clearContainerSizeConstraint();

        for (const title of containerRef.current.children) {
            displayTitle(title);

            maxHeight = Math.max(title.offsetHeight, maxHeight)
            maxWidth = Math.max(title.offsetWidth, maxWidth)
        }

        clearTitleStyles();

        return [maxWidth, maxHeight]
    }


    /**
     * Determines and sets the size of the title container to prevent
     * it from shifting as the elements it contains change size
     */
    function updateContainerSize() {
        let [maxWidth, maxHeight] = computeContainerSize();

        // Add a buffer for changes to font sizes since the title was rendered
        maxWidth *= 1.1

        containerRef.current.style.width = maxWidth + 'px'
        containerRef.current.style.height = maxHeight + 'px'
    }

    // Creates an infinte loop starting with setting the active title, and continuing to advance it
    useEffect(() => {
        // Pull the animation duration for the current title
        const computedStyles = getComputedStyle(containerRef.current.children[activeTitle]);
        const animationDuration = parseFloat(computedStyles['animation-duration'].replace('ms', '')) * 1000;

        // Schedule making the title visible when the animation ends
        let a = setTimeout(() => setActiveTitle((activeTitle + 1) % titles.length), animationDuration)

        console.log(a);
    }, [activeTitle])

    // Add an event listner to update the title size when the width changes
    // We do it on window resize for a case like switching from portrait to landscape on a phone
    useEffect(() => {
        window.addEventListener('resize', updateContainerSize)

        updateContainerSize()

        return () => {
            window.removeEventListener('resize', updateContainerSize)
        }
    }, [])

    return (
        <span ref={containerRef} className={styles.container}>
            {titles.map((title, i) => (
                <span className={classNames(styles.title, {[styles.active]: activeTitle === i})} key={i}>{title}</span>
            ))}
        </span>
    )

}