// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ConferenceAbout from "./components/ConferenceAbout";
import DepartmentAbout from "./components/DepartmentAbout";
import UniversityAbout from "./components/UniversityAbout";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Organization from "./components/Organization";
import Speakers from "./components/Speakers";
import Travel from "./components/Travel";
import Dumdum from "./components/Dumdum";
import Howrah from "./components/Howrah";
import Sealdah from "./components/Sealdah";
import Kolkata from "./components/Kolkata";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";
import Fundings from "./components/Fundings";

import "./App.css"; // make sure this line exists

function App() {
  return (
    <div className="app-root">
      <div className="bg-orbit bg-orbit-1" />
      <div className="bg-orbit bg-orbit-2" />
      <div className="bg-grid" />

      <TopBar />
      <Menu />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<ConferenceAbout />} />
          <Route path="/department" element={<DepartmentAbout />} />
          <Route path="/university" element={<UniversityAbout />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/dumdum" element={<Dumdum />} />
          <Route path="/howrah" element={<Howrah />} />
          <Route path="/sealdah" element={<Sealdah />} />
          <Route path="/kolkata" element={<Kolkata />} />
          <Route path="/fundings" element={<Fundings />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
