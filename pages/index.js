import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles_next/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <p>Hello, world!</p>
    </Layout>
  )
}
