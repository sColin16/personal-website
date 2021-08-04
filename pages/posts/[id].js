import fs from 'fs'
import remark from 'remark'
import html from 'remark-html'
import Head from 'next/head'
import GlobalLayout from '../../components/GlobalLayout'
import PartialHeader from '../../components/PartialHeader'
import NarrowBodyLayout from '../../components/NarrowBodyLayout'
import PostHeader from '../../components/PostHeader'
import LargeTagContainer from '../../components/LargeTagContainer'
import RenderedContent from '../../components/RenderedContent'
import RelatedProjects from '../../components/RelatedProjects'

export default function Post({ postInfo, htmlContent, projects }) {
    return (
        <>
            <Head>
                <title>Colin Siles | {postInfo.title}</title>
            </Head>

            <GlobalLayout>
                <PartialHeader />

                <NarrowBodyLayout>
                    <PostHeader postInfo={postInfo} />
                    <LargeTagContainer tags={postInfo.tags} />

                    <RenderedContent htmlContent={htmlContent} />

                    {projects.length > 0 && (
                        <RelatedProjects projects={projects} />
                    )}
                </NarrowBodyLayout>
            </GlobalLayout>
        </>
    )
}

/* TODO: adjust the data storage to allow this to be more performant */
export async function getStaticProps({ params }) {
    const postId = params.id
    const posts = JSON.parse(fs.readFileSync('data/posts.json', 'utf-8')).posts

    for (const post of posts) {
        if (post.id == postId) {
            const markdownContent = fs.readFileSync(`content/posts/${post.id}.md`)
            const htmlPromise = await remark().
                                        use(html).
                                        process(markdownContent)
            const htmlContent = htmlPromise.toString()

            const postProjectXref = JSON.parse(fs.readFileSync('data/project_post_xref.json')).relations
            const projects = JSON.parse(fs.readFileSync('data/projects.json')).projects

            const filteredXref = postProjectXref.filter(relation => relation.post === post.id)
            const filteredProjectIds = filteredXref.map(relation => relation.project)

            const filteredProjects = projects.filter(project => filteredProjectIds.includes(project.id))

            return {
                props: {
                    postInfo: post,
                    htmlContent: htmlContent,
                    projects: filteredProjects
                }
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = JSON.parse(fs.readFileSync('data/posts.json', 'utf-8')).posts
    const paths = posts.map(post => ({params: {id: post.id}}))

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}