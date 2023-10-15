import logger from "~/utils/logger";

export type MRData<ResponseType> = {
  limit: string;
  offset: string;
  total: string;
} & ResponseType;

export interface MRDataResponse<ResponseType> {
  MRData: MRData<ResponseType>;
}

export interface Season {
  season: string;
  url: string;
}

export interface SeasonTable {
  Seasons: Season[];
}

export interface Race {
  season: string;
  round: string;
  raceName: string;
}

export interface RaceTable {
  season: string;
  Races: Race[];
}

export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  permanentNumber?: string;
  code?: string;
}

export interface DriverTable {
  season: string;
  Drivers: Driver[];
}

async function request<ResponseType>(
  path: string,
  options: { limit?: number; offset?: number } = { limit: 10, offset: 0 }
) {
  const { limit = 10, offset = 0 } = options;

  const url = new URL(
    `${path}?limit=${limit}&offset=${offset}`,
    "https://ergast.com"
  );

  try {
    const response = await fetch(url);

    const data = (await response.json() as MRDataResponse<ResponseType>);

    return data.MRData;
  } catch (error) {
    logger.error("Request error", error);

    throw error;
  }
}

export const getAllSeasons = () =>
  request<{ SeasonTable: SeasonTable }>("/api/f1/seasons.json", { limit: 100 });

export const getSeasons = (limit = 10, offset = 10) =>
  request<{ SeasonTable: SeasonTable }>("/api/f1/seasons.json", { limit, offset });

export const getCurrentSeason = () =>
  request<{ RaceTable: RaceTable }>("/api/f1/current.json", { limit: 30 });

export const getSeason = (season: string) =>
  request<{ RaceTable: RaceTable }>(`/api/f1/${season}.json`, { limit: 30 });

export const getDriversForSeason = (season: string) =>
  request<{ DriverTable: DriverTable }>(`/api/f1/${season}/drivers.json`, {
    limit: 50,
  });
