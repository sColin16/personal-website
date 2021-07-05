import Head from 'next/head'
import Layout from '../components/layout'
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
      <Layout home>
        <AboutSection education={education}/>
        <PortfolioSection projects={projects}/>
        <PostsSection posts={posts}/>
      </Layout>
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