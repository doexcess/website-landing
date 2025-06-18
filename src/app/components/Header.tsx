import {
  Button,
  Flex,
  Stack,
  IconButton,
  Box,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

interface HeaderProps {
  handleNav: (item: string) => void;
}

export default function Header({ handleNav }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Track hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    setCurrentHash(window.location.hash);

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Improved active check
  const isActive = (hash: string) => {
    return currentHash === hash;
  };

  const handleLinkClick = (item: string) => {
    setCurrentHash(item); // Update state immediately
    handleNav(item);
    router.push(`${pathname}${item}`, { scroll: false });
  };

  return (
    <Stack
      w="full"
      h={{ base: "auto", md: "90px" }}
      align="center"
      justify="center"
      mt={{ base: 4, md: "10px" }}
      px={{ base: 4, md: 0 }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      background="transparent"
    >
      <Container
        maxW="container.xl"
        // px={{ base: 4, md: 6 }}
        px={{ base: 0, md: 6 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          justify="space-between"
          w="full"
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
              width={150}
              height={35}
              style={{ width: "150px", height: "35px" }}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={handleToggle}
              aria-label="Toggle menu"
              variant="ghost"
              _hover={{ backgroundColor: "#ced0ff" }}
            >
              {isOpen ? (
                <RxCross1 color="#080930" />
              ) : (
                <RxHamburgerMenu color="#080930" />
              )}
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
            {["#home", "#about", "#features", "#getStarted", "#blogs"].map(
              (item) => (
                <Box
                  key={item}
                  position="relative"
                  _hover={{
                    "&::after": {
                      width: "100%",
                    },
                  }}
                  base={{
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      width: isActive(item) ? "100%" : "0%",
                      height: "2px",
                      backgroundColor: "rgba(64, 69, 225, 1)",
                      transition: "width 0.3s ease",
                    },
                  }}
                  css={{
                    borderBottom: isActive(item) ? "1px solid #4045E1" : "",
                  }}
                >
                  <Link
                    href={item}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                    style={{
                      padding: "8px 0",
                      color: isActive(item)
                        ? "rgba(64, 69, 225, 1)"
                        : "#080930",
                      fontWeight: isActive(item) ? "500" : "400",
                    }}
                  >
                    {item.replace("#", "").charAt(0).toUpperCase() +
                      item.replace("#", "").slice(1)}
                  </Link>
                </Box>
              )
            )}
          </Flex>

          {/* Mobile Menu - Collapsible */}
          {isOpen && (
            <Box display={{ md: "none" }} pt={4} width="full">
              <Stack>
                {["#home", "#about", "#features", "#getStarted", "#blogs"].map(
                  (item) => (
                    <Box
                      key={item}
                      position="relative"
                      _hover={{
                        "&::after": {
                          width: "100%",
                        },
                      }}
                      base={{
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "0",
                          left: 0,
                          width: isActive(item) ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: "rgba(64, 69, 225, 1)",
                          transition: "width 0.3s ease",
                        },
                      }}
                    >
                      <Link
                        href={item}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item);
                          setIsOpen(false);
                        }}
                        style={{
                          display: "block",
                          padding: "8px 0",
                          color: isActive(item)
                            ? "rgba(64, 69, 225, 1)"
                            : "#080930",
                          fontWeight: isActive(item) ? "500" : "400",
                        }}
                      >
                        {item.replace("#", "").charAt(0).toUpperCase() +
                          item.replace("#", "").slice(1)}
                      </Link>
                    </Box>
                  )
                )}
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
              color="rgba(8, 9, 48, 1)"
              // backgroundColor="#d8daf6"
              backgroundColor="#e7e9f8"
              borderRadius="12px"
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
      </Container>
    </Stack>
  );
}
