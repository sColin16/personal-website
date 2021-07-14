import fs from 'fs'
import remark from 'remark'
import html from 'remark-html'
import Head from 'next/head'
import GlobalLayout from '../../components/globalLayout'
import PartialHeader from '../../components/partialHeader'
import NarrowBodyLayout from '../../components/narrowBodyLayout'
import ProjectHeader from '../../components/projectHeader'
import LargeTagContainer from '../../components/largeTagContainer'
import ProjectLinks from '../../components/projectLinks'
import RenderedContent from '../../components/renderedContent'

export default function Project({ projectInfo, htmlContent }) {
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
                    <ProjectLinks links={projectInfo.links}/>
                    <RenderedContent htmlContent={htmlContent} />
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

            return {
                props: {
                    projectInfo: project,
                    htmlContent: htmlContent
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
