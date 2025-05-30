import { useMe } from "@/providers/MeProvider";
import { Button, Flex, Link, TextField, Text } from "@radix-ui/themes";
import { useState } from "react";
import ThemeButton from "../ThemeButton";
import LogoAnimated from "../LogoAnimated";
import Spinner from "../Spinner";

export default function OnBoarding() {
  const [username, setUsername] = useState("");
  const { create, get, returning, isLoading } = useMe();
  const [createForm, setCreateForm] = useState(!returning);

  return (
    <Flex
      align="center"
      justify={"start"}
      direction="column"
      style={{ position: "relative", width: "100%", gap: "2rem" }}
    >
      <Flex justify={"between"} align={"baseline"} width={"100%"}>
        <ThemeButton />
      </Flex>

      {isLoading && <Spinner />}

      {!isLoading && (
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            height: "85vh",
            justifyContent: "center",
          }}
          onSubmit={(e) => {
            if (createForm) {
              e.preventDefault();
              username && create(username);
            }

            if (!createForm) {
              e.preventDefault();
              get();
            }
          }}
        >
          <LogoAnimated style={{ width: "300px" }} />
          {createForm && (
            <Flex gap={"4"} style={{ width: "300px" }}>
              <TextField.Input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Wallet name"
                disabled={isLoading}
                size={"3"}
                style={{
                  padding: "0.5rem",
                }}
              />
              <Button
                style={{ width: "140px", textAlign: "center" }}
                variant={"outline"}
                size={"3"}
                type={"submit"}
              >
                CREATE
              </Button>
            </Flex>
          )}
          {!createForm && (
            <Flex direction="column" align="center" gap="4">
              <Button style={{ width: "300px" }} variant={"outline"} size={"3"} type={"submit"}>
                LOG IN
              </Button>
              <Link
                onClick={() => {
                  !isLoading && setCreateForm(true);
                }}
                size={"3"}
              >
                create a new wallet
              </Link>
            </Flex>
          )}
          {!isLoading && createForm && (
        <Flex style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
          <Link onClick={() => !isLoading && setCreateForm(false)} size={"3"}>
            log in with an existing passkey
          </Link>
        </Flex>
      )}
        </form>
      )}

      
    </Flex>
  );
}