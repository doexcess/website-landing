import { Button, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    console.log(window.location.hash);
  }, [pathname]);
  return (
    <Stack
      w={{ sm: "full", md: "full" }}
      h={{ sm: "90px" }}
      align="center"
      justify="center"
      mt="10px"
    >
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        align={{ sm: "start", md: "center" }}
        justify={{ sm: "", md: "space-between" }}
        height="full"
        backgroundColor="rgba(247, 248, 248, 1)"
        w="90%"
        padding="20px"
        borderRadius="12px"
        css={{
          border: "1px solid rgba(64, 69, 225, 0.1)",
          boxShadow: "0px 4px 20px 0px rgba(19, 69, 98, 0.1)",
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
        }}
        overflow="clip"
      >
        <Image
          src="/images/header-logo.png"
          alt="doexcess"
          width="200"
          height="45"
        />
        <Flex color="black" gap="15px" fontWeight="400">
          <Link
            href="#home"
            className={`link ${pathname === "/#home" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={`link ${pathname === "/#about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="#features"
            className={`link ${pathname === "/#features" ? "active" : ""}`}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className={`link ${pathname === "/#pricing" ? "active" : ""}`}
          >
            Pricing
          </Link>
          <Link
            href="#blogs"
            className={`link ${pathname === "/#blogs" ? "active" : ""}`}
          >
            Blogs
          </Link>
        </Flex>
        <Flex>
          <Button
            backgroundColor="transparent"
            fontWeight="medium"
            width="78"
            // height="44"
            fontSize="16px"
          >
            Sign in
          </Button>
          <Button
            backgroundColor="rgba(64, 69, 225, 1)"
            color="white"
            borderRadius="12px"
          >
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
}
