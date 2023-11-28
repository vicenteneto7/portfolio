import { SectionTitle } from "@/app/components/section-title";
import { TbBrandNextjs, TbBrandTypescript, TbBrandHtml5, TbBrandReactNative, TbBrandCss3, TbBrandReact, TbBrandTailwind, TbBrandJavascript, TbBrandNodejs } from "react-icons/tb";
import { SiExpress, SiSequelize, SiStyledcomponents } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { KnowTech } from "./know-tech";


export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[3.4rem]">
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2023-08-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandTypescript />,
              name: "TypeScript",
              startDate: "2023-08-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandReact />,
              name: "ReactJS",
              startDate: "2023-07-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandJavascript />,
              name: "JavaScript",
              startDate: "2023-05-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNodejs />,
              name: "NodeJS",
              startDate: "2023-06-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <SiExpress />,
              name: "Express",
              startDate: "2023-06-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandTailwind />,
              name: "TailwindCSS",
              startDate: "2023-08-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandHtml5 />,
              name: "HTML5",
              startDate: "2023-05-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandCss3 />,
              name: "CSS3",
              startDate: "2023-05-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <BiLogoPostgresql />,
              name: "PostgreSQL",
              startDate: "2023-09-06",
            }}
          />
        ))}
         {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <SiSequelize />,
              name: "Sequelize",
              startDate: "2023-09-06",
            }}
          />
        ))}
         {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <SiStyledcomponents />,
              name: "Styled-components",
              startDate: "2023-09-06",
            }}
          />
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandReactNative />,
              name: "React Native",
              startDate: "2023-09-06",
            }}
          />
        ))}
      </div>
    </section>
  );
};
