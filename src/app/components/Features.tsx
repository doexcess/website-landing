import { DiamondIcon } from "@/components/svgs";
import {
  VStack,
  Container,
  Box,
  HStack,
  Text,
  Heading,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Features() {
  // Responsive values
  const headingSize = useBreakpointValue({
    base: "24px",
    sm: "30px",
    md: "36px",
    lg: "48px",
  });

  return (
    <VStack
      minHeight={{ base: "500px", md: "600px", lg: "700px" }}
      width="full"
      align="center"
      justify="center"
      overflow="hidden"
      spaceX={{ base: 6, md: 10 }}
      py={{ base: 10, md: 20 }}
      backgroundColor="#FFFFFF"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack spaceX={{ base: 4, md: 6 }}>
          <HStack justify="center">
            <Box
              backgroundColor="#4045E1"
              borderRadius="24px"
              width={{ base: "80px", md: "88px" }}
              height={{ base: "22px", md: "25px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                display="flex"
                gap="1"
                alignItems="center"
                color="#EDEEFC"
                fontSize={{ base: "10px", md: "xs" }}
              >
                <DiamondIcon />
                Features
              </Text>
            </Box>
          </HStack>

          <Heading
            as="h3"
            color="#080930"
            fontSize={headingSize}
            textAlign="center"
            px={{ base: 2, sm: 0 }}
            lineHeight="tall"
          >
            Features That Make Your Business Easier
          </Heading>
          <Stack gap={{ base: 5, sm: 10 }}>
            <SimpleGrid
              templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
              gap={{ base: 5, sm: 10 }}
            >
              <Image
                src="/images/features/stress-free.png"
                alt="Stress-Free Member Onboarding"
                width="588"
                height="432"
              />
              <Image
                src="/images/features/automated.png"
                alt="Automated Engagement"
                width="588"
                height="432"
              />
            </SimpleGrid>
            <SimpleGrid
              templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
              gap={{ base: 5, sm: 10 }}
              justifyItems="center"
              alignItems="center"
            >
              <Image
                src="/images/features/sell-courses.png"
                alt="Sell Courses & Events"
                width="588"
                height="432"
              />
              <Image
                src="/images/features/actionable.png"
                alt="Actionable Analytics"
                width="588"
                height="432"
              />
              <Image
                src="/images/features/admin-control.png"
                alt="Admin Control"
                width="588"
                height="432"
              />
            </SimpleGrid>
          </Stack>
        </VStack>
      </Container>
    </VStack>
  );
}
