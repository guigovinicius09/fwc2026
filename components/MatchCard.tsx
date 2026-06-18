"use client";

import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import type { Match } from "@/lib/types";
import type { MatchResult } from "@/hooks/useMatchesResults";

interface MatchCardProps extends Match {
  result?: MatchResult;
}

function formatMatchDate(matchDate: string): string {
  return new Date(matchDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatMatchTime(matchDate: string): string {
  const date = new Date(matchDate);

  const time = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const timezone =
    new Intl.DateTimeFormat("pt-BR", {
      timeZoneName: "short",
    })
      .formatToParts(date)
      .find((p) => p.type === "timeZoneName")?.value ?? "";

  return `${time} ${timezone}`;
}

export default function MatchCard({
  stage,
  matchDate,
  stadium,
  city,
  teamA,
  teamB,
  result,
}: MatchCardProps) {
  const isLive = result?.status === "IN_PLAY" || result?.status === "PAUSED";

  const isFinished = result?.status === "FINISHED";

  const showScore = isLive || isFinished;

  return (
    <div className="relative w-full bg-[#0a0f1a] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/10 text-xs text-gray-400 font-noto uppercase tracking-wider">
        <span>{stage}</span>

        {isLive && (
          <span className="text-red-500 font-bold flex items-center gap-1 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            AO VIVO
          </span>
        )}

        {isFinished && <span>ENCERRADO</span>}
      </div>

      <div className="p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Teams & Score */}
        <div className="flex-1 w-full flex items-center justify-center sm:justify-between gap-4">
          {/* Team A */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="relative w-16 h-11 shrink-0 border border-white/20 bg-gray-800">
              <Image
                src={teamA.flagUrl}
                alt={teamA.name}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-white text-sm sm:text-lg tracking-wide max-w-[110px] min-h-[40px] text-center leading-tight break-words flex items-center justify-center md:font-fwc2026">
              {teamA.name}
            </span>
          </div>

          {/* VS or Score */}
          <div className="flex flex-col items-center justify-center min-w-[80px]">
            {showScore ? (
              <div className="flex items-center gap-3 text-3xl font-fwc2026 text-white">
                <span>{result?.score.home}</span>
                <span className="text-gray-500">-</span>
                <span>{result?.score.away}</span>
              </div>
            ) : (
              <span className="text-gray-500 font-fwc2026 text-xl">VS</span>
            )}

            <span className="text-blue-400 text-xs font-bold mt-1">
              {formatMatchTime(matchDate)}
            </span>
          </div>

          {/* Team B */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="relative w-16 h-11 shrink-0 border border-white/20 bg-gray-800">
              <Image
                src={teamB.flagUrl}
                alt={teamB.name}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-white text-sm sm:text-lg tracking-wide max-w-[110px] min-h-[40px] text-center leading-tight break-words flex items-center justify-center md:font-fwc2026">
              {teamB.name}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-20 bg-white/10"></div>

        {/* Location & Date */}
        <div className="flex flex-row md:flex-col gap-6 md:gap-2 min-w-[200px] text-sm text-gray-400 font-noto">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            <span>{formatMatchDate(matchDate)}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-500" />
            <span>{stadium}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4"></span>
            <span className="text-xs text-gray-500">{city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
