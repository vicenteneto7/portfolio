import Image from "next/image";

const section = [
  {
    title: "Login",
    image:
      "/images/next.png",
  },
  {
    title: "Home",
    image:
    "/images/next.png",
  },
];

export const ProjectSection = () => {
  return (
    <section className=" container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {section.map((section) => (
        <div
          key={section.title}
          className="flex flex-col iems center gap-6 md:gap-12"
        >
          <h2 className=" text-2xl text-center md:text-3xl font-medium text-gray-600">
            {section.title}
          </h2>
          <Image
            src={section.image}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
          />
        </div>
      ))}
    </section>
  );
};
