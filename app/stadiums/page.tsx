import StadiumCard from "@/components/StadiumCard";
import stadiumsData from "@/lib/data/stadiums.json";

export default function Stadiums() {
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
        {stadiumsData.map((stadium, index) => (
          <StadiumCard key={index} {...stadium} />
        ))}
      </div>
    </div>
  );
}
