import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportIncident from "./pages/ReportIncident";
import EmergencyContacts from "./pages/EmergencyContacts";
import History from "./pages/History";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportIncident />} />
        <Route path="/emergency" element={<EmergencyContacts />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;