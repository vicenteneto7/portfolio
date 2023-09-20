import { cn } from "@/lib/utis";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className="flex text-gray-800">{`.../${subtitle}`}</span>
      <h3 className="text-3xl text-gray-500 font-medium">{title}</h3>
    </div>
  );
};
