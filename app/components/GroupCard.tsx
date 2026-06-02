import Image from 'next/image';

interface Team {
  name: string;
  flagUrl: string;
}

interface GroupCardProps {
  groupName: string;
  backgroundUrl: string;
  teams: Team[];
}

export default function GroupCard({ groupName, backgroundUrl, teams }: GroupCardProps) {
  return (
    <div className="relative w-full aspect-[4/5] bg-gray-200 border-2 border-[#1a1a1a] overflow-hidden group transition-transform duration-300 hover:scale-[1.02] shadow-xl">
      
      {/* Card background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundUrl} 
          alt={`Background ${groupName}`}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 w-full h-full p-4 sm:p-6 flex flex-col justify-between">
        
        {/* Group name */}
        <div>
          <div className="bg-[#1a1a1a] text-white px-5 py-1.5 rounded-full inline-flex items-center justify-center">
            <span className="font-fwc2026 text-base sm:text-lg tracking-wide uppercase">
              {groupName}
            </span>
          </div>
        </div>

        {/* Teams list */}
        <div className="flex flex-col gap-2.5 mt-auto">
          {teams.map((team, index) => (
            <div 
              key={index} 
              className="flex items-center w-full h-10 sm:h-12 bg-white border-2 border-[#1a1a1a]"
            >
              {/* Team flag */}
              <div className="relative w-12 sm:w-16 h-full border-r-2 border-[#1a1a1a] bg-gray-300 flex-shrink-0">
                <Image 
                  src={team.flagUrl} 
                  alt={team.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Team name */}
              <div className="flex-1 flex items-center px-2">
                <span className="sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-widest truncate">
                  {team.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
