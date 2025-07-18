"use client";

import { useBalance } from "@/providers/BalanceProvider";
import { Flex, Text } from "@radix-ui/themes";
import { CSSProperties } from "react";

const css: CSSProperties = {
  padding: "4rem 0",
};

// export default function Balance() {
//   const { balance } = useBalance();
//   let [intBalance, decimals] = balance.toString().split(".");

//   return (
//     <Flex style={css} direction="row" justify="center">
//       <Text highContrast={true} weight="bold" size="9">
//         USD {intBalance}
//       </Text>
//       <Text highContrast={true} weight="bold" size="6" style={{ color: "var(--accent-12)" }}>
//         .{(decimals || "00").slice(0, 2)}
//       </Text>
      
//       <Text style={{ width: '16px' }} />
      
//        <Text highContrast={true} weight="bold" size="9">
//         ETH {intBalance}
//       </Text>
//       <Text highContrast={true} weight="bold" size="6" style={{ color: "var(--accent-12)" }}>
//         .{(decimals || "00").slice(0, 2)}
//       </Text>
//     </Flex>
//   );
// }

export default function Balance() {
  const { balance } = useBalance();
  let [intBalance, decimals] = balance.toString().split(".");

  return (
    <Flex style={css} direction="row" justify="center">
      <Text highContrast={true} weight="bold" size="9">
        USD 28.89
      </Text>
      <Text highContrast={true} weight="bold" size="6" style={{ color: "var(--accent-12)" }}>
        .{(decimals || "00").slice(0, 2)}
      </Text>
      
      <Text style={{ width: '16px' }} />
      
       <Text highContrast={true} weight="bold" size="9">
        ETH 0.008
      </Text>
      <Text highContrast={true} weight="bold" size="6" style={{ color: "var(--accent-12)" }}>
        .{(decimals || "000").slice(0, 3)}
      </Text>
    </Flex>
  );
}
