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
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    text: "Bitcoin (BTC)",
  },
  {
    image: "https://cryptofonts.com/img/icons/eth.svg",
    text: "Ethereum (ETH)",
  },
  {
    image: "https://assets.coingecko.com/coins/images/975/large/cardano.png?1608306880",
    text: "Cardano (ADA)",
  },
  {
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1644971031",
    text: "Solana (SOL)",
  },
  {
    image: "https://cryptofonts.com/img/icons/bnb.svg",
    text: "Binance Coin (BNB)",
  },
  {
    image: "https://cryptofonts.com/img/icons/trx.svg",
    text: "Tron (TRX)",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
    text: "Dogecoin (DOGE)",
  },
  {
    image: "https://cryptofonts.com/img/icons/xlm.svg",
    text: "Stellar (XLM)",
  },
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
        Transfer ETH
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
