import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/core";
import { AddIcon } from "@chakra-ui/icons";

import NavButton from "./NavButtons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const titleBarBg = useColorModeValue("blue.100", "blue.600");
  return (
    <Box
      padding="1rem"
      bg={titleBarBg}
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <AddIcon />
      <Box d="flex">
        <NavButton>Home</NavButton>
        <NavButton>Form</NavButton>
        <NavButton>Card</NavButton>
        <NavButton>List</NavButton>
      </Box>
      <Button onClick={toggleColorMode}>
        Select {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </Box>
  );
}
