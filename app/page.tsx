import Link from "next/link";
import { ArrowRight, Users, Calendar, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center py-16 px-6 lg:px-12">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mt-10 md:mt-20 mb-20">
        <h1 className="font-fwc2026 tracking-widest mb-8 flex flex-col items-center gap-2">
          <span className="text-3xl md:text-4xl text-gray-300 drop-shadow-md">
            FIFA WORLD CUP
          </span>
          <span className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            WE ARE 26
          </span>
        </h1>
        <p className="text-gray-300 font-noto text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
          Explore as seleções, acompanhe os jogos e descubra as cidades e
          estádios que sediarão o maior torneio de futebol do planeta.
        </p>

        {/* Call to Action Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/matches"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1">
            <Calendar size={20} />
            <span className="font-noto tracking-wide uppercase">Ver Jogos</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/stadiums"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
            <MapPin size={20} />
            <span className="font-noto tracking-wide uppercase">
              Cidades Sede
            </span>
          </Link>
        </div>
      </div>

      {/* Feature Cards / Fast Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-auto">
        <Link
          href="/teams"
          className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 backdrop-blur-sm">
          <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="text-blue-400" size={32} />
          </div>
          <h3 className="text-2xl font-fwc2026 text-white mb-3 tracking-wide">
            Seleções
          </h3>
          <p className="text-gray-400 font-noto">
            Conheça as 48 equipes batalhando pela glória mundial, divididas em
            12 grupos.
          </p>
        </Link>

        <Link
          href="/matches"
          className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 backdrop-blur-sm">
          <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Calendar className="text-blue-400" size={32} />
          </div>
          <h3 className="text-2xl font-fwc2026 text-white mb-3 tracking-wide">
            Jogos
          </h3>
          <p className="text-gray-400 font-noto">
            Acompanhe a tabela completa de partidas, desde a fase de grupos até
            a grande final.
          </p>
        </Link>

        <Link
          href="/stadiums"
          className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 backdrop-blur-sm">
          <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="text-blue-400" size={32} />
          </div>
          <h3 className="text-2xl font-fwc2026 text-white mb-3 tracking-wide">
            Estádios
          </h3>
          <p className="text-gray-400 font-noto">
            Descubra os estádios e cidades sede que receberão os jogos no
            Canadá, México e EUA.
          </p>
        </Link>
      </div>
    </div>
  );
}
