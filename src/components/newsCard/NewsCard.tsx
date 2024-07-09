import React from "react";
import { formatDistanceToNow } from "date-fns";
import { IoShareOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { useNewsCard } from "./useNewsCard";
import { NewsArticle } from "../newsArticle/NewsArticle";
import { useAppSelector } from "../../hooks/useStore";
import { IoIosHeartEmpty } from "react-icons/io";

const NewsCard: React.FC = () => {
  const {
    loading,
    error,
    page,
    selectedArticle,
    setSelectedArticle,
    loadMoreArticles,
  } = useNewsCard();

  const { articles } = useAppSelector((state) => state.news);

  if (loading && page === 0)
    return (
      <div className="flex justify-center items-center min-h-[25vh]">
        <div className="relative w-16 h-16">
          <div className="absolute border-t-4 border-blue-500 border-solid rounded-full w-full h-full animate-spin"></div>
          <div className="absolute border-t-4 border-red-500 border-solid rounded-full w-full h-full animate-spin delay-150"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <p className="text-center py-8 text-red-700">
        nytimes API limits the API requests per minute. Please try again later.
      </p>
    );

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-4 max-md:mx-3 text-dark">
        {articles?.slice(1).map((article, i) => (
          <div key={i} className="flex flex-col bg-white shadow-lg rounded-sm">
            <div onClick={() => setSelectedArticle(article)}>
              <img
                className="cursor-pointer w-full object-cover md:w[438px] h-[210px]"
                src={
                  article?.imageUrl ||
                  `https://placehold.co/4000x4000?text=${article?.title}`
                }
                alt={article?.title}
              />
            </div>
            <div className="p-2 md:px-6 my-3 flex flex-col justify-between flex-1">
              <div>
                <p
                  onClick={() => setSelectedArticle(article)}
                  className="font-semibold text-lg font-ibm hover:text-danger cursor-pointer"
                >
                  {article?.title}
                </p>
                <p className="text-[15px] font-nunito my-3 md:h-32">
                  {article?.description}
                </p>
              </div>
              <div className="flex gap-10 font-poppins text-[13px]">
                <p>{formatDistanceToNow(new Date(article?.publishedAt))} ago</p>
                <p className="text-secondary">
                  <span className="px-1">{article?.author} </span>
                  <span className="border-s-[1px] border-dark ps-2">
                    4min read
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-dark/20 py-4">
              <div className="flex justify-center gap-8 font-poppins">
                <p className="cursor-pointer flex items-center">
                  <IoIosHeartEmpty />
                  <span className="text-xs ms-1">{article?.likes}</span>
                </p>
                <p className="cursor-pointer flex items-center">
                  <IoShareOutline />{" "}
                  <span className="text-xs ms-1">{article?.shares}</span>
                </p>
                <p className="cursor-pointer flex items-center">
                  <CiBookmark />
                </p>
              </div>
            </div>
          </div>
        ))}
        {selectedArticle && (
          <NewsArticle
            open={true}
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </div>

      {/* Load More Btn Section */}
      {loading && (
        <div className="flex justify-center items-center w-full h-12">
          <div className="w-10 h-10 border-t-2 border-r-2 border-b-2 border-l-2 border-blue-500 animate-spin"></div>
        </div>
      )}
      <div className="flex justify-center mt-8 pb-3">
        <button
          onClick={loadMoreArticles}
          className="uppercase mx-auto w-[220px] h-[60px] text-[14px] font-poppins font-medium text-danger border rounded-sm text-center border-danger hover:bg-danger hover:text-white hover:border-white"
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default NewsCard;
