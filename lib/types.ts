export interface MatchTeam {
  name: string;
  flagUrl: string;
  score?: number;
}

export interface Match {
  matchNumber: number;
  stage: string;
  date: string;
  time: string;
  stadium: string;
  city: string;
  teamA: MatchTeam;
  teamB: MatchTeam;
  status?: "upcoming" | "live" | "finished";
}
