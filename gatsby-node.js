const create = require("axios").create
const path = require("path")

const API_HOST = "http://ergast.com/api/f1"

const axios = create({
    baseURL: API_HOST,
})

axios.interceptors.request.use(request => {
    console.log('Starting Request', `${request.baseURL}${request.url}`)
    
    return request
})

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const promises = []

    const seasonsListResponse = await axios.get('/seasons.json', {
        params: {
            limit: 100,
        },
    })
    const seasonsList = seasonsListResponse.data.MRData.SeasonTable.Seasons.reverse()
    promises.push(
        createPage({
            path: '/',
            component: path.resolve(__dirname, 'src/layouts/Home.tsx'),
            context: {
                seasonsList,
            },
        })
    )

    seasonsList.forEach((season) => {
        promises.push(
            createPage({
                path: `/seasons/${season.season}`,
                component: path.resolve(__dirname, 'src/layouts/Season.tsx'),
                context: {
                    season,
                },
            })
        )

        promises.push(
            axios.get(`/${season.season}/drivers.json`)
                .then((response => {
                    const driversList = response.data.MRData.DriverTable.Drivers

                    return createPage({
                        path: `/seasons/${season.season}/drivers`,
                        component: path.resolve(__dirname, 'src/layouts/Drivers.tsx'),
                        context: {
                            season,
                            driversList,
                        },
                    })
                }))
        )

        promises.push(
            axios.get(`/${season.season}/constructors.json`)
                .then((response => {
                    const teamsList = response.data.MRData.ConstructorTable.Constructors

                    return createPage({
                        path: `/seasons/${season.season}/teams`,
                        component: path.resolve(__dirname, 'src/layouts/Teams.tsx'),
                        context: {
                            season,
                            teamsList,
                        },
                    })
                }))
        )
    })

    return Promise.all(promises)
}