import HomeSectionLayout from "./HomeSectionLayout"
import AboutSectionLeft from "./AboutSectionLeft"
import AboutSectionRight from "./AboutSectionRight"

export default function AboutSection({ education, aboutHtml }) {
    return (
        <HomeSectionLayout id={'about-section'}>
            <AboutSectionLeft />
            <AboutSectionRight educationList={education} aboutHtml={aboutHtml}/>
        </HomeSectionLayout>
    )
}