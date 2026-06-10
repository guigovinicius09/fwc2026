import { Match } from "@/lib/types";

import MatchCard from "@/components/MatchCard";
import matchesData from "@/lib/data/matches.json";

export default function Matches() {
  const matches = matchesData as Match[];
  return (
    <div className="w-full flex-1 py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md uppercase">
          Calendário de Jogos
        </h2>
        <p className="text-gray-400 font-noto text-lg max-w-2xl leading-relaxed">
          Acompanhe as datas, horários e locais de todas as partidas da Copa do
          Mundo da FIFA 2026™.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {matches.map((match) => (
          <MatchCard key={match.matchNumber} {...match} />
        ))}

        {/* Placeholder for remaining matches */}
        <div className="p-8 border border-dashed border-white/20 rounded-xl text-center text-white font-noto">
          Mais partidas serão adicionadas nos próximos dias.
        </div>
      </div>
    </div>
  );
}

{
  /*Old code os matches array*/
}
// const matches = [
//   {
//     matchNumber: 1,
//     stage: "Fase de Grupos - Grupo A",
//     date: "11 de Junho, 2026",
//     time: "15:00 AMT",
//     stadium: "Estadio Azteca",
//     city: "Cidade do México, MEX",
//     teamA: { name: "MÉXICO", flagUrl: "/images/flags/mexico.svg" },
//     teamB: {
//       name: "ÁFRICA DO SUL",
//       flagUrl: "/images/flags/south_africa.svg",
//     },
//     status: "upcoming" as const,
//   },
//   {
//     matchNumber: 2,
//     stage: "Fase de Grupos - Grupo A",
//     date: "11 de Junho, 2026",
//     time: "22:00 AMT",
//     stadium: "Estadio Akron",
//     city: "Zapopan, MEX",
//     teamA: {
//       name: "COREIA DO SUL",
//       flagUrl: "/images/flags/south_korea.svg",
//     },
//     teamB: { name: "TCHÉQUIA", flagUrl: "/images/flags/czechia.svg" },
//     status: "upcoming" as const,
//   },
//   {
//     matchNumber: 3,
//     stage: "Fase de Grupos - Grupo B",
//     date: "12 de Junho, 2026",
//     time: "15:00 AMT",
//     stadium: "BMO Field",
//     city: "Toronto, CAN",
//     teamA: {
//       name: "CANADÁ",
//       flagUrl: "/images/flags/canada.svg",
//     },
//     teamB: {
//       name: "BÓSNIA E HERZEGOVINA",
//       flagUrl: "/images/flags/bosnia_and_herzegovina.svg",
//     },
//     status: "upcoming" as const,
//   },
// ];
