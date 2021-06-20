import HomeSectionLayout from "./homeSectionLayout"
import AboutSectionLeft from "./aboutSectionLeft"
import AboutSectionRight from "./aboutSectionRight"

export default function AboutSection() {
    return (
        <HomeSectionLayout id={'about-section'}>
            <AboutSectionLeft />
            <AboutSectionRight />
        </HomeSectionLayout>
    )
}