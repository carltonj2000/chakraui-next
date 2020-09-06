import {
  Input,
  Stack,
  InputLeftElement,
  Icon,
  InputGroup,
  Button,
  FormControl,
  FormHelperText,
} from "@chakra-ui/core";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

export default function Form() {
  return (
    <form>
      <Stack spacing="4">
        <FormControl id="emailLogin">
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>
        <FormControl id="passwordLogin">
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
          Log In
        </Button>
        <FormControl>
          <FormHelperText textAlign="center">Welcome Back!</FormHelperText>
        </FormControl>
      </Stack>
    </form>
  );
}
