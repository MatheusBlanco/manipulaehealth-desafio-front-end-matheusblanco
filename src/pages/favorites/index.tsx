import dynamic from "next/dynamic";

const FavoritesPage = dynamic(async () => {
  const favoritesPage = await import("@/features/FavoritesPage");
  return favoritesPage.FavoritesPage;
});

export default function Favorites() {
  return <FavoritesPage />;
}
