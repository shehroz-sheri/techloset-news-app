import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useStore"; // Adjust path as per your project structure
import { fetchNews } from "../../redux/slices/newsSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useSearchSection() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("query");

  const [query, setQuery] = useState<string>(name || "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!query) {
      dispatch(fetchNews({ query: "politics", page: 0 }));
    }
  }, [dispatch, query]);

  const handleSearch = (query: string) => {
    dispatch(fetchNews({ query, page: 0 }));
    setSearchParams(query);
  };

  const setSearchParams = (query: string) => {
    const params = new URLSearchParams();
    params.set("query", query);
    navigate({ search: params.toString() });
  };

  return {
    query,
    setQuery,
    handleSearch,
  };
}
