import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import classNames from 'classnames'
import styles from './styles/layout.module.css'

/**
 * Outer-most component that wraps all pages to include the header and footer
 * @param {Object} props The React props passed to this component
 * @param {ReactNode} props.children The internal components of the page
 * @param {boolean} props.home Whether or not this is the home page, to customize header appearance
 * @returns {ReactElement}
 */

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Lobster+Two&family=Recursive:wght@400;600&family=Ubuntu:wght@400;600&display=swap" rel="stylesheet" />

                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>

            <Header home={home} />
            <main className={classNames({[styles.home_container]: home})}>
                {children}
            </main>
            <Footer />
        </>
    )
}