import Link from "next/link";

interface SeasonCardProps {
  season: string;
}

export default function SeasonCard({ season }: SeasonCardProps) {
  return (
    <Link href={`/seasons/${season}`}>
      <div className="card bg-base-100 shadow-xl hover:bg-neutral-focus">
        <div className="card-body">
          <h2 className="card-title">{season}</h2>
        </div>
      </div>
    </Link>
  );
}
