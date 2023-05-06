interface RacePageProps {
    params: unknown
}

export default function RacePage({ params }: RacePageProps){
    return (
        <h2>{JSON.stringify(params)}</h2>
    )
}