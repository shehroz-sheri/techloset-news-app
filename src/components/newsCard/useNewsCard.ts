import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import {
  fetchNews,
  resetArticles,
  incrementPage,
  // Article,
} from "../../redux/slices/newsSlice";
import { Article } from "../../types/types";

export function useNewsCard() {
  const dispatch = useAppDispatch();
  const { loading, error, page } = useAppSelector((state) => state.news);

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [name, setName] = useState<string | null>(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setName(params.get("query"));
  }, [searchParams]);

  useEffect(() => {
    dispatch(resetArticles());
    dispatch(fetchNews({ query: name || "politics", page: 0 }));
  }, [dispatch, name]);

  const loadMoreArticles = () => {
    dispatch(incrementPage());
    dispatch(fetchNews({ query: name || "politics", page: page + 1 }));
  };

  return {
    loading,
    error,
    page,
    selectedArticle,
    setSelectedArticle,
    loadMoreArticles,
  };
}
