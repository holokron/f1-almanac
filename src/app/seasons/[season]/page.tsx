import Link from "next/link";
import PageTitle from "~/components/PageTitle";
import { getSeason, type Race } from "~/lib/f1-api";

interface SeasonPageProps {
  params: {
    season: string;
  };
}

export default async function SeasonPage({
  params,
}: SeasonPageProps): Promise<JSX.Element> {
  const { season: seasonParam } = params;

  const {
    RaceTable: { season, Races },
  } = await getSeason(seasonParam);

  return (
    <>
      <PageTitle>Races of season {season}</PageTitle>
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Races.map((race) => (
          <Card key={race.round} race={race} />
        ))}
      </div>
    </>
  );
}

function Card({ race }: { race: Race }): JSX.Element {
  const { raceName, season, round } = race;

  return (
    <div className="card bg-base-100 shadow-xl hover:bg-neutral-focus">
      <Link href={`/seasons/${season}/races/${round}`}>
        <div className="card-body">
          <h2 className="card-title">{raceName}</h2>
        </div>
      </Link>
    </div>
  );
}
