import {
  Box,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/core";
import { FaWater, FaEnvira, FaHotjar } from "react-icons/fa";

const iconSize = 40;

export default function Home() {
  const bg = useColorModeValue("gray.100", "gray.700");
  const dividerColor = useColorModeValue("gray.500", "gray.200");
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      maxW="1000px"
      justify="center"
      bg={bg}
      p="4"
      rounded="lg"
      w={["90vw", "90vw", "80vw", "80vw"]}
    >
      <Flex align="center" mx="2">
        <Box>
          <FaWater color="blue" size={iconSize} />
        </Box>
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Water
          </Text>
          <Text as="h3" fontWeight="light" fontSize="md">
            Labore tempor adipisicing occaecat consectetur consectetur nostrud
            laborum veniam. Fugiat officia nostrud quis magna amet sint. Aliquip
          </Text>
        </Box>
      </Flex>
      <Divider
        orientation="vertical"
        borderColor={dividerColor}
        height="auto"
        mx="2"
      />
      <Flex align="center" mx="2">
        <Box>
          <FaEnvira color="green" size={iconSize} />
        </Box>
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Earth
          </Text>
          <Text as="h3" fontWeight="light" fontSize="md">
            Labore tempor adipisicing occaecat consectetur consectetur nostrud
            laborum veniam. Fugiat officia nostrud quis magna amet sint. Aliquip
          </Text>
        </Box>
      </Flex>
      <Divider
        orientation="vertical"
        borderColor={dividerColor}
        height="auto"
        mx="2"
      />
      <Flex align="center" mx="2">
        <Box>
          <FaHotjar color="red" size={iconSize} />
        </Box>
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Fire
          </Text>
          <Text as="h3" fontWeight="light" fontSize="md">
            Labore tempor adipisicing occaecat consectetur consectetur nostrud
            laborum veniam. Fugiat officia nostrud quis magna amet sint. Aliquip
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
}
