import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const res = await fetch(`https://api.football-data.org/v4/matches/${id}`, {
    headers: {
      "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY || "",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: `football-data.org returned ${res.status}` },
      { status: res.status },
    );
  }

  const data = await res.json();

  return NextResponse.json({
    id: data.id,
    status: data.status,
    score: {
      winner: data.score.winner,
      home: data.score.fullTime.home,
      away: data.score.fullTime.away,
    },
  });
}
