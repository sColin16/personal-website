import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"

export default function PostsSection() {
    return (
        <HomeSectionLayout id="post-section">
            <h1>Posts</h1>
            <CardCollection initialCards={3} increment={2} displayDelay={100}>
                <p>Post 1</p>
                <p>Post 2</p>
                <p>Post 3</p>
                <p>Post 4</p>
                <p>Post 5</p>
            </CardCollection>
        </HomeSectionLayout>
    )
}