import { Box } from "@chakra-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavButtons({ children, href = "/" }) {
  const router = useRouter();
  const outline = router.pathname === href ? "1px solid yellow" : null;
  return (
    <Box px={["0.5rem", "1rem", "2rem"]} border={outline} borderRadius="1rem">
      <Link {...{ href }}>
        <a>{children}</a>
      </Link>
    </Box>
  );
}
