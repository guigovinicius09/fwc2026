"use client";

import { useEffect, useState } from "react";

export type MatchStatus =
  | "TIMED"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "POSTPONED"
  | "CANCELLED";

export interface MatchResult {
  status: MatchStatus;
  score: {
    winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW" | null;
    home: number | null;
    away: number | null;
  };
}

export type MatchesResultsMap = Record<number, MatchResult>;

export function useMatchesResults() {
  const [results, setResults] = useState<MatchesResultsMap>({});

  useEffect(() => {
    async function fetchResults() {
      const res = await fetch("/api/matches");

      if (!res.ok) return;

      const data = await res.json();

      setResults(data);
    }

    fetchResults();

    const interval = setInterval(fetchResults, 60_000);

    return () => clearInterval(interval);
  }, []);

  return results;
}
