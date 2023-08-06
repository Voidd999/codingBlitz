import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/nav";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
