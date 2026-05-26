import Link from 'next/link';
import { Globe } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`relative w-full overflow-hidden bg-[#0a0f1a] text-gray-300 py-16 ${className}`}>
      
      {/* Efeitos de iluminação de fundo (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Seção da Marca */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-fwc2026 text-white tracking-wider group-hover:text-blue-400 transition-colors duration-300">
              FIFA 26
            </span>
            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
          </Link>
          <p className="text-sm text-gray-400 font-noto max-w-xs text-center md:text-left leading-relaxed">
            Explorando o maior torneio do mundo em uma experiência visual e interativa.
          </p>
        </div>

        {/* Ícones Sociais */}
        <div className="flex space-x-3">
          <a href="#" aria-label="Website" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500 hover:border-blue-400 hover:text-white text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Globe size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500 hover:border-blue-400 hover:text-white text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500 hover:border-blue-400 hover:text-white text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Github" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500 hover:border-blue-400 hover:text-white text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>

      {/* Linha Divisória e Copyright */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 px-6 lg:px-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-noto">
          <p>© {new Date().getFullYear()} Powered by WarlockTech-IX - FIFA World Cup 2026.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Feito com <span className="text-blue-500 px-1">Next.js & Tailwind</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
