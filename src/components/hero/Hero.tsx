import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark, IoShareOutline } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import useHero from "./useHero";
import { useAppSelector } from "../../hooks/useStore";

const Hero: React.FC = () => {
  const { isLiked, isSaved, toggleLike, toggleSave } = useHero();
  const { articles, loading, error } = useAppSelector((state) => state.news);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-center py-8 text-red-700">
        NYTimes API limits the API requests per minute. Please try again later.
      </p>
    );

  if (!articles) return null;

  return (
    <div className="">
      <article className="max-lg:relative lg:gap-12 max-md:h-[80vh] max-lg:h-[500px] max-lg:isolate flex max-lg:flex-col max-lg:justify-end overflow-hidden lg:grid lg:grid-cols-2 max-lg:pb-6 max-lg:pt-40 w-full mx-auto">
        <img
          src={
            articles[0]?.imageUrl ||
            `https://placehold.co/4000x4000?text=${articles[0]?.title}`
          }
          alt={articles[0]?.title}
          className="max-lg:absolute max-lg:inset-0 max-lg:h-full sm:w-[750px] sm:h-[500px] max-lg:w-full lg:w-full object-cover"
        />
        <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30"></div>
        <div className="max-lg:z-10 lg:text-dark max-lg:mt-3 lg:flex lg:items-center px-1 max-lg:text-white">
          <div>
            <div className="flex justify-between max-lg:hidden my-3">
              <p className="text-danger text-[14px] font-semibold font-poppins">Trending</p>
              <div className="flex justify-center gap-4">
                <p className="cursor-pointer flex items-center">
                  {!isLiked ? (
                    <IoIosHeartEmpty onClick={toggleLike} />
                  ) : (
                    <IoIosHeart onClick={toggleLike} color="red" />
                  )}
                </p>
                <p className="cursor-pointer flex items-center">
                  <IoShareOutline />
                </p>
                <p className="cursor-pointer flex items-center">
                  {!isSaved ? (
                    <CiBookmark onClick={toggleSave} />
                  ) : (
                    <IoBookmark onClick={toggleSave} />
                  )}
                </p>
              </div>
            </div>
            <Link
              to={articles[0]?.url}
              target="_blank"
              className="font-ibm font-semibold text-2xl md:text-[32px] lg:text-dark lg:hover:text-danger"
            >
              {articles[0]?.title}
            </Link>
            <div className="font-poppins">
              <p className="max-md:hidden z-10 w-[90%] gap-y-1 overflow-hidden leading-6 max-md:text-gray-300  my-4 text-[15px]">
                {articles[0]?.fullDescription}
              </p>
              <div className="max-lg:hidden flex gap-10 text-[13px] mt-7">
                <p>2 days ago</p>
                <p className="text-secondary">
                  {articles[0]?.author} &nbsp; | &nbsp; 4min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="h-[181px] bg-danger justify-center sm:h-[80px] lg:my-8 font-poppins flex items-center">
        <div className="flex max-sm:flex-col max-sm:items-center justify-center gap-3 lg:gap-12 md:w-[738px] mx-auto text-center">
          <button className="bg-white border border-danger text-danger rounded-sm w-[215px] h-[48px] md:w-[157px] lg:h-[54px] hover:text-white hover:bg-danger hover:border hover:border-white">
            Breaking News
          </button>
          <p className="my-auto text-center text-white font-[500] text-[20px]">
            Kanye West says he's running for president in 2020.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
