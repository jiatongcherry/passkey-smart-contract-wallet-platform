"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useModal } from "@/providers/ModalProvider";
import { PaperPlaneIcon, CornersIcon } from "@radix-ui/react-icons";
import QrReaderModal from "../QrReaderModal";
import SendTxModal from "../SendTxModal";

export default function NavBar() {
  const { open } = useModal();

  return (
    <Flex justify="center" align="center" direction="column" gap="4" style={{ marginInline: "2 rem" }}>
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
        {" "}
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
        Connect a dApp
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
        onClick={}
      >
        Crypto Trend Adviser
        <CornersIcon style={{ width: 20, height: 20 }} />
      </Button>
    </Flex>
  );
}
