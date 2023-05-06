import { getDriversForSeason } from "~/lib/f1-api";

interface DriversPageProps {
  params: {
    season: string;
  };
}

export default async function DriversPage({
  params,
}: DriversPageProps): Promise<JSX.Element> {
  const { season } = params;

  const {
    DriverTable: { Drivers },
  } = await getDriversForSeason(season);

  return (
    <>
      <h2>Drivers of season {season}</h2>

      <ol>
        {Drivers.map(({ driverId, givenName, familyName }) => (
          <li key={driverId}>
            {givenName} {familyName}
          </li>
        ))}
      </ol>
    </>
  );
}
