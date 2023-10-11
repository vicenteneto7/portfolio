'use client'

import Image from "next/image";
import { TechBadge } from "../../tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../../button";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/vicenteneto7",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/vicente-neto-martins-peres",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/+5588981672990",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSectionAbout = () => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="container flex items-start py-8 sm:py-24 justify-between flex-col-reverse lg:flex-row">
      <div className="w-full lg:max-w-[33.125rem]">
        <p className="font-mono text-gray-500">Olá, meu nome é</p>
        <h2 className="text-4xl text-gray-700 font-medium mt-2">
          Vicente Neto
        </h2>

        <p className="text-gray-500 my-6 text-sm sm:text-base mt-6">
          Sou um{" "}
          <strong className="text-gray-600">desenvolvedor full stack</strong>{" "}
          apaixonado por tecnologia. Com menos de{" "}
          <strong className="text-gray-600">1 ano de experiência</strong>. Meu
          objetivo é criar interfaces de usuário bonitas e funcionais, além de
          colaborar com equipes técnicas em projetos desafiadores. Estou sempre
          aberto a novas oportunidades e desafios.
        </p>

        <div className="flex flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-3 lg:max-w-[21.25rem]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TechBadge name="Next.js" />
          ))}
        </div>
        <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
          <Button
            onClick={handleContact}
            className="text-white gap-2 disabled:opacity-50"
          >
            Entre em contato
            <HiArrowNarrowRight size={18} />
          </Button>
          <div className="text-2xl flex items-center flex-row h-20 gap-2">
            {MOCK_CONTACTS.map((contact, index) => (
              <a
                href={contact.url}
                key={`contact-${index}`}
                target="_blank"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Image
        width={420}
        height={404}
        src="/images/logo.png"
        alt="Foto de perfil do Vicente"
        className="w-[18.75rem] h-[18.75rem] lg:w-[26.25rem] lg:h-[25.25rem] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        unoptimized
      />
    </section>
  );
};
