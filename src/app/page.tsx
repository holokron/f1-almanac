import { type Metadata } from "next";
import Link from "next/link";
import PageTitle from "~/components/PageTitle";
import { getCurrentSeason } from "~/lib/f1-api";

export default async function HomePage(): Promise<JSX.Element> {
  const currentSeason = await getCurrentSeason();

  const {
    RaceTable: { season },
  } = currentSeason;

  return (
    <>
      <PageTitle>Home page</PageTitle>

      <Link href={`/seasons/${season}`}>Current Season ({season})</Link>

      <Link href="/seasons">All seasons</Link>
    </>
  );
}


export const metadata: Metadata = {
  title: "F1 Almanac",
  description: "Your "
}