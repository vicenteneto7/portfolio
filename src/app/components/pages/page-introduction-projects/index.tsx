import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "../../link";
import { SectionTitle } from "../../section-title";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] flex flex-col items-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-center text-gray-400 my-6 text-sm sm:text-base max-w-[640px]">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href='/'>
        <HiArrowNarrowLeft size={20} />
        Voltar para home
        </Link>
      </div>
    </section>
  );
};
