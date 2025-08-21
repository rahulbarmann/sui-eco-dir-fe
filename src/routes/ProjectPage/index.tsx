import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectPage } from "./screens/ProjectPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProjectPage />
  </StrictMode>,
);
