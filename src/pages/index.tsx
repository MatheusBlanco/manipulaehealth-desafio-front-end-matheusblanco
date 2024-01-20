import {
  ListingPageProps,
  TracksResponse,
} from "@/features/ListingPage/interfaces";
import { api } from "@/services/api";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next/types";

interface Props {
  tracks?: TracksResponse;
}

const ListingPage = dynamic<ListingPageProps>(
  () => import("@/features/ListingPage")
);

export default function Home({ tracks }: Props) {
  return (
    <>
      <h1>Home</h1>
      <ListingPage tracks={tracks} />
    </>
  );
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
