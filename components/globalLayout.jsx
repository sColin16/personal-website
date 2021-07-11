import Head from 'next/head'
import Footer from './footer'

/**
 * A global layout used across all pages, which is basically just the Head tag and footer
 * @returns {ReactElement}
 */
export default function GlobalLayout({ children }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous"/>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Lobster+Two&family=Recursive:wght@400;600&family=Ubuntu:wght@400;600&display=swap" rel="stylesheet" />

                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>

            {children}

            <Footer />
        </>
    )
}