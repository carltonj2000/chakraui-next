import {
  Input,
  Stack,
  InputLeftElement,
  Icon,
  InputGroup,
  Button,
  Divider,
  Box,
  FormControl,
} from "@chakra-ui/core";
import { InfoIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";

export default function Form() {
  return (
    <form>
      <Stack spacing="4">
        <FormControl id="fistName">
          <InputGroup>
            <InputLeftElement children={<InfoIcon />} />
            <Input
              type="name"
              placeholder="First name"
              aria-label="First Name"
            />
          </InputGroup>
        </FormControl>
        <FormControl id="lastName">
          <InputGroup>
            <InputLeftElement children={<InfoIcon />} />
            <Input type="name" placeholder="Last name" aria-label="Last Name" />
          </InputGroup>
        </FormControl>
        <Divider borderColor="gray.300" />
        <FormControl id="email">
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>
        <FormControl id="password">
          <InputGroup>
            <InputLeftElement children={<LockIcon />} />
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
          _active={{ boxShadow: "xl" }}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
