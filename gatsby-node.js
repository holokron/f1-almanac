const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const promises = []

    promises.push(
        createPage({
            path: "/seasons",
            component: path.resolve(__dirname, "src", "layouts", "Seasons.tsx"),
        })
    )

    graphql(`
        {
            dataJson (SeasonTable: {Seasons: {elemMatch: {season: {ne: null}}}}) {
                SeasonTable {
                    Seasons {
                        season
                        url
                    }
                }
            }
        }
    `).then((result) => {
        result.data.dataJson.SeasonTable.Seasons.forEach((season) => {
            promises.push(
                createPage({
                    path: `/seasons/${season.season}`,
                    component: path.resolve(__dirname, 'src', 'layouts', 'Season.tsx'),
                    context: {
                        season: season.season,
                    },
                })
            )

            promises.push(
                createPage({
                    path: `/seasons/${season.season}/drivers`,
                    component: path.resolve(__dirname, 'src', 'layouts', 'Drivers.tsx'),
                    context: {
                        season: season.season,
                    },
                })
            )

            promises.push(
                createPage({
                    path: `/seasons/${season.season}/teams`,
                    component: path.resolve(__dirname, 'src', 'layouts', 'Teams.tsx'),
                    context: {
                        season: season.season,
                    },
                })
            )

            promises.push(
                createPage({
                    path: `/seasons/${season.season}/races`,
                    component: path.resolve(__dirname, 'src', 'layouts', 'Races.tsx'),
                    context: {
                        season: season.season,
                    },
                })
            )

            promises.push(
                createPage({
                    path: `/seasons/${season.season}/standings`,
                    component: path.resolve(__dirname, 'src', 'layouts', 'Standings.tsx'),
                    context: {
                        season: season.season,
                    },
                })
            )
        })
    })

    return Promise.all(promises)
}