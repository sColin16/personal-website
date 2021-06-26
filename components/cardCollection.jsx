import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles/cardcollection.module.css'

/**
 * A layout component to display a series of cards, supporting a "show more" button
 * Used for the portfolio and projects display
 * @param {Object} props props passed from the parent react component
 * @param {Number} props.intialCards an integer, the number of cards to display on load
 * @param {Number} props.increment an integer, the number of additional to cards to display when clicking "load more"
 * @param {Number} props.displayDelay time in milliseconds between new cards appearing
 * @param {ReactNode} props.children the cards to display within the container
 */
export default function CardCollection({ initialCards, increment, displayDelay, children }) {
    // Shows more cards based on the incremenet set
    function showMoreCards() {
        showNextCard(increment);
    }

    // Shows an individual card, and schedules displaying the next card
    function showNextCard(remaining) {
        console.log('calling', remaining)
        // Base case: no more cards are set to be shown, or all cards in the collection have been shown
        if (remaining <= 0 || numShownCards >= children.length) {
            return
        }

        setNumShownCards(prevCards => prevCards + 1)

        setTimeout(() => showNextCard(remaining - 1), displayDelay)
    }

    const [numShownCards, setNumShownCards] = useState(initialCards);

    if (initialCards > children.length) {
        console.warn('Card Display component has fewer intial child components than it has been configured to display')
    }

    return (
        <>
            <div>
                {children.map((child, i) => (
                    <div className={classNames(styles.cardWrapper, {[styles.hidden]: i >= numShownCards})} key={i}>
                        {child}
                    </div>
                ))}
            </div>
            <div className={styles.show_more_button_container}>
                <button onClick={() => showMoreCards()}
                        className={classNames(styles.show_more_button,
                                   {[styles.hidden_button]: numShownCards >= children.length})}>
                    Show More
                </button>
            </div>
        </>
    )
}