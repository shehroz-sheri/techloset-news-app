import React from "react";
import { IoIosHeartEmpty, IoIosHeart, IoMdClose } from "react-icons/io";
import { IoBookmark, IoShareOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import {
  useModalVisibility,
  useLikeStatus,
  useSaveStatus,
} from "./useNewsArticle";
import { ModalProps } from "../../types/types";

export const NewsArticle: React.FC<ModalProps> = ({
  open,
  onClose,
  article,
}) => {
  const isVisible = useModalVisibility(open);
  const { isLiked, toggleLike } = useLikeStatus();
  const { isSaved, toggleSave } = useSaveStatus();

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0" onClick={onClose}></div>
      <div
        className={`bg-white rounded-[20px] 2xl:h-[596px] overflow-hidden w-11/12 p-5 relative transform transition-all duration-300 ${
          open ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:bg-gray-200"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
        <div className="w-full">&nbsp;</div>
        <article className="grid lg:grid-cols-2 sm:gap-0 md:gap-4 lg:gap-10 2xl:gap-0 pb-2 sm:mt-1 md:mt-5 lg:mt-0">
          <div>
            <img
              src={
                article?.imageUrl ||
                `https://placehold.co/4000x4000?text=${article?.title}`
              }
              alt={article?.title}
              className="max-h-60 md:max-h-96 w-full object-cover h-[347px] 2xl:min-w-[750px] 2xl:min-h-[500px] 2xl:max-w-[750px] 2xl:max-h-[500px]"
            />
          </div>
          <div className="grid items-center">
            <div className="sm:text-dark max-sm:mt-3 sm:flex sm:items-center px-1">
              <div>
                <div className="flex justify-between my-1 sm:my-3">
                  <p className="text-danger text-md font-semibold font-poppins text-[15px]">Trending</p>
                  <div className="flex justify-center gap-4 max-sm:hidden">
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
                  to={article?.url}
                  target="_blank"
                  className="font-ibm font-semibold sm:text-[32px] sm:text-dark sm:hover:text-danger"
                >
                  {article?.title}
                </Link>
                <div className="font-poppins">
                  <p className="text-gray-700 w-[90%] gap-y-1 overflow-hidden leading-5 my-4 text-[15px]">
                    {article?.fullDescription}
                  </p>
                  <div className="flex sm:gap-10 max-sm:flex-col max-sm:gap-1 max-sm:items-center text-xs">
                    <p>
                      {formatDistanceToNow(new Date(article?.publishedAt))} ago
                    </p>
                    <p className="text-gray-500 max-sm:text-[10.5px]">
                      {article?.author} &nbsp; | &nbsp; 4min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
