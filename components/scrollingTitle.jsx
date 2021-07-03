import { createRef, useState, useRef, useEffect } from 'react';
import classNames from 'classnames'
import styles from './styles/scrollingtitle.module.css'

export default function ScrollingTitle({ titles }) {
    const [activeTitle, setActiveTitle] = useState(0);

    const containerRef = useRef(null);  // Reference to the container, from which children can be accessed

    function updateContainerSize() {
        let maxHeight = 0;
        let maxWidth = 0;

        containerRef.current.style.width = 'auto'
        containerRef.current.style.height = 'auto'

        // Iterate over every element to determine it's width and height
        for (let idx = 0; idx < titles.length; idx++) {
            // Hide all elements, except the target
            for (let j = 0; j < titles.length; j++) {
                if (j !== idx) {
                    containerRef.current.children[j].style.display = 'none';
                } else {
                    containerRef.current.children[j].style.display = 'block';
                }
            }

            // Determine the resulting height of the element
            let height = Number(getComputedStyle(containerRef.current.children[idx]).height.slice(0, -2));
            let width = Number(getComputedStyle(containerRef.current.children[idx]).width.slice(0, -2));

            maxHeight = Math.max(height, maxHeight);
            maxWidth = Math.max(width, maxWidth);

            // Clear all the display styles
            for (let j = 0; j < titles.length; j++) {
                containerRef.current.children[j].style.display = '';
            }
        }

        // Add a buffer for changes to font sizes since the title was rendered
        maxWidth += 20

        containerRef.current.style.width = maxWidth + 'px'
        containerRef.current.style.height = maxHeight + 'px'
    }

    // Cycle through making each title, with a delay
    useEffect(() => {
        // This pulls the animation duration for each title
        const animationDuration = Number(getComputedStyle(containerRef.current.children[activeTitle])['animation-duration'].slice(0, -1)) * 1000;

        setTimeout(() => setActiveTitle((activeTitle + 1) % titles.length), animationDuration)
    }, [activeTitle])

    // Add an event listner to update the title size when the width changes
    // We do it on window resize for a case like switching from portrait to landscape on a phone
    useEffect(() => {
        window.addEventListener('resize', updateContainerSize)

        updateContainerSize()
    }, [])

    return (
        <span ref={containerRef} className={styles.container}>
            {titles.map((title, i) => (
                <span className={classNames(styles.title, {[styles.active]: activeTitle === i})} key={i}>{title}</span>
            ))}
        </span>
    )
}