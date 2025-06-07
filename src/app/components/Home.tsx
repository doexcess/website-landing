import { DiamondIcon } from "@/components/svgs";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";

export default function Home() {
  const buttonDirection = useBreakpointValue({ base: "column", md: "row" });
  const buttonWidth = useBreakpointValue({ base: "full", md: "227px" });
  const headingSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "5xl",
    xl: "63px",
  });

  return (
    <Stack
      minHeight={{ base: "auto", md: "600px", lg: "700px" }}
      width="full"
      align="center"
      justify="center"
      overflow="hidden"
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 8, md: 12, lg: 16 }}
      // pt={500}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(104deg, rgba(255, 255, 255, 0.55) 0%, rgba(199, 202, 255, 1) 100%),
          url('/images/home-grid.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
          <VStack align={{ base: "center", md: "start" }}>
            <HStack
              maxWidth={{ base: "full", md: "603px" }}
              height={{ base: "auto", md: "33px" }}
              py={{ base: 1, md: 1 }}
              px={{ base: 2, md: 3 }}
              border="1px solid #8C8FED"
              borderRadius="30px"
              backgroundColor="#d9dbff"
              backgroundImage="linear-gradient(23deg,rgba(217, 219, 255, 0.55) 0%, rgba(199, 202, 255, 0.55) 32%, rgba(185, 250, 216, 0.55) 100%)"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              <Box
                backgroundColor="#4045E1"
                borderRadius="24px"
                width={{ base: "80px", md: "88px" }}
                height={{ base: "22px", md: "25px" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
              >
                <Text
                  display="flex"
                  gap="1"
                  alignItems="center"
                  color="#EDEEFC"
                  fontSize={{ base: "10px", md: "xs" }}
                >
                  <DiamondIcon />
                  Blog Post
                </Text>
              </Box>
              <Text
                color="#080930"
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                overflow={{ base: "hidden", md: "hidden" }}
                // textOverflow={{ base: "none", md: "none" }}
                px={1}
              >
                We built Doexcess after struggling with messy tools ourselves
              </Text>
              <BsArrowRight color="#080930" size={16} />
            </HStack>

            <Heading
              as="h1"
              color="#080930"
              fontSize={headingSize}
              lineHeight={1.2}
              textAlign={{ base: "center", md: "left" }}
              m={0}
            >
              Automate Onboarding, Messaging & Events—All in One Place
            </Heading>

            <Text
              as="p"
              color="#434453"
              width={{ base: "full", md: "382px" }}
              fontSize={{ base: "sm", md: "md" }}
              textAlign={{ base: "center", md: "left" }}
              m={0}
            >
              Save hours with automated email workflows, course management, and
              ticketing—no coding needed.
            </Text>

            <ButtonGroup
              size="lg"
              variant="outline"
              width="full"
              maxWidth={{ base: "full", md: "auto" }}
              //   spaceX={{ base: 4, md: 6 }}
              flexDirection={buttonDirection}
              m={0}
            >
              <Button
                color="white"
                width={buttonWidth}
                height={{ base: "48px", md: "52px" }}
                backgroundColor="#4045E1"
                borderRadius="12px"
                _hover={{ opacity: 0.9 }}
                border="none"
              >
                Get Started for Free
              </Button>
              <Button
                color="#4045E1"
                width={buttonWidth}
                height={{ base: "48px", md: "52px" }}
                borderRadius="12px"
                borderColor="#4045E1"
                _hover={{ bg: "rgba(237, 238, 252, 0.1)" }}
              >
                <FiPlayCircle size={20} /> Watch Demo
              </Button>
            </ButtonGroup>
          </VStack>

          <Box
            width="full"
            height="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            order={{ base: -1, md: 1 }}
          >
            <Image
              src="/images/home.png"
              alt="doexcess-home"
              width={598}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "598px",
              }}
              priority
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
