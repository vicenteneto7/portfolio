'use client'

import { useForm } from "react-hook-form";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { HiArrowNarrowRight } from "react-icons/hi";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const ContactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(500)
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {

  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema)
  })

  const onSubmit = (data: ContactFormData)  => {
    console.log(data)
  }

  return (
    <section id="contact" className="py-16 md:py-32 px-6 flex items-center justify-center">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          subtitle="contato"
          className="text-center items-center"
        />
        <form className="mt-12 w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full pl-4 pr-4 outline-none shadow-md text-black rounded-lg h-14"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full pl-4 pr-4 outline-none shadow-md text-black rounded-lg h-14"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none outline-none shadow-md text-black pl-4 pr-4 pt-3 w-full h-[138px] rounded-lg"
            maxLength={500}
            {...register('message')}
          />
          <Button className="mx-auto w-[47%] hover:bg-gray-800 mt-6 shadow-button text-white bg-gray-900">
            Enviar
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
