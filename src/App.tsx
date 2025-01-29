import { BrowserRouter, Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import PersistentBar from "./components/PersistentBar";
import ProjectPage from "./pages/ProjectPage";
import mockDB from "./mockDB.json";
import { useEffect, useState } from "react";
import { Project } from "./types";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(mockDB);
  }, []);

  return (
    <>
      <PersistentBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage projects={projects} />}></Route>
          <Route
            path="/:id"
            element={<ProjectPage projects={projects} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
