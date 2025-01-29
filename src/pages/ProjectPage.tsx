import { useEffect, useState } from "react";
import { Project } from "../types";
import { useParams } from "react-router";

interface Props {
  projects: Project[];
}

export default function ProjectPage({ projects }: Props) {
  const { projectId } = useParams();

  const [currentProject, setCurrentProject] = useState<Project>();

  useEffect(() => {
    for (const project of projects) {
      if (project.id === projectId) {
        setCurrentProject(project);
        break;
      }
    }
  }, [projects, projectId]);

  return (
    <>
      <h1>{currentProject?.title}</h1>
      <p>{currentProject?.description}</p>
      <img src={currentProject?.previewImageSource} />
    </>
  );
}
