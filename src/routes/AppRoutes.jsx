import { Routes, Route } from "react-router";
import { Inicio } from "../pages/Inicio";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  );
}
