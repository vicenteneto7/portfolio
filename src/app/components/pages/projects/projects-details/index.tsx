import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { TechBadge } from "@/app/components/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { Link } from "@/app/components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center pb-10 sm:pb-24 pt-0 px-6 overflow-hidden">
      <SectionTitle
        className="flex items-center sm:[&>h3]:text-4xl"
        subtitle="projetos"
        title="To do List"
      />
      <p className="text-gray-500 my-4 sm:my-6 text-sm sm:text-base text-center max-w-[640px]">
        O Bloco de Notas Online é uma ferramenta para criar anotações online.
        Nesta ferramenta você cria suas anotações com facilidade, sem precisar
        fazer login ou criar alguma conta. Para usar essa aplicação é muito
        fácil, digite ou cole alguma nota no campo de texto fornecido pela
        ferramenta localizado no retângulo azul e ela será salva
        automaticamente.
        <br />
        <br />
        
      </p>
      <div className=" w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="TypeScript" />
        <TechBadge name="TailwindCSS" />
        <TechBadge name="ReactJS" />
      </div>
      <div className="my-6 sm:my-12 gap-2 sm:gap-4 flex flex-col sm:flex-row items-center justify-center">
        <a href="https://github.com/vicenteneto7/to_do_list" target="_blank">
          <Button className="shadow-lg min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://to-do-list-topaz-one.vercel.app/" target="_blank">
          <Button className="shadow-lg min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};
