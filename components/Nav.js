import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/core";
import { AddIcon } from "@chakra-ui/icons";

import NavButton from "./NavButtons";

function LightDark({ v = "block", p = "static", d = "block" }) {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(v);
  return (
    <Button onClick={toggleColorMode} visibility={v} pos={p} d={d}>
      Select {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

export default function Nav() {
  const titleBarBg = useColorModeValue("blue.100", "blue.600");
  return (
    <Box
      padding="1rem"
      bg={titleBarBg}
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box pos="relative">
        <AddIcon
          pos={["relative", "relative", "absolute"]}
          top={[0, 0, "0.75rem"]}
          left="0.5rem"
        />
        <LightDark v="hidden" p="relative" d={["none", "none", "block"]} />
      </Box>
      <Box d="flex">
        <NavButton href="/">Home</NavButton>
        <NavButton href="/form">Form</NavButton>
        <NavButton href="/card">Card</NavButton>
        <NavButton href="/list">List</NavButton>
      </Box>
      <LightDark />
    </Box>
  );
}
