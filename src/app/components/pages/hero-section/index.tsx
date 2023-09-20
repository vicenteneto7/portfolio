export const HeroSection = () => {
  return (
    <section className="container flex justify-center items-center py-28">
        <div className="flex justify-center items-center flex-col p-2 gap-7">
      <p className="flex uppercase text-xs tracking-widest text-gray-600">
        VAMOS CONSTRUIR ALGO INCRÍVEL JUNTOS
      </p>
      <h1 className="text-gray-700 text-center font-mono font-extrabold text-3xl sm:text-6xl">
        Olá, sou
        <b className="text-[#2543f0] ml-5 sm:ml-7 text-center">Vicente Neto</b>.    
      </h1>
      <p className="text-gray-700 text-center font-mono font-extrabold text-3xl sm:text-6xl">
      Desenvolvedor Full Stack
      </p>

      <p className="text-gray-600 py-4 text-center max-w-[80%] m-auto">
        Em meio a um mundo cada vez mais digital e com várias oportunidades
        surgindo, cada projeto desenvolvido significa um sonho sendo entregue e
        o sentimento da gratidão me move para entregar sempre o melhor de mim.
      </p>
      </div>
    </section>
  );
};
