import { Routes, Route } from "react-router";
import { Inicio } from "../pages/Inicio";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}
