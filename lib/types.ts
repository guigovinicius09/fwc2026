export interface MatchTeam {
  name: string;
  flagUrl: string;
  score?: number;
}

export interface Match {
  matchNumber: number;
  stage: string;
  matchDate: string; // ISO UTC "2026-06-11T19:00:00Z"
  stadium: string;
  city: string;
  teamA: MatchTeam;
  teamB: MatchTeam;
  status?: "upcoming" | "live" | "finished";
}
