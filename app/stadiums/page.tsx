import StadiumCard from "@/components/StadiumCard";

export default function Stadiums() {
  const stadiums = [
    {
      name: "Estadio Azteca",
      city: "Cidade do México",
      country: "México",
      capacity: "83.264",
      imageUrl: "/images/stadiums/estadio_azteca.png",
    },
    {
      name: "Estádio BBVA",
      city: "Guadalupe-Monterrey",
      country: "México",
      capacity: "53.529",
      imageUrl: "/images/stadiums/estadio_bbva.png",
    },
    {
      name: "Estádio Akron",
      city: "Zapopan-Guadalajara",
      country: "México",
      capacity: "46.355",
      imageUrl: "/images/stadiums/estadio_akron.png",
    },
    {
      name: "BMO Field",
      city: "Toronto",
      country: "Canadá",
      capacity: "45.736",
      imageUrl: "/images/stadiums/arrowhead.svg",
    },
    {
      name: "BC Place",
      city: "Vancouver",
      country: "Canadá",
      capacity: "54.500",
      imageUrl: "/images/stadiums/sofi.svg",
    },
    {
      name: "MetLife Stadium",
      city: "Nova York/Nova Jersey",
      country: "EUA",
      capacity: "82.500",
      imageUrl: "/images/stadiums/metlife.webp",
    },
    {
      name: "AT&T Stadium",
      city: "Dallas",
      country: "EUA",
      capacity: "80.000",
      imageUrl: "/images/stadiums/bcplace.svg",
    },
    {
      name: "Mercedes-Benz Stadium",
      city: "Atlanta",
      country: "EUA",
      capacity: "71.000",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "Gillette Stadium",
      city: "Boston",
      country: "EUA",
      capacity: "65.878",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "NRG Stadium",
      city: "Houston",
      country: "EUA",
      capacity: "72.220",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "SoFi Stadium",
      city: "Los Angeles",
      country: "EUA",
      capacity: "70.000",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "Arrowhead Stadium",
      city: "Kansas City",
      country: "EUA",
      capacity: "76.416",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "Hard Rock Stadium",
      city: "Miami",
      country: "EUA",
      capacity: "65.326",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "Lincoln Financial Field",
      city: "Filadélfia",
      country: "EUA",
      capacity: "67.594",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "Levi's Stadium",
      city: "Baía de São Francisco",
      country: "EUA",
      capacity: "68.500",
      imageUrl: "/images/stadiums/gillette.svg",
    },
    {
      name: "Lumen Field",
      city: "Seattle",
      country: "EUA",
      capacity: "68.740",
      imageUrl: "/images/stadiums/gillette.svg",
    },
  ];

  return (
    <div className="w-full flex-1 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md uppercase">
          Cidades-Sede e Estádios
        </h2>
        <p className="text-gray-400 font-noto text-lg max-w-2xl leading-relaxed">
          Explore os palcos que receberão as maiores seleções do planeta nos
          Estados Unidos, México e Canadá.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {stadiums.map((stadium, index) => (
          <StadiumCard key={index} {...stadium} />
        ))}
      </div>
    </div>
  );
}
