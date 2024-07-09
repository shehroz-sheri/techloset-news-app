import React from "react";
import { useSearchSection } from "./useSearchSection";

const SearchSection: React.FC = () => {
  const { query, setQuery, handleSearch } = useSearchSection();

  return (
    <>
      <div className="min-h-[70vh] md:min-h-[50vh] lg:min-h-[70vh] flex justify-center items-center">
        <div className="text-center w-full">
          <div className="container mx-auto w-[90%] flex flex-col gap-10">
            <h2 className="font-semibold font-ibm text-3xl xl:text-5xl text-dark">
              Search News
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(query);
              }}
              className="mx-auto w-full lg:w-[60%] xl:w-[800px]"
            >
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <img
                    className="w-4"
                    src={require("../../assets/images/SearchIcon.png")}
                    alt="search"
                  />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  id="email-address-icon"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search Here..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
