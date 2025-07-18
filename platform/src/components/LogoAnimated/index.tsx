// import { CSSProperties, useRef, useState } from "react";
// import "./logo-animated.css";

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
      
//       {/* Diamond Symbol */}
//       <path 
//         d="M60 50L75 60L60 70L45 60L60 50Z" 
//         fill="white"
//         stroke="white"
//         strokeWidth="2"
//       />
      
//       <rect
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
  text?: string; // 新增一个可选的 text 属性
};

export default function CryptoLockLogo({ style, text = "CryptoLock" }: Props) {
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
      <circle cx="60" cy="50" r="20" fill="#3C78D8" />
      
      {/* Diamond Symbol */}
      <path 
        d="M60 40L75 50L60 60L45 50L60 40Z" 
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      
      <rect
        x="56" 
        y="46" 
        width="8" 
        height="8" 
        fill="#3C78D8"
        stroke="white"
        strokeWidth="1"
        rx="1" // Optional: slight rounding of corners
      />
      
      {/* 添加的文字 */}
      <text 
        x="60" 
        y="90" 
        textAnchor="middle" 
        fill="#3C78D8"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="bold"
      >
        SecureWeb3 Wallet
      </text>
    </svg>
  );
}
