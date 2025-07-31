import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import GrausAmeaca from "./pages/GrausAmeaca";
import Overall from "./pages/Overall";
import CincoNoTopo from "./pages/CincoNoTopo";
import News from "./components/News";
import Contato from "./pages/Contato";
import { Toaster } from "./components/ui/toaster";

// Wrapper para páginas que precisam do layout completo
const PageWrapper = ({ children }) => (
  <div className="min-h-screen bg-slate-50">
    <div className="py-8">
      {children}
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/graus-ameaca" element={<GrausAmeaca />} />
          <Route path="/overall" element={<Overall />} />
          <Route path="/cinco-no-topo" element={<CincoNoTopo />} />
          <Route path="/noticias" element={<PageWrapper><News /></PageWrapper>} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;