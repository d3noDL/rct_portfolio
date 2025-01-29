import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../types";

interface Props {
  projects: Project[];
}

export default function IndexPage({ projects }: Props) {
  const [fullstackProjects, setFullstackProjects] = useState<Project[]>([]);
  const [gameDevelopmentProjects, setGameDevelopmentProjects] = useState<
    Project[]
  >([]);

  useEffect(() => {
    const fullstack: Project[] = [];
    const gamedev: Project[] = [];

    for (const project of projects) {
      if (project.type === "fullstack") {
        fullstack.push(project);
      } else if (project.type === "game-dev") {
        gamedev.push(project);
      }
    }

    setFullstackProjects(fullstack);
    setGameDevelopmentProjects(gamedev);
  }, [projects]);

  return (
    <>
      <p className="about-me">about me text</p>
      <section className="grid grid-cols-2 gap-x-2">
        <section className="col-start-1 grid gap-y-2">
          <h4>FULLSTACK</h4>
          {fullstackProjects.map((project) => {
            return <ProjectCard project={project}></ProjectCard>;
          })}
        </section>
        <section className="col-start-2 grid gap-y-2">
          <h4>GAME DEVELOPMENT</h4>
          {gameDevelopmentProjects.map((project) => {
            return <ProjectCard project={project}></ProjectCard>;
          })}
        </section>
      </section>
    </>
  );
}
