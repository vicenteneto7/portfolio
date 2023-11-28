import Image from "next/image"
import Logo from '../../../../../public/images/logo.png'
import { TechBadge } from "@/app/components/tech-badge"

export const ExperienceItem = () => {
    return(    
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
        <div className="flex flex-col items-center">
        <div className="rounded-full border border-gray-500 p-0.5">
            <Image src={Logo}
            height={40}
            width={40}
            alt="logo-da-empresa"
            className="rounded-full w-10 h-10"
             />
        </div>
        <div className="h-full w-[1px] bg-gray-800">
            
        </div>
        </div>
        <div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a href="https://www.figma.com/file/68xiJba6Cc1qKcpXBO5Unh
                /Porfolio-Tutorial-2023?type=design&node-id=359-343&mode=design&t=Nt6X8LzH5rcEgZgP-0"
                target="_blank"
                className="text-gray-600 hover:text-gray-400 transition-colors"
                >
                    @ Autônomo - Free Lancer
                </a>
                <h4 className="text-gray-400">Desenvolvedor Full Stack</h4>
                <span className="text-gray-600">
                    jun 2023 * momento * (5 meses)
                </span>
                <p className="text-gray-400">
                    Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, TypeScript e Figma
                </p>
            </div>
            <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
            <div className="flex gap-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                <TechBadge name="Next.js"/>
                <TechBadge name="TypeScript"/>
                <TechBadge name="ReactJS"/>
                <TechBadge name="NodeJS"/>
                <TechBadge name="Styled-components"/>
                <TechBadge name="TailwindCSS"/>
            </div>
        </div>
    </div>
    )
}