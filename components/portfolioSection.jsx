import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"

export default function PortfolioSection() {
    return (
        <HomeSectionLayout id='portfolio-section'>
            <h1>Portfolio</h1>

            <CardCollection initialCards={3} increment={2} displayDelay={100}>
                <p>Project 1</p>
                <p>Project 2</p>
                <p>Project 3</p>
                <p>Project 4</p>
                <p>Project 5</p>
            </CardCollection>
        </HomeSectionLayout>
    )
}