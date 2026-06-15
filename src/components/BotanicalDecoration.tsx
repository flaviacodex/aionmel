import React from 'react';

interface BotanicalProps {
  className?: string;
  color?: string;
}

export const BotanicalBranch: React.FC<BotanicalProps> = ({ 
  className = "w-24 h-24", 
  color = "currentColor" 
}) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* A delicate, hand-drawn vector branch with leaves & tiny wildflower buds */}
      <path 
        d="M50 95 C48 70 43 45 10 30" 
        stroke={color} 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M50 95 C52 70 57 45 90 30" 
        stroke={color} 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M50 95 C50 65 50 35 50 5" 
        stroke={color} 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      
      {/* Left leaves */}
      <path 
        d="M48 80 C38 78 32 70 36 64 C42 66 45 72 49 76" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />
      <path 
        d="M47 62 C34 58 28 48 34 42 C40 44 43 51 48 57" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />
      <path 
        d="M48 44 C36 38 32 26 39 21 C44 24 46 32 49 39" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />
      <path 
        d="M49 25 C40 18 38 8 44 5 C48 9 49 16 50 21" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />

      {/* Right leaves */}
      <path 
        d="M52 80 C62 78 68 70 64 64 C58 66 55 72 51 76" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />
      <path 
        d="M53 62 C66 58 72 48 66 42 C60 44 57 51 52 57" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />
      <path 
        d="M52 44 C64 38 68 26 61 21 C56 24 54 32 51 39" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />
      <path 
        d="M51 25 C60 18 62 8 56 5 C52 9 51 16 50 21" 
        stroke={color} 
        strokeWidth="0.8" 
        fill={`${color}11`} 
        strokeLinejoin="round" 
      />

      {/* Tiny wildflowers */}
      <circle cx="34" cy="42" r="1.5" fill={color} />
      <circle cx="66" cy="42" r="1.5" fill={color} />
      <circle cx="39" cy="21" r="1.5" fill={color} />
      <circle cx="61" cy="21" r="1.5" fill={color} />
      <circle cx="50" cy="5" r="2" fill={color} />
    </svg>
  );
};

export const BotanicalSingleLeaf: React.FC<BotanicalProps> = ({ 
  className = "w-12 h-12", 
  color = "currentColor" 
}) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      <path 
        d="M15 85 Q50 35 85 15" 
        stroke={color} 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <path 
        d="M15 85 C35 70 50 50 85 15 C65 30 40 45 15 85" 
        fill={`${color}11`} 
        stroke={color} 
        strokeWidth="1" 
        strokeLinejoin="round" 
      />
      <path d="M35 62 C45 58 55 52 65 44" stroke={color} strokeWidth="0.8" />
      <path d="M45 52 C52 48 60 42 68 34" stroke={color} strokeWidth="0.8" />
    </svg>
  );
};

export const BotanicalLogoMark: React.FC<BotanicalProps> = ({ 
  className = "w-32 h-32", 
  color = "currentColor" 
}) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Sophisticated fine gold circle border with gaps */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1.2" strokeDasharray="16 6" className="opacity-80" />
      <circle cx="60" cy="60" r="50" stroke={color} strokeWidth="0.6" className="opacity-40" />
      
      {/* Central botanical artwork */}
      <g transform="translate(10, 10)">
        <path 
          d="M50 90 C50 65 50 35 50 15" 
          stroke={color} 
          strokeWidth="1.2" 
          strokeLinecap="round" 
        />
        {/* Left leaves */}
        <path d="M49 70 C38 68 32 60 36 54 C42 56 45 62 49 68" stroke={color} strokeWidth="0.8" fill={`${color}11`} />
        <path d="M49 52 C34 48 28 38 34 32 C40 34 43 41 49 47" stroke={color} strokeWidth="0.8" fill={`${color}11`} />
        <path d="M49 34 C36 28 32 16 39 11 C44 14 46 22 49 29" stroke={color} strokeWidth="0.8" fill={`${color}11`} />
        
        {/* Right leaves */}
        <path d="M51 70 C62 68 68 60 64 54 C58 56 55 62 51 68" stroke={color} strokeWidth="0.8" fill={`${color}11`} />
        <path d="M51 52 C66 48 72 38 66 32 C60 34 57 41 51 47" stroke={color} strokeWidth="0.8" fill={`${color}11`} />
        <path d="M51 34 C64 28 68 16 61 11 C56 14 54 22 51 29" stroke={color} strokeWidth="0.8" fill={`${color}11`} />
      </g>
    </svg>
  );
};

