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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous"/>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Lobster+Two&family=Recursive:wght@400;600&family=Ubuntu:wght@400;600&display=swap" rel="stylesheet" />

                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>

            <Header home={home} />
            <main className={classNames({[styles.home_container]: home, [styles.info_container]: !home})}>
                {children}
            </main>
            <Footer />
        </>
    )
}