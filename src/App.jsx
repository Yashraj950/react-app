import React from "react";
import Home from "./Home";
import About from "./assets/About";
import Services from "./assets/Services";
import Contact from "./assets/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      helper: "#8490ff",
      bg: " rgb(190, 223, 246)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgb(98 84 243 0.5)", 
      hr: "#ffffff",
      gradient:
        "liner-gradient (0deg, rgb(132 144 244) 0%,  rgb(98 189 255) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15)0px 0px 0px 1px ; ",
      shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },

  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
