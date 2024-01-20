import ListingPage from "@/features/ListingPage";
import { TracksResponse } from "@/features/ListingPage/interfaces";
import { api } from "@/services/api";
import { GetServerSidePropsContext } from "next/types";

interface Props {
  tracks: TracksResponse;
}

export default function Home({ tracks }: Props) {
  return <ListingPage tracks={tracks} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  if (query.search) {
    const { data: tracks } = await api.get("search?q=" + query.search);
    return { props: { tracks } };
  } else {
    const { data } = await api.get("/editorial/0/charts");
    const { tracks } = data;
    return { props: { tracks } };
  }
}
