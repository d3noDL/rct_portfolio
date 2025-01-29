import { Project } from "../types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border-solid border-1 grid grid-cols-2">
      <p className="col-start-1 font-bold">{project.title}</p>
      <p className="col-start-1 row-start-2">{project.description}</p>
      <img
        src={project.previewImageSource}
        className="col-start-2 row-span-3"
      ></img>
    </div>
  );
}
