import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"
import PostCard from "./postCard"
import styles from "./styles/postsection.module.css"

export default function PostsSection({ posts }) {
    return (
        <HomeSectionLayout id="post-section">
            <h1>Posts</h1>
            <CardCollection initialCards={3} increment={2} displayDelay={100} wrapperClass={styles.card_constraints} containerClass={styles.container_constraints}>
                {posts.map(post => (
                    <PostCard postInfo={post} key={post.id}/>
                ))}
            </CardCollection>
        </HomeSectionLayout>
    )
}