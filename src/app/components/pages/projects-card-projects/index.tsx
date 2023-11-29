import Image from "next/image";

export const ProjectsCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-600 hover:border-emerald-500 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="/images/project-todoList.png"
          alt="thumbnail do projeto"
          className="flex group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Bloco de Notas
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Bloco de Notas Online é uma ferramenta para criar anotações online.
          Nesta ferramenta você cria suas anotações com facilidade, sem precisar
          fazer login ou criar alguma conta. Para usar essa aplicação é muito
          fácil, digite ou cole alguma nota no campo de texto fornecido pela
          ferramenta localizado no retângulo azul e ela será salva
          automaticamente.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, React, TypeScript e TailwindCSS
        </span>
      </div>
    </div>
  );
};
