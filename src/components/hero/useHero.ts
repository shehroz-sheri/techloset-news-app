import { useState } from "react";

const useHeroState = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const toggleLike = () => setIsLiked(!isLiked);
  const toggleSave = () => setIsSaved(!isSaved);

  return {
    isLiked,
    isSaved,
    toggleLike,
    toggleSave,
  };
};

export default useHeroState;
