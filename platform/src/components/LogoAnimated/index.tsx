// import { CSSProperties, useRef, useState } from "react";

// type Props = {
//   style?: CSSProperties;
// };

// export default function CryptoLockLogo({ style }: Props) {
//   const [increment, setIncrement] = useState(0);

//   return (
//     <svg
//       key={increment}
//       style={style}
//       viewBox="0 0 120 120"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       onClick={() => setIncrement(increment + 1)}
//     >
//       {/* Blue Crypto Circle */}
//       <circle cx="60" cy="60" r="20" fill="#3C78D8" />
      
//       {/* Abstract Crypto Symbol */}
//     <path 
//         d="M60 55L70 60L60 65L50 60L60 55Z" 
//         fill="white"
//         stroke="white"
//         strokeWidth="2"
//       />

//         <circle 
//         cx="60" 
//         cy="60" 
//         r="7" 
//         fill="#3C78D8"
//         stroke="white"
//         strokeWidth="1"
//       />
      
//      <rect
//         x="56" 
//         y="56" 
//         width="8" 
//         height="8" 
//         fill="#3C78D8"
//         stroke="white"
//         strokeWidth="1"
//         rx="1" // Optional: slight rounding of corners
//       />
//     </svg>
//   );
// }
import { CSSProperties, useRef, useState } from "react";
import "./logo-animated.css";

type Props = {
  style?: CSSProperties;
};

export default function CryptoLockLogo({ style }: Props) {
  const [increment, setIncrement] = useState(0);

  return (
    <svg
      key={increment}
      style={style}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setIncrement(increment + 1)}
    >
      {/* Blue Crypto Circle */}
      <circle cx="60" cy="60" r="50" fill="#3C78D8" />
      
      {/* Diamond Symbol */}
      <path 
        d="M60 50L75 60L60 70L45 60L60 50Z" 
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      
      {/* Small Inner Circle (centered within diamond) */}
      <circle 
        cx="60" 
        cy="60" 
        r="7" 
        fill="#3C78D8"
        stroke="white"
        strokeWidth="1"
      />
      
      {/* Lock Symbol (top right corner) */}
      <g transform="translate(70 20)">
        <rect x="10" y="20" width="30" height="25" rx="4" fill="#1A237E" />
        <rect x="20" y="10" width="10" height="10" fill="#1A237E" />
        <circle cx="25" cy="32" r="5" fill="#3C78D8" />
        <path 
          d="M23 30h4v4h-4z" 
          fill="#1A237E" 
        />
      </g>
    </svg>
  );
}
