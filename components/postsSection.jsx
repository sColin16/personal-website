import HomeSectionLayout from "./homeSectionLayout"
import CardCollection from "./cardCollection"
import PostCard from "./postCard"

const posts = [
    {
        'id': 'making-gearbox',
        'title': 'The Making of Gearbox',
        'date': '5/26/2021',
        'description': 'The extensive iterative design process behding the development of Gearbox'
    },
    {
        'id': 'march-madness-miscalculations',
        'title': 'March Madness Miscalculations',
        'date': '4/29/2021',
        'description': 'Lessons learned from participating in Kaggle\'s 2021 March Madness competition'
    },
    {
        'id': 'making-gearbox',
        'title': 'The Making of Gearbox',
        'date': '5/26/2021',
        'description': 'The extensive iterative design process behding the development of Gearbox'
    },
    {
        'id': 'march-madness-miscalculations',
        'title': 'March Madness Miscalculations',
        'date': '4/29/2021',
        'description': 'Lessons learned from participating in Kaggle\'s 2021 March Madness competition'
    },
    {
        'id': 'making-gearbox',
        'title': 'The Making of Gearbox',
        'date': '5/26/2021',
        'description': 'The extensive iterative design process behding the development of Gearbox'
    },
    {
        'id': 'march-madness-miscalculations',
        'title': 'March Madness Miscalculations',
        'date': '4/29/2021',
        'description': 'Lessons learned from participating in Kaggle\'s 2021 March Madness competition'
    },
]

export default function PostsSection() {
    return (
        <HomeSectionLayout id="post-section">
            <h1>Posts</h1>
            <CardCollection initialCards={3} increment={2} displayDelay={100}>
                {posts.map(post => (
                    <PostCard postInfo={post} key={post.id}/>
                ))}
            </CardCollection>
        </HomeSectionLayout>
    )
}