import Image from 'next/image';
import { MapPin, Users } from 'lucide-react';

interface StadiumCardProps {
  name: string;
  city: string;
  country: string;
  capacity: string;
  imageUrl: string;
}

export default function StadiumCard({
  name,
  city,
  country,
  capacity,
  imageUrl
}: StadiumCardProps) {
  return (
    <div className="group relative w-full bg-[#0a0f1a] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]">
      {/* Stadium Image */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
        
        {/* Country Badge */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
          {country}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 relative z-10 -mt-6">
        <h3 className="text-2xl font-fwc2026 text-white mb-4 tracking-wide">{name}</h3>
        
        <div className="flex flex-col gap-3 text-sm text-gray-400 font-noto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <MapPin size={16} className="text-blue-500" />
            </div>
            <span className="font-medium text-gray-300">{city}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Users size={16} className="text-blue-500" />
            </div>
            <span className="font-medium text-gray-300">{capacity} lugares</span>
          </div>
        </div>
      </div>
    </div>
  );
}
