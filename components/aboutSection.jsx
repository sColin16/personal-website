import HomeSectionLayout from "./homeSectionLayout"
import AboutSectionLeft from "./aboutSectionLeft"
import AboutSectionRight from "./aboutSectionRight"

export default function AboutSection({ education }) {
    return (
        <HomeSectionLayout id={'about-section'}>
            <AboutSectionLeft />
            <AboutSectionRight educationList={education}/>
        </HomeSectionLayout>
    )
}