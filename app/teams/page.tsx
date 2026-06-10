import GroupCard from "@/components/GroupCard";
import groupsData from "@/lib/data/groups.json";

export default function Teams() {
  return (
    <div className="w-full flex-1 py-16 px-6 lg:px-12">
      {/* Título e Texto */}
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md">
          GRUPOS E SELEÇÕES
        </h2>
        <p className="text-gray-400 font-noto text-lg max-w-2xl leading-relaxed">
          Conheça as 48 seleções divididas em 12 grupos. As equipes batalham por
          uma vaga rumo à glória eterna na Copa do Mundo da FIFA 2026™.
        </p>
      </div>

      {/* Grid de Cards dos Grupos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {groupsData.map((group) => (
          <GroupCard
            key={group.groupName}
            groupName={group.groupName}
            backgroundUrl={group.backgroundUrl}
            teams={group.teams}
          />
        ))}
      </div>
    </div>
  );
}
