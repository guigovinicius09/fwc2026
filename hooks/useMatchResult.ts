"use client";

import { useEffect, useState } from "react";

export type MatchStatus =
  | "SCHEDULED"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "POSTPONED"
  | "CANCELLED";

export interface MatchResult {
  status: MatchStatus;
  score: {
    winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW";
    home: number | null;
    away: number | null;
  };
}

export function useMatchResult(
  footballDataId: number | undefined,
  matchDate: string,
) {
  const [result, setResult] = useState<MatchResult | null>(null);

  useEffect(() => {
    if (!footballDataId) return;

    // It will not perform the search if the game has not yet started.
    const kickoff = new Date(matchDate);
    if (Date.now() < kickoff.getTime()) return;

    async function fetchResult() {
      const res = await fetch(`/api/matches/${footballDataId}`);
      if (!res.ok) return;
      const data: MatchResult = await res.json();
      setResult(data);
    }

    fetchResult();

    // Revalidates every 60 seconds while the component is mounted.
    const interval = setInterval(fetchResult, 60_000);
    return () => clearInterval(interval);
  }, [footballDataId, matchDate]);

  return result;
}
