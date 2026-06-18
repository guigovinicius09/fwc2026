"use client";

import Link from "next/link";
import { Match } from "@/lib/types";

import MatchCard from "@/components/MatchCard";
import matchesData from "@/lib/data/matches.json";
import { useMatchesResults } from "@/hooks/useMatchesResults";

export default function Matches() {
  const matches = matchesData as Match[];
  const results = useMatchesResults();

  const visibleMatches = matches.filter((match) => {
    const result = results[match.footballDataId];

    // Enquanto não carregou os dados da API,
    // mantém a partida visível.
    if (!result) return true;

    return (
      result.status === "TIMED" ||
      result.status === "IN_PLAY" ||
      result.status === "PAUSED"
    );
  });

  return (
    <div className="w-full flex-1 py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto mb-16 text-center md:text-left">
        <h2 className="text-2xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md uppercase">
          Calendário de Jogos
        </h2>
        <p className="text-gray-400 font-noto text-lg max-w-2xl leading-relaxed">
          Acompanhe as datas, horários e locais de todas as partidas da Copa do
          Mundo da FIFA 2026™.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <Link
          href="/matchesFinalized"
          className="group relative flex items-center justify-center p-6 sm:p-8 bg-white/5 hover:bg-white/10 border border-dashed border-white/20 hover:border-solid hover:border-blue-500/50 rounded-xl text-center text-white font-fwc2026 text-xl tracking-wide transition-all duration-300 backdrop-blur-sm overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative flex items-center gap-3 drop-shadow-md">
            <span className="font-noto font-semibold uppercase text-lg">
              Confira aqui os jogos encerrados!
            </span>
          </span>
        </Link>

        {visibleMatches.map((match) => (
          <MatchCard
            key={match.matchNumber}
            {...match}
            result={results[match.footballDataId]}
          />
        ))}
      </div>
    </div>
  );
}
