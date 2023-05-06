import Link from "next/link";
import Breadcrumbs from "~/components/Breadcrumbs";
import PageTitle from "~/components/PageTitle";
import SeasonCard from "~/components/SeasonCard";
import { getSeasons } from "~/lib/f1-api";

export default async function SeasonsPage(): Promise<JSX.Element> {
  const {
    SeasonTable: { Seasons },
  } = await getSeasons();

  return (
    <>
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/seasons">Seasons</Link>
      </Breadcrumbs>

      <PageTitle>Seasons</PageTitle>

      <div className="grid gap-4">
        {Seasons.reverse().map(({ season }) => (
          <SeasonCard key={season} season={season} />
        ))}
      </div>
    </>
  );
}
