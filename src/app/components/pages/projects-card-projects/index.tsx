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
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Next.js</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Next.js é uma estrutura da web de desenvolvimento front-end React de
          código aberto criada por Vercel que permite funcionalidades como
          renderização do lado do servidor e geração de sites estáticos para
          aplicativos da web baseados em React.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, Next Auth, React, React Native, TypeScript, MongoDB
        </span>
      </div>
    </div>
  );
};
