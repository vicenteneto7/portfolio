import { HeroSectionAbout } from "../components/pages/hero-section-about";
import { HighlightedProjects } from "../components/pages/highlighted-projects";
import { KnowTechs } from "../components/pages/know-techs";
import { WorkExperience } from "../components/pages/work-experience";

export default function Projects() {
    return(
        <>
        <HeroSectionAbout />
        <KnowTechs />
        <HighlightedProjects />
        <WorkExperience />
        </>
    )
}