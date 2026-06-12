import { NextResponse } from "next/server";

const WC_2026_ID = "2000"; // Competition ID at football-data.org

export async function GET() {
  const res = await fetch(
    `https://api.football-data.org/v4/competitions/${WC_2026_ID}/matches`,
    {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY || "",
      },
      next: {
        revalidate: 60, // 60sec cache for this endpoint
      },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: `football-data.org returned ${res.status}` },
      { status: res.status },
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}
