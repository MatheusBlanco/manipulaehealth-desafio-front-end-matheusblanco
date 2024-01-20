import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSearchBar = () => {
  const router = useRouter();
  const { query } = router;

  const refreshData = (searchValue: string) => {
    router.push({
      pathname: "/",
      query: { search: searchValue },
    });
  };

  useEffect(() => {
    return () => {
      router.push({
        pathname: "/",
        query: {},
      });
    };
  }, []);

  return { refreshData, query };
};
