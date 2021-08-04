import ContactButton from './ContactButton'
import Image from 'next/image'
import styles from './styles/about-left.module.css'
import profilePic from '../public/profile_pic.jpg'

const CONTACT_BUTTONS = [
    {href: 'mailto:colin.siles16@gmail.com',            icon: 'fas fa-envelope',    background: '#e74c3c'},
    {href: 'https://www.linkedin.com/in/colin-siles/',  icon: 'fab fa-linkedin-in', background: '#0072b1'},
    {href: 'https://github.com/sColin16',               icon: 'fab fa-github',      background: 'white', foreground: '#323232'},
    {href: 'https://www.kaggle.com/colinsiles',         icon: 'fab fa-kaggle',      background: '#31C1FF'},
    {href: 'https://gitlab.com/sColin16',               icon: 'fab fa-gitlab',      background: '#fca326'},
]

const RESUME = "/Colin-Siles-Spring-2021-Resume.pdf"

export default function AboutSectionLeft() {
    return (
        <div className={styles.left_container}>
            <Image src={profilePic} alt="Picture of me" className={styles.image} width={320} height={320}/>

            <div className={styles.contact_container}>
                {CONTACT_BUTTONS.map(props => (
                    <ContactButton key={props.href} props={props}/>
                ))}
            </div>
            <div className={styles.resume_download}>
                <a href={RESUME}
                    download>

                    My Resume <i className="fas fa-download" />
                </a>
            </div>
        </div>
    )
}