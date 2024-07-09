import React from "react";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import NewsCard from "../../components/newsCard/NewsCard";
import { EditorsPick } from "../../components/editorsPick/EditorsPick";

const Home: React.FC = () => {
  return (
    <div className="bg-dimSecondary md:pt-5">
      <div className="sm:w-[95%] 2xl:w-[1368px] mx-auto">
        <Hero />
        <Categories />
        <NewsCard />
        <EditorsPick />
      </div>
    </div>
  );
};

export default Home;
