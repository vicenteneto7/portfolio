import { ProjectsCard } from "../projects-card-projects";

export const ProjectsList = () => {
  return (
    <section className="container pb-32 pt-20 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(21.875rem,1fr))] gap-x-4 gap-y-6">
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </section>
  );
};
