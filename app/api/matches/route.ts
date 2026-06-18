import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.football-data.org/v4/competitions/2000/matches",
    {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY || "",
      },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: `football-data.org returned ${res.status}` },
      { status: res.status },
    );
  }

  const data = await res.json();

  const matchesMap = Object.fromEntries(
    data.matches.map((match: any) => [
      match.id,
      {
        status: match.status,
        score: {
          winner: match.score.winner,
          home: match.score.fullTime.home,
          away: match.score.fullTime.away,
        },
      },
    ]),
  );

  return NextResponse.json(matchesMap);
}
