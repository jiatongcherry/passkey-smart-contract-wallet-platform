import { CSSProperties, useRef, useState } from "react";

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
      <circle cx="60" cy="40" r="20" fill="#3C78D8" />
      
      {/* Abstract Crypto Symbol */}
      <path 
        d="M60 30L75 40L60 50L45 40L60 30Z" 
        fill="white"
        stroke="white"
        strokeWidth="2"
      />

        <circle 
        cx="60" 
        cy="40" 
        r="7" 
        fill="#3C78D8"
        stroke="white"
        strokeWidth="1"
      />
      
     <rect
        x="56" 
        y="36" 
        width="8" 
        height="8" 
        fill="#3C78D8"
        stroke="white"
        strokeWidth="1"
        rx="1" // Optional: slight rounding of corners
      />
    </svg>
  );
}
