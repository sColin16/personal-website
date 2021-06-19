import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles_next/Home.module.css'
import Layout from '../components/layout'
import AboutSection from '../components/aboutSection'
import PortfolioSection from '../components/portfolioSection'
import PostsSection from '../components/postsSection'

export default function Home() {
  return (
    <Layout home>
      <AboutSection />
      <PortfolioSection />
      <PostsSection />
    </Layout>
  )
}
