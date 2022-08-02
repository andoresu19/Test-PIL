import { LandingPage } from "./pages/LandingPage";
import { Instructions } from "./pages/Instructions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Questions } from "./pages/Questions";
import { FinalPage } from "./pages/FinalPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/finalPage" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}
