import { Project } from "../types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border-solid border-1 grid grid-cols-2 gap-2">
      <p className="m-auto underline underline-offset-4 text-4xl col-start-1 col-span-2 font-bold p-2">
        {project.title}
      </p>
      <p className="col-start-1 row-start-2 p-2">{project.description}</p>
      <img
        src={project.previewImageSource}
        className="col-start-2 row-span-3 p-2"
      ></img>
    </div>
  );
}
