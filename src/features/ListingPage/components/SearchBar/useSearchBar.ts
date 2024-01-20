import { useRouter } from "next/router";

export const useSearchBar = () => {
  const router = useRouter();
  const { query } = router;

  const refreshData = (searchValue: string) => {
    router.push({
      pathname: "/",
      query: { search: searchValue },
    });
  };

  return { refreshData, query };
};
