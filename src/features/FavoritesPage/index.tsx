import Link from "next/link";

export const FavoritesPage = () => {
  const favoriteTracks = useSelector(
    (state: StoreType) => state.favoriteTracks
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Link href={"/"} passHref={true}>
        home
      </Link>
    </div>
  );
};
