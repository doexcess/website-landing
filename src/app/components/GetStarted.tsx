import {
  Button,
  VStack,
  Container,
  Heading,
  Text,
  ButtonGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiPlayCircle } from "react-icons/fi";

export default function GetStarted() {
  // Responsive values
  const buttonDirection = useBreakpointValue({ base: "column", md: "row" });
  const buttonWidth = useBreakpointValue({ base: "full", md: "227px" });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  const stackAlign = useBreakpointValue({ base: "center", md: "start" });
  const paddingX = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 10 });
  const headingSize = useBreakpointValue({
    base: "30px",
    sm: "38px",
    md: "42px",
    lg: "48px",
  });

  return (
    <VStack
      minHeight={{ base: "600px", md: "700px", lg: "793px" }}
      width="full"
      align="flex-end"
      justify="center"
      bgImage="url('/images/getStarted.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      paddingX={paddingX}
    >
      <Container maxW="container.xl">
        <VStack
          maxW={{ base: "full", md: "512px" }}
          gap={{ base: "16px", md: "20px" }}
          align={stackAlign}
          textAlign={textAlign}
        >
          <Heading
            as="h3"
            color="rgba(237, 238, 252, 1)"
            fontWeight="400"
            fontSize={headingSize}
            lineHeight="1.2"
          >
            Turn Chaos into Clarity Effortlessly
          </Heading>
          <Text
            as="p"
            maxW={{ base: "full", md: "382px" }}
            color="#D4D5D8"
            fontSize={{ base: "md", md: "lg" }}
          >
            Automate the Busywork, Focus on What Matters—Your People.
          </Text>
          <ButtonGroup
            size="lg"
            variant="outline"
            width="full"
            flexDirection={buttonDirection}
          >
            <Button
              color="#4045E1"
              width={buttonWidth}
              height={{ base: "48px", md: "52px" }}
              backgroundColor="#EDEEFC"
              borderRadius="12px"
              _hover={{ opacity: 0.9 }}
            >
              Get Started for Free
            </Button>
            <Button
              color="#EDEEFC"
              width={buttonWidth}
              height={{ base: "48px", md: "52px" }}
              borderRadius="12px"
              borderColor="#EDEEFC"
              _hover={{ bg: "rgba(237, 238, 252, 0.1)" }}
              whiteSpace="nowrap"
              overflowX="clip"
            >
              <FiPlayCircle width="24px" height="24px" /> Watch Demo
            </Button>
          </ButtonGroup>
        </VStack>
      </Container>
    </VStack>
  );
}
