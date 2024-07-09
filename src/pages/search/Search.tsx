import React from "react";
import SearchSection from "../../components/searchSection/SearchSection";
import Categories from "../../components/categories/Categories";
import NewsCard from "../../components/newsCard/NewsCard";

export const Search: React.FC = () => {
  return (
    <>
      <div className="bg-dimSecondary">
        <div className="sm:w-[95%] 2xl:w-[80%] mx-auto">
          <SearchSection />
          <Categories />
          <NewsCard />
        </div>
      </div>
    </>
  );
};
