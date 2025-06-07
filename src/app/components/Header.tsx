import { Button, Flex, Stack, IconButton, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(window.location.hash);
  }, [pathname]);

  return (
    <Stack
      w="full"
      h={{ base: "auto", md: "90px" }}
      align="center"
      justify="center"
      mt={{ base: 4, md: "10px" }}
      px={{ base: 4, md: 0 }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "stretch", md: "center" }}
        justify="space-between"
        w={{ base: "full", md: "90%" }}
        p={{ base: 4, md: "20px" }}
        borderRadius="12px"
        bg="rgba(247, 248, 248, 1)"
        css={{
          border: "1px solid rgba(64, 69, 225, 0.1)",
          boxShadow: "0px 4px 20px 0px rgba(19, 69, 98, 0.1)",
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
        }}
      >
        {/* Logo and Hamburger */}
        <Flex justify="space-between" align="center">
          <Image
            src="/images/header-logo.png"
            alt="doexcess"
            width={200}
            height={45}
            style={{ width: "auto", height: "auto" }}
          />
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={handleToggle}
            aria-label="Toggle menu"
            variant="ghost"
          >
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </IconButton>
        </Flex>

        {/* Navigation Links - Desktop */}
        <Flex
          display={{ base: "none", md: "flex" }}
          color="black"
          gap={{ md: "15px", lg: "30px" }}
          fontWeight="400"
          align="center"
        >
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

        {/* Mobile Menu - Collapsible */}
        {isOpen && (
          <Box display={{ md: "none" }} pt={4} width="full">
            <Stack spaceX={0}>
              <Link
                href="#home"
                className={`link ${pathname === "/#home" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className={`link ${pathname === "/#about" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#features"
                className={`link ${pathname === "/#features" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className={`link ${pathname === "/#pricing" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#blogs"
                className={`link ${pathname === "/#blogs" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
            </Stack>
          </Box>
        )}

        {/* Auth Buttons */}
        <Flex
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          direction={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 4 }}
          mt={{ base: 4, md: 0 }}
          align="center"
          width={{ base: "full", md: "auto" }}
        >
          <Button
            variant="ghost"
            fontWeight="medium"
            w={{ base: "full", md: "78px" }}
            fontSize="16px"
          >
            Sign in
          </Button>
          <Button
            bg="rgba(64, 69, 225, 1)"
            color="white"
            borderRadius="12px"
            w={{ base: "full", md: "auto" }}
          >
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
}
