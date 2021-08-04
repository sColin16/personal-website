import fs from 'fs'
import remark from 'remark'
import html from 'remark-html'
import Head from 'next/head'
import GlobalLayout from '../../components/GlobalLayout'
import PartialHeader from '../../components/PartialHeader'
import NarrowBodyLayout from '../../components/NarrowBodyLayout'
import ProjectHeader from '../../components/ProjectHeader'
import LargeTagContainer from '../../components/LargeTagContainer'
import ProjectLinks from '../../components/ProjectLinks'
import RenderedContent from '../../components/RenderedContent'
import RelatedPosts from '../../components/RelatedPosts'

export default function Project({ projectInfo, htmlContent, posts }) {
    return (
        <>
            <Head>
                <title>Colin Siles | {projectInfo.name}</title>
            </Head>

            <GlobalLayout>
                <PartialHeader />

                <NarrowBodyLayout>
                    <ProjectHeader projectInfo={projectInfo} />
                    <LargeTagContainer tags={projectInfo.tags} />

                    {projectInfo.links.length > 0 && (
                        <ProjectLinks links={projectInfo.links}/>
                    )}

                    <RenderedContent htmlContent={htmlContent} />

                    {posts.length > 0 && (
                        <RelatedPosts posts={posts} />
                    )}
                </NarrowBodyLayout>
            </GlobalLayout>
        </>
    )
}

/* TODO: adjust the data storage to allow this to be more performant */
export async function getStaticProps({ params }) {
    const projectId = params.id
    const projects = JSON.parse(fs.readFileSync('data/projects.json', 'utf-8')).projects

    for (const project of projects) {
        if (project.id == projectId) {
            const markdownContent = fs.readFileSync(`content/projects/${project.id}.md`)
            const htmlPromise = await remark().
                                        use(html).
                                        process(markdownContent)
            const htmlContent = htmlPromise.toString()

            const postProjectXref = JSON.parse(fs.readFileSync('data/project_post_xref.json')).relations
            const posts = JSON.parse(fs.readFileSync('data/posts.json')).posts

            const filteredXref = postProjectXref.filter(relation => relation.project === project.id)
            const filteredPostIds = filteredXref.map(relation => relation.post)

            const filteredPosts = posts.filter(post => filteredPostIds.includes(post.id))

            return {
                props: {
                    projectInfo: project,
                    htmlContent: htmlContent,
                    posts: filteredPosts
                }
            }
        }
    }
}

export async function getStaticPaths() {
    const projects = JSON.parse(fs.readFileSync('data/projects.json', 'utf-8')).projects
    const paths = projects.map(project => ({params: {id: project.id}}))

    return {
        paths,
        fallback: false
    }
}
