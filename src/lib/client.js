const create = require("axios").create
const axiosRetry = require("axios-retry")

exports.create = function(apiHost) {
  const axios = create({
    baseURL: apiHost,
  })
  axiosRetry(axios, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
  })

  return {
    getSeasonsList: () =>
      axios
        .get("/seasons.json", {
          params: {
            limit: 100,
          },
        })
        .then(response => response.data),
    getDriversForSeason: season =>
      axios.get(`/${season}/drivers.json`).then(response => response.data),
    getConstructorsForSeason: season =>
      axios.get(`/${season}/constructors.json`).then(response => response.data),
    getRacesForSeason: season =>
      axios.get(`/${season}.json`).then(response => response.data),
    getDriversStandingsForSeason: season =>
      axios
        .get(`/${season}/driverStandings.json`, {
          params: {
            limit: 100,
          },
        })
        .then(response => response.data),
    getConstructorsStandingsForSeason: season =>
      axios
        .get(`/${season}/constructorStandings.json`, {
          params: {
            limit: 100,
          },
        })
        .then(response => response.data),
  }
}
