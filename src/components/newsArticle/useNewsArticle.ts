import { useState, useEffect } from "react";

export const useModalVisibility = (open: boolean) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return isVisible;
};

export const useLikeStatus = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);

  return { isLiked, toggleLike };
};

export const useSaveStatus = () => {
  const [isSaved, setIsSaved] = useState(false);
  const toggleSave = () => setIsSaved(!isSaved);

  return { isSaved, toggleSave };
};
