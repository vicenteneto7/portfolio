import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={404}
          src="/images/project-todoList.png"
          alt="thumbnail do projeto"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-500">
          <Image
            src="/images/logo.png"
            width={20}
            height={20}
            alt=""
          />
          To do List
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed suscipit
          exercitationem perferendis sapiente. Adipisci doloremque nesciunt,
          atque nulla quam fugiat pariatur, rerum nostrum eos, quo dolores vel
          deleniti ipsa accusantium.
        </p>
        <div className="flex flex-wrap mb-8 gap-x-2 gap-y-3 lg:max-[350px]:">
          <TechBadge name="TypeScript" />
          <TechBadge name="React.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Tilwind CSS" />
        </div>
        <Link href="/projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
