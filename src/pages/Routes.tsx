import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import { Footer } from "../components/footer/Footer";
import { Search } from "./search/Search";
import { Navbar } from "../components/navbar/Navbar";
import Page404 from "./page404/Page404";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />

          <Route path="/*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Index;
