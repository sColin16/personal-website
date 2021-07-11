import Head from 'next/head'
import GlobalLayout from '../components/globalLayout'
import FullHeader from '../components/fullHeader'
import WideBodyLayout from '../components/wideBodyLayout'
import AboutSection from '../components/aboutSection'
import PortfolioSection from '../components/portfolioSection'
import PostsSection from '../components/postsSection'
import fs from 'fs'

export default function Home({ education, projects, posts }) {
  return (
    <>
      <Head>
        <title>Colin Siles</title>
      </Head>

      <GlobalLayout>
        <FullHeader />

        <WideBodyLayout>
          <AboutSection education={education}/>
          <PortfolioSection projects={projects}/>
          <PostsSection posts={posts}/>
        </WideBodyLayout>

      </GlobalLayout>
    </>
  )
}

export async function getStaticProps() {
  const education = JSON.parse(fs.readFileSync('data/education.json')).education
  const projects = JSON.parse(fs.readFileSync('data/projects.json', 'utf-8')).projects
  const posts = JSON.parse(fs.readFileSync('data/posts.json')).posts

  return {
    props: {
      education,
      projects,
      posts
    }
  }
}