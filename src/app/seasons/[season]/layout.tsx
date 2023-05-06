import Link from "next/link";
import { type PropsWithChildren } from "react";
import Breadcrumbs from "~/components/Breadcrumbs";
import { getSeason } from "~/lib/f1-api";

interface SeasonLayoutProps extends PropsWithChildren {
  params: {
    season: string;
  };
}

export default async function SeasonLayout({
  children,
  params,
}: SeasonLayoutProps): Promise<JSX.Element> {
  const { season: seasonParam } = params;

  const {
    RaceTable: { season },
  } = await getSeason(seasonParam);

  return (
    <>
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/seasons">Seasons</Link>
        <Link href={`/seasons/${season}`}>{season}</Link>
      </Breadcrumbs>

      {children}
    </>
  );
}
