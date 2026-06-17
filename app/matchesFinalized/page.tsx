import { Match } from "@/lib/types";

import FinalizedCard from "@/components/FinalizedCard";
import matchesData from "@/lib/data/matches.json";

export default function FinalizedMatches() {
  const allMatches = matchesData as Match[];

  // Group matches by stage
  const groupedMatches = allMatches.reduce((acc, match) => {
    if (!acc[match.stage]) {
      acc[match.stage] = [];
    }
    acc[match.stage].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  return (
    <div className="flex flex-col w-full flex-1 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full mb-16 text-center md:text-left">
        <h2 className="text-2xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md uppercase">
          Jogos Encerrados
        </h2>
        <p className="text-gray-400 font-noto text-lg max-w-2xl leading-relaxed">
          Confira os resultados finais das partidas da Copa do Mundo da FIFA
          2026™.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {Object.entries(groupedMatches).map(([groupName, matches]) => (
          <FinalizedCard key={groupName} groupName={groupName} matches={matches} />
        ))}
      </div>
    </div>
  );
}