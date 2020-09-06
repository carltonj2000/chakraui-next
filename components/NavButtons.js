import { Box } from "@chakra-ui/core";
import Link from "next/link";

export default function NavButtons({ children, href = "/" }) {
  return (
    <Box px={["0.5rem", "1rem", "2rem"]}>
      <Link {...{ href }}>
        <a>{children}</a>
      </Link>
    </Box>
  );
}
