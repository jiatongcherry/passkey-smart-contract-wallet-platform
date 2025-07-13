// "use client";

// import { Button, Flex } from "@radix-ui/themes";
// import { useModal } from "@/providers/ModalProvider";
// import { PaperPlaneIcon, CornersIcon } from "@radix-ui/react-icons";
// import QrReaderModal from "../QrReaderModal";
// import SendTxModal from "../SendTxModal";

// export default function NavBar() {
//   const { open } = useModal();

//   return (
//     <Flex justify="center" align="center" direction="column" gap="4" style={{ marginInline: "2 rem" }}>
//       <Button
//         size="4"
//         variant="outline"
//         style={{
//           width: "300px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         onClick={() => open(<SendTxModal />)}
//       >
//         {" "}
//         Send a transaction
//         <PaperPlaneIcon />
//       </Button>
//       <Button
//         size="4"
//         variant="outline"
//         style={{
//           width: "300px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         onClick={() => open(<QrReaderModal />)}
//       >
//         Connect a dApp
//         <CornersIcon style={{ width: 20, height: 20 }} />
//       </Button>
//       <Button
//         size="4"
//         variant="outline"
//         style={{
//           width: "300px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         onClick={() => {}}
//       >
//         Crypto Trend Adviser
//         <CornersIcon style={{ width: 20, height: 20 }} />
//       </Button>
//     </Flex>
//   );
// }


"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useModal } from "@/providers/ModalProvider";
import { PaperPlaneIcon, CornersIcon } from "@radix-ui/react-icons";
import QrReaderModal from "../QrReaderModal";
import SendTxModal from "../SendTxModal";
import { useState } from "react";

export default function NavBar() {
  const { open } = useModal();
  const [showCryptoContent, setShowCryptoContent] = useState(false);

  const cryptoData = [
    {
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      text: "Bitcoin (BTC)"
    },
    {
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      text: "Ethereum (ETH)"
    },
    {
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      text: "Cardano (ADA)"
    },
    {
      image: "https://cryptologos.cc/logos/solana-sol-logo.png",
      text: "Solana (SOL)"
    },
    {
      image: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
      text: "Polkadot (DOT)"
    },
    {
      image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      text: "Ripple (XRP)"
    },
    {
      image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      text: "Dogecoin (DOGE)"
    },
    {
      image: "https://cryptologos.cc/logos/polygon-matic-logo.png",
      text: "Polygon (MATIC)"
    }
  ];

  return (
    <Flex justify="center" align="center" direction="column" gap="4" style={{ marginInline: "2rem" }}>
      <Button
        size="4"
        variant="outline"
        style={{
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => open(<SendTxModal />)}
      >
        Send a transaction
        <PaperPlaneIcon />
      </Button>
      <Button
        size="4"
        variant="outline"
        style={{
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => open(<QrReaderModal />)}
      >
        dApp Portal
        <CornersIcon style={{ width: 20, height: 20 }} />
      </Button>
      <Button
        size="4"
        variant="outline"
        style={{
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setShowCryptoContent(!showCryptoContent)}
      >
        Crypto Trend Adviser
        <CornersIcon style={{ width: 20, height: 20 }} />
      </Button>

      {showCryptoContent && (
        <Flex wrap="wrap" gap="4" justify="center" style={{ maxWidth: "800px", marginTop: "1rem" }}>
          {cryptoData.map((crypto, index) => (
            <Flex key={index} direction="column" align="center" gap="2" style={{ width: "180px" }}>
              <img 
                src={crypto.image} 
                alt={crypto.text} 
                style={{ 
                  width: "60px", 
                  height: "60px", 
                  objectFit: "contain",
                  borderRadius: "50%",
                  backgroundColor: "#f5f5f5"
                }} 
              />
              <span style={{ textAlign: "center", fontSize: "0.9rem" }}>{crypto.text}</span>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
