import Link from 'next/link'
import { Twirl as Hamburger } from 'hamburger-react'

/**
 * The header displayed on all parts of the site 
 * @param {Object} props React props passed to this component
 * @param {boolean} props.home Whether or not the header is being displayed on the home page
 * @returns {ReactElement}
 */
export default function Header({ home }) {
    return (
        <header>
            <div>
                <Link href='/'>
                    <a><h1>Colin Siles</h1></a> 
                </Link>

                <Hamburger />
            </div>

            {
                home && <nav>
                    <a href='/#about-section'><h2>About Me</h2></a>
                    <a href='/#portfolio-section'><h2>Portfolio</h2></a>
                    <a href='/#post-section'><h2>Posts</h2></a>
                </nav>
            }
        </header>
    )
}