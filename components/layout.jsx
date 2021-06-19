import Head from 'next/head'

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
                <link rel="icon" type="image/png" href="/favicon.png"></link>
            </Head>

            <Header home />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}