import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/core";
import { StarIcon } from "@chakra-ui/icons";

export default function Card() {
  const imgRef = React.useRef(null);
  const width = 400;
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.500", "gray.100");
  return (
    <Box d="flex" alignItems="center" justifyContent="center" h="100%">
      <Box
        w={`${width}px`}
        rounded="20px"
        overflow="hidden"
        boxShadow="sm"
        bg={bgColor}
      >
        <Box pos="relative">
          <Image src="./04.png" alt="water color" ref={imgRef} />
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xl" fontWeight="bold" mb="2rem">
              Introduction
            </Text>
            <Text mb="3rem" fontSize="lg">
              chakra
            </Text>
            <Text fontSize="md">Mini Course</Text>
          </Box>
        </Box>
        <Box p={5}>
          <Stack isInline>
            <Badge variant="solid" colorScheme="teal" rounded="full" px={2}>
              NEW!
            </Badge>
            <Badge variant="solid" colorScheme="teal" rounded="full" px={2}>
              REACT
            </Badge>
            <Text
              textTransform="uppercase"
              fontSize="sm"
              colorScheme="teal"
              letterSpacing="wide"
            >
              2 Hours &bull; 12 Lectures
            </Text>
          </Stack>
          <Text as="h2" fontWeight="semibold" fontSize="xl" my="2">
            Introduction to chakra-ui
          </Text>
          <Text isTruncated fontWeight="light" fontSize="md">
            Irure duis esse esse sint duis. Aliquip Lorem
            <br /> nisi sit excepteur excepteur ipsum excepteur
            <br /> id Lorem Lorem incididunt. Excepteur incididunt veniam ipsum
            tempor. Voluptate labore deserunt pariatur mollit enim nulla ex do
            id pariatur amet. Laboris quis enim sunt nisi culpa excepteur aliqua
            eu aute. Anim id nisi et laboris do non ea nostrud exercitation
            ipsum incididunt tempor.
          </Text>
          <Stack isInline justify="space-between" textColor={textColor}>
            <Text fontWeight="semibold" fontSize="lg">
              $20
            </Text>
            <Box d="flex">
              <Box as="span">
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color="teal.500" />
                  ))}
                <StarIcon mr="2" />
              </Box>
              <Text as="h3" fontSize="lg" fontWeight="semibold">
                34 Reviews
              </Text>
            </Box>
          </Stack>
          <Box textAlign="center">
            <Button
              colorScheme="teal"
              size="lg"
              mt={3}
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
              _active={{ boxShadow: "lg" }}
            >
              Sign Up Now!
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
