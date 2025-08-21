import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectVideoPage } from "./screens/ProjectVideoPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProjectVideoPage />
  </StrictMode>,
);
