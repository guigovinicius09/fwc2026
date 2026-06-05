import GroupCard from "@/components/GroupCard";

export default function Teams() {
  const groups = [
    {
      groupName: "Grupo A",
      backgroundUrl: "/images/backgrounds/groupA_bg.svg",
      teams: [
        { name: "MÉXICO", flagUrl: "/images/flags/mexico.svg" },
        { name: "ÁFRICA DO SUL", flagUrl: "/images/flags/south_africa.svg" },
        { name: "COREIA DO SUL", flagUrl: "/images/flags/south_korea.svg" },
        { name: "TCHÉQUIA", flagUrl: "/images/flags/czechia.svg" },
      ],
    },
    {
      groupName: "Grupo B",
      backgroundUrl: "/images/backgrounds/groupB_bg.svg",
      teams: [
        { name: "CANADÁ", flagUrl: "/images/flags/canada.svg" },
        {
          name: "BÓSNIA E HERZEGOVINA",
          flagUrl: "/images/flags/bosnia_and_herzegovina.svg",
        },
        { name: "QATAR", flagUrl: "/images/flags/qatar.svg" },
        { name: "SUÍÇA", flagUrl: "/images/flags/switzerland.svg" },
      ],
    },
    {
      groupName: "Grupo C",
      backgroundUrl: "/images/backgrounds/groupC_bg.svg",
      teams: [
        { name: "BRASIL", flagUrl: "/images/flags/brazil.svg" },
        { name: "MARROCOS", flagUrl: "/images/flags/morocco.svg" },
        { name: "HAITI", flagUrl: "/images/flags/haiti.svg" },
        { name: "ESCOCIA", flagUrl: "/images/flags/scotland.svg" },
      ],
    },
    {
      groupName: "Grupo D",
      backgroundUrl: "/images/backgrounds/groupD_bg.svg",
      teams: [
        { name: "Estados Unidos", flagUrl: "/images/flags/usa.svg" },
        { name: "AUSTRALIA", flagUrl: "/images/flags/australia.svg" },
        { name: "PARAGUAI", flagUrl: "/images/flags/paraguay.svg" },
        { name: "TURQUIA", flagUrl: "/images/flags/turkey.svg" },
      ],
    },
    {
      groupName: "Grupo E",
      backgroundUrl: "/images/backgrounds/groupE_bg.svg",
      teams: [
        { name: "ALEMANHA", flagUrl: "/images/flags/germany.svg" },
        { name: "CURAÇAO", flagUrl: "/images/flags/curacao.svg" },
        { name: "COSTA DO MARFIM", flagUrl: "/images/flags/cote_d_ivoire.svg" },
        { name: "EQUADOR", flagUrl: "/images/flags/ecuador.svg" },
      ],
    },
    {
      groupName: "Grupo F",
      backgroundUrl: "/images/backgrounds/groupF_bg.svg",
      teams: [
        { name: "HOLANDA", flagUrl: "/images/flags/netherlands.svg" },
        { name: "JAPÃO", flagUrl: "/images/flags/japan.svg" },
        { name: "SUÉCIA", flagUrl: "/images/flags/sweden.svg" },
        { name: "TUNÍSIA", flagUrl: "/images/flags/tunisia.svg" },
      ],
    },
    {
      groupName: "Grupo G",
      backgroundUrl: "/images/backgrounds/groupG_bg.svg",
      teams: [
        { name: "BÉLGICA", flagUrl: "/images/flags/belgium.svg" },
        { name: "EGITO", flagUrl: "/images/flags/egypt.svg" },
        { name: "IRÃ", flagUrl: "/images/flags/iran.svg" },
        { name: "NOVA ZELÂNDIA", flagUrl: "/images/flags/new_zealand.svg" },
      ],
    },
    {
      groupName: "Grupo H",
      backgroundUrl: "/images/backgrounds/groupH_bg.svg",
      teams: [
        { name: "ESPANHA", flagUrl: "/images/flags/spain.svg" },
        { name: "CABO VERDE", flagUrl: "/images/flags/cabo_verde.svg" },
        { name: "ARÁBIA SAUDITA", flagUrl: "/images/flags/saudi_arabia.svg" },
        { name: "URUGUAI", flagUrl: "/images/flags/uruguay.svg" },
      ],
    },
    {
      groupName: "Grupo I",
      backgroundUrl: "/images/backgrounds/groupI_bg.svg",
      teams: [
        { name: "FRANÇA", flagUrl: "/images/flags/france.svg" },
        { name: "SENEGAL", flagUrl: "/images/flags/senegal.svg" },
        { name: "IRAQUE", flagUrl: "/images/flags/iraq.svg" },
        { name: "NORUEGA", flagUrl: "/images/flags/norway.svg" },
      ],
    },
    {
      groupName: "Grupo J",
      backgroundUrl: "/images/backgrounds/groupJ_bg.svg",
      teams: [
        { name: "ARGENTINA", flagUrl: "/images/flags/argentina.svg" },
        { name: "ARGÉLIA", flagUrl: "/images/flags/algeria.svg" },
        { name: "ÁUSTRIA", flagUrl: "/images/flags/austria.svg" },
        { name: "JORDÂNIA", flagUrl: "/images/flags/jordan.svg" },
      ],
    },
    {
      groupName: "Grupo K",
      backgroundUrl: "/images/backgrounds/groupK_bg.svg",
      teams: [
        { name: "PORTUGAL", flagUrl: "/images/flags/portugal.svg" },
        { name: "RD CONGO", flagUrl: "/images/flags/congo_dr.svg" },
        { name: "UZBEQUISTÃO", flagUrl: "/images/flags/uzbekistan.svg" },
        { name: "COLÔMBIA", flagUrl: "/images/flags/colombia.svg" },
      ],
    },
    {
      groupName: "Grupo L",
      backgroundUrl: "/images/backgrounds/groupL_bg.svg",
      teams: [
        { name: "INGLATERRA", flagUrl: "/images/flags/england.svg" },
        { name: "CROÁCIA", flagUrl: "/images/flags/croatia.svg" },
        { name: "GANA", flagUrl: "/images/flags/ghana.svg" },
        { name: "PANAMÁ", flagUrl: "/images/flags/panama.svg" },
      ],
    },
  ];

  return (
    <div className="w-full flex-1 py-16 px-6 lg:px-12">
      {/* Título e Texto */}
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md">
          GRUPOS E SELEÇÕES
        </h2>
        <p className="text-gray-400 font-noto text-lg max-w-2xl leading-relaxed">
          Conheça as 48 seleções divididas em 12 grupos. As equipes batalham por
          uma vaga rumo à glória eterna na Copa do Mundo da FIFA 2026™.
        </p>
      </div>

      {/* Grid de Cards dos Grupos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {groups.map((group, index) => (
          <GroupCard
            key={index}
            groupName={group.groupName}
            backgroundUrl={group.backgroundUrl}
            teams={group.teams}
          />
        ))}
      </div>
    </div>
  );
}
