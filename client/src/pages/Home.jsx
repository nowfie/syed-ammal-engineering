import AboutSection from "../sections/AboutSection"
import BlogSection from "../sections/BlogSection"
import CampusSection from "../sections/CampusSection"
import EventSection from "../sections/EventSection"
import HeroSectionAlt from "../sections/HeroSectionAlt"
import OffcialsSection from "../sections/OffcialsSection"
import ProgrammeSection from "../sections/ProgrammeSection"
import RaggingSection from "../sections/RaggingSection"
import RecordSection from "../sections/RecordSection"
import ResearchSection from "../sections/ResearchSection"

const Home = () => {
  return (
    <main>
      <HeroSectionAlt/>
      <AboutSection/>
      <RecordSection/>
      <CampusSection/>
      <ProgrammeSection/>
      <EventSection/>
      <OffcialsSection/>
      <ResearchSection/>
      <BlogSection/>
      <RaggingSection/>
    </main>
  )
}

export default Home