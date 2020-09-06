import {
  Box,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import { SunIcon } from "@chakra-ui/icons";

import Login from "../components/formLogin";
import SignUp from "../components/formSignUp";

export default function Form() {
  const bg = useColorModeValue("gray.100", "gray.600");
  return (
    <Box
      w="350px"
      bg={bg}
      p={3}
      boxShadow="sm"
      rounded="lg"
      d="flex"
      flexDir="column"
    >
      <SunIcon boxSize={12} mx="auto" my={6} />
      <Tabs isFitted variant="soft-rounded">
        <TabList>
          <Tab>Sign Up</Tab>
          <Tab>Log In</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <Login />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
