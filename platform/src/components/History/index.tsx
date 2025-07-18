"use client";

import { Button, Flex, Callout } from "@radix-ui/themes";
import { useMe } from "@/providers/MeProvider";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import LogoAnimatedLight from "../LogoAnimatedLight";

export default function History() {
  const { me } = useMe();

  return (
    <Callout.Root style={{ marginTop: "var(--space-2)" }}>
      <LogoAnimatedLight style={{ width: "25%", marginBottom: ".2rem" }} />
      <Callout.Text size = "2">
        SecureWeb3 Wallet: Your Gateway to Cryptocurrency  Enjoy your journey in Web3.0 world!
      </Callout.Text>
      <Flex direction="row" gap="1" justify="between">
        <Button
          size="2"
          variant="outline"
          style={{ marginTop: ".3rem" }}
          onClick={() => {
            window.open(`https://sepolia.etherscan.io/address/${me?.account}`, "_blank");
          }}
        >
          Wallet Transaction History
          <ArrowRightIcon />
        </Button>
      </Flex>
    </Callout.Root>
  );
}
