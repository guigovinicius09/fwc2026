"use client";

import { Match } from "@/lib/types";
import type { MatchResult } from "@/hooks/useMatchesResults";

interface FinalizedMatch extends Match {
  result?: MatchResult;
}

interface FinalizedCardProps {
  groupName: string;
  matches: FinalizedMatch[];
}

export default function FinalizedCard({
  groupName,
  matches,
}: FinalizedCardProps) {
  const match0 = matches[0];
  const match1 = matches[1];

  const result0 = match0?.result;
  const result1 = match1?.result;

  return (
    <div className="bg-white/5 border border-white/10 rounded-tl-4xl rounded-br-4xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-xl w-full">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-noto text-white tracking-wide uppercase">
          {groupName}
        </h3>
        <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Rodada 1
        </span>
      </div>

      <div className="space-y-4">
        {/* Match 1 */}
        {match0 && (
          <div className="bg-black/20 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-black/30 transition-colors">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
              <div className="flex items-center justify-end gap-2 min-w-0">
                <span className="font-noto text-gray-300 font-medium text-xs sm:text-sm truncate text-right md:text-xl">
                  {match0.teamA.name}
                </span>
                <div className="relative w-7 h-5 sm:w-8 sm:h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={match0.teamA.flagUrl}
                    alt={match0.teamA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 px-1 sm:px-2 flex-shrink-0">
                <span className="text-lg sm:text-2xl font-fwc2026 text-white">
                  {result0?.score.home}
                </span>
                <span className="text-gray-500 text-sm">-</span>
                <span className="text-lg sm:text-2xl font-fwc2026 text-white">
                  {result0?.score.away}
                </span>
              </div>

              <div className="flex items-center gap-2 min-w-0">
                <div className="relative w-7 h-5 sm:w-8 sm:h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={match0.teamB.flagUrl}
                    alt={match0.teamB.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-noto text-gray-300 font-medium text-xs sm:text-sm truncate md:text-xl">
                  {match0.teamB.name}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Match 2 */}
        {match1 && (
          <div className="bg-black/20 rounded-xl p-3 sm:p-4 border border-white/5 hover:bg-black/30 transition-colors">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
              <div className="flex items-center justify-end gap-2 min-w-0">
                <span className="font-noto text-gray-300 font-medium text-xs sm:text-sm truncate text-right md:text-xl">
                  {match1.teamA.name}
                </span>
                <div className="relative w-7 h-5 sm:w-8 sm:h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={match1.teamA.flagUrl}
                    alt={match1.teamA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 px-1 sm:px-2 flex-shrink-0">
                <span className="text-lg sm:text-2xl font-fwc2026 text-white">
                  {result1?.score.home}
                </span>
                <span className="text-gray-500 text-sm">-</span>
                <span className="text-lg sm:text-2xl font-fwc2026 text-white">
                  {result1?.score.away}
                </span>
              </div>

              <div className="flex items-center gap-2 min-w-0">
                <div className="relative w-7 h-5 sm:w-8 sm:h-6 bg-white/10 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={match1.teamB.flagUrl}
                    alt={match1.teamB.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-noto text-gray-300 font-medium text-xs sm:text-sm truncate md:text-xl">
                  {match1.teamB.name}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
