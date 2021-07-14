import CardCollection from './cardCollection'
import PostCard from './postCard'
import styles from './styles/relatedposts.module.css'

export default function RelatedPosts({ posts }) {
    return (
        <>
            <h2 className={styles.header}>Related Posts</h2>
            <CardCollection initialCards={2} increment={2} displayDelay={100}>
                {posts.map(post => (
                    <PostCard postInfo={post} key={post.id}/>
                ))}
            </CardCollection>
        </>
    )
}
