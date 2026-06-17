"use client";

import { Match } from "@/lib/types";
import { useMatchResult } from "@/hooks/useMatchResult";

interface FinalizedCardProps {
  groupName: string;
  matches: Match[];
}

export default function FinalizedCard({ groupName, matches }: FinalizedCardProps) {
  // Assuming max 2 matches per card for the round
  const match0 = matches[0];
  const match1 = matches[1];

  const result0 = useMatchResult(match0?.footballDataId, match0?.matchDate);
  const result1 = useMatchResult(match1?.footballDataId, match1?.matchDate);

  const is0Finished = result0?.status === "FINISHED";
  const is1Finished = result1?.status === "FINISHED";

  // Hide the entire card if no match is finished
  if (!is0Finished && !is1Finished) return null;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-xl w-full">
      {/* Card Header: Displays the group name and round information */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-fwc2026 text-white tracking-wide uppercase">
          {groupName}
        </h3>
        <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Rodada 1
        </span>
      </div>

      {/* Matches Container: Holds all the match blocks for this group */}
      <div className="space-y-4">
        
        {/* Match 1 Block */}
        {is0Finished && match0 && (
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-black/30 transition-colors">
            
            {/* Team A (Home Team) Layout */}
            <div className="flex items-center gap-4 w-full sm:w-2/5 justify-start sm:justify-end">
              <span className="font-noto text-gray-300 font-medium group-hover:text-white transition-colors">{match0.teamA.name}</span>
              <div className="relative w-8 h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                <img src={match0.teamA.flagUrl} alt={match0.teamA.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Score Display Layout */}
            <div className="flex flex-col items-center justify-center min-w-[80px]">
              <div className="flex items-center gap-3 text-3xl font-fwc2026 text-white">
                <span>{result0?.score.home}</span>
                <span className="text-gray-500">-</span>
                <span>{result0?.score.away}</span>
              </div>
            </div>

            {/* Team B (Away Team) Layout */}
            <div className="flex items-center gap-4 w-full sm:w-2/5 justify-start">
              <div className="relative w-8 h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                <img src={match0.teamB.flagUrl} alt={match0.teamB.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-noto text-gray-300 font-medium group-hover:text-white transition-colors">{match0.teamB.name}</span>
            </div>
          </div>
        )}

        {/* Match 2 Block */}
        {is1Finished && match1 && (
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:bg-black/30 transition-colors">
            
            {/* Team A (Home Team) Layout */}
            <div className="flex items-center gap-4 w-full sm:w-2/5 justify-start sm:justify-end">
              <span className="font-noto text-gray-300 font-medium group-hover:text-white transition-colors">{match1.teamA.name}</span>
              <div className="relative w-8 h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                <img src={match1.teamA.flagUrl} alt={match1.teamA.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Score Display Layout */}
            <div className="flex flex-col items-center justify-center min-w-[80px]">
              <div className="flex items-center gap-3 text-3xl font-fwc2026 text-white">
                <span>{result1?.score.home}</span>
                <span className="text-gray-500">-</span>
                <span>{result1?.score.away}</span>
              </div>
            </div>

            {/* Team B (Away Team) Layout */}
            <div className="flex items-center gap-4 w-full sm:w-2/5 justify-start">
              <div className="relative w-8 h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                <img src={match1.teamB.flagUrl} alt={match1.teamB.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-noto text-gray-300 font-medium group-hover:text-white transition-colors">{match1.teamB.name}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
