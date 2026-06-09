"use client";

import Link from "next/link";
import { Home, Users, Calendar, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5 shadow-lg" />

      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {isOpen && (
          <nav className="text-white md:hidden absolute top-20 right-4 bg-[#0a0f1a]/95 backdrop-blur-md border-b border-white/5">
            <div className="flex flex-col p-6 gap-4">
              <a href="/">Início</a>
              <a href="/teams">Grupos e Seleções</a>
              <a href="/matches">Partidas</a>
              <a href="/stadiums">Estádios</a>
            </div>
          </nav>
        )}
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-fwc2026 text-white tracking-wider group-hover:text-blue-400 transition-colors duration-300">
            FIFA World Cup 2026
          </span>
          <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
        </Link>

        {/* Main Navigation*/}
        <nav className="hidden md:flex items-center gap-8 font-noto text-sm">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group">
            <Home
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 group-hover:after:w-full after:transition-all after:duration-300">
              Início
            </span>
          </Link>

          <Link
            href="/teams"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group">
            <Users
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 group-hover:after:w-full after:transition-all after:duration-300">
              Grupos e Seleções
            </span>
          </Link>

          <Link
            href="/matches"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group">
            <Calendar
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 group-hover:after:w-full after:transition-all after:duration-300">
              Partidas
            </span>
          </Link>

          <Link
            href="/stadiums"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group">
            <MapPin
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 group-hover:after:w-full after:transition-all after:duration-300">
              Estádios
            </span>
          </Link>
        </nav>

        {/* Menu Mobile */}
        <div className="flex items-center gap-4">
          {/* Buttton (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
