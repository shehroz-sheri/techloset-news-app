import React from "react";
import { useLocation } from "react-router-dom";

const Categories: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className="flex justify-between lg:mt-2 mb-2 bg-white h-[83px] md:h-[54px] px-3 sm:rounded items-center font-poppins">
        <div className="flex gap-7">
          {path !== "/search" ? (
            <>
              <p className="cursor-pointer hover:text-danger font-semibold">
                <span className="border-b-2 border-danger">Latest</span> Stories
              </p>
            </>
          ) : (
            <p className="cursor-pointer hover:text-danger font-semibold">
              <span className="border-b-2 border-danger">Search</span> Results
            </p>
          )}
          {path !== "/search" ? (
            <>
              <p className="cursor-pointer hover:text-danger font-semibold">
                Opinion
              </p>
              <p className="cursor-pointer hover:text-danger font-semibold">
                Health
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="max-sm:hidden">
          <img
            className="w-5"
            src={require("../../assets/images/CategoriesLayout.png")}
            alt="Layout-Layout"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
