import { StoreType } from "@/lib/interfaces";
import { useDispatch, useSelector } from "react-redux";

export const FavoritesPage = () => {
  const favoriteTracks = useSelector(
    (state: StoreType) => state.favoriteTracks
  );
  const dispatch = useDispatch();

  console.log(favoriteTracks);

  return <div>a</div>;
};
