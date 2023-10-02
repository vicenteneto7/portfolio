import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () => {
    return(
        <section className="container py-16 flex gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
            <SectionTitle subtitle="experiências" title="Experiência profissional"/>
            <p className="text-gray-400">
                Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!
            </p>
            </div>
            <div className="flex flex-col">
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
            <ExperienceItem />
            </div>
        </section>
    )
}