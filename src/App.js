import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import AbouUs from "./pages/AboutUs/AbouUs";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/portfolio"} element={<Portfolio />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/aboutUs"} element={<AbouUs />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
