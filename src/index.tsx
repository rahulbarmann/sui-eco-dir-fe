import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DirectoryMainPage } from "./screens/DirectoryMainPage";
import { ProjectPage } from "./routes/ProjectPage/screens/ProjectPage";
import { ProjectVideoPage } from "./routes/ProjectVideoPage/screens/ProjectVideoPage";
import "./styles.css";

createRoot(document.getElementById("app") as HTMLElement).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="min-h-screen bg-black w-full min-w-full">
                            <DirectoryMainPage />
                        </div>
                    }
                />
                <Route path="/project/:projectId" element={<ProjectPage />} />
                <Route path="/videos" element={<ProjectVideoPage />} />
            </Routes>
        </Router>
    </StrictMode>
);