export const AionBrandLogo: React.FC<BotanicalProps> = ({
  className = "w-16 h-16",
  color = "#C9A04B"
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Recreated geometry of the AION logo from the shared whatsapp image:
          Two intersecting offset squares/squares rotated 45 degrees (diamonds)
          forming a premium heraldic symbol */}
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Top Diamond */}
        <path d="M50 15 L75 40 L50 65 L25 40 Z" />
        {/* Intersecting Lower Diamond offset */}
        <path d="M50 35 L75 60 L50 85 L25 60 Z" />
        
        {/* Infill geometric line crossings inside */}
        <path d="M50 15 L50 85" strokeWidth="1" className="opacity-60" />
        <path d="M25 40 L75 60" strokeWidth="1" className="opacity-40" />
        <path d="M25 60 L75 40" strokeWidth="1" className="opacity-40" />
      </g>
    </svg>
  );
};

export const AionBeeIcon: React.FC<BotanicalProps> = ({
  className = "w-8 h-8",
  color = "#C9A04B"
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sophisticated fine gold circle border with gaps */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1.2" strokeDasharray="16 6" className="opacity-80" />
      <circle cx="60" cy="60" r="50" stroke={color} strokeWidth="0.6" className="opacity-40" />

      {/* Central bee vector scaled and centered perfectly in the circular dial */}
      <g transform="translate(22, 19) scale(0.76)" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Antennae - elegant, long sweeping outward curves starting from the head crown */}
        <path d="M 45 22 C 43 14, 38 10, 30 14" />
        <path d="M 54 22 C 55 14, 62 10, 70 14" />
        
        {/* Head - organic rounded dome with eye lobes on the sides and curved bottom boundary */}
        <path d="M 43 32 C 39 32, 38 27, 43 25 C 45 23, 47 22, 50 22 C 53 22, 55 23, 57 25 C 62 27, 61 32, 57 32 C 53 34, 47 34, 43 32 Z" />

        {/* Neck collar - delicate double dynamic curved step under the head */}
        <path d="M 42 36 Q 50 39 58 36" />

        {/* Outer Upper Wings - premium looping line-art designed with perfect mathematical symmetry and overlapping control points */}
        <path d="M 50 45 C 37 34, 16 29, 4 38 C -6 46, -6 58, 10 61 C 23 63, 38 53, 50 45" />
        <path d="M 50 45 C 63 34, 84 29, 96 38 C 106 46, 106 58, 90 61 C 77 63, 62 53, 50 45" />

        {/* Inner Lower Wings - beautifully nested symmetrical drops tucked beneath the primary wings */}
        <path d="M 26 58 C 15 60, 14 71, 26 71 C 37 71, 41 62, 44 56" />
        <path d="M 74 58 C 85 60, 86 71, 74 71 C 63 71, 59 62, 56 56" />

        {/* Abdomen Outer Border - elegant curving tapering shield shape */}
        <path d="M 36 57 C 35 71, 34 83, 50 94 C 66 83, 65 71, 64 57" />

        {/* Abdomen Inner Border - concentric parallel support shield line to reinforce depth */}
        <path d="M 40 57 C 39 67, 39 79, 50 89 C 61 79, 61 67, 60 57" strokeWidth="1.8" />

        {/* Abdomen Symmetrical Stripes - 4 horizontal smile-like curves calibrated for perfect spacing */}
        <path d="M 40.5 59 Q 50 62 59.5 59" strokeWidth="2.0" />
        <path d="M 40.5 67 Q 50 70 59.5 67" strokeWidth="2.0" />
        <path d="M 42.5 75 Q 50 78 57.5 75" strokeWidth="1.8" />
        <path d="M 45.5 83 Q 50 85 54.5 83" strokeWidth="1.5" />
      </g>
    </svg>
  );
};
