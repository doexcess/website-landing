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
} from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";

export default function Faq() {
  const faqs = {
    Onboarding: [
      { title: "How do I get started with Doexcess?", value: "a", text: "" },
      { title: "Can I import existing user data?", value: "b", text: "" },
    ],
    Messaging: [
      {
        title: "How do I schedule a WhatsApp message campaign?",
        value: "c",
        text: "",
      },
      { title: "What messaging channels are supported?", value: "d", text: "" },
      { title: "Is there a mobile app for Doexcess?", value: "e", text: "" },
    ],
    "User Management": [
      {
        title: "Can I invite team members to collaborate?",
        value: "f",
        text: "",
      },
      { title: "How do user permissions work?", value: "g", text: "" },
      {
        title: "Can I integrate Doexcess with other tools?",
        value: "h",
        text: "",
      },
    ],
    "Billing & Support": [
      {
        title: "What support options are available for Doexcess users?",
        value: "i",
        text: "",
      },
      { title: "What features does Doexcess offer?", value: "j", text: "" },
      { title: "What happens after my free trial ends?", value: "k", text: "" },
      { title: "How do I contact support?", value: "l", text: "" },
    ],
  };

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
      py={{ base: 8, md: 12 }}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack>
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
                FAQs
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
            Frequently Asked Questions
          </Heading>

          <Text
            textAlign="center"
            color="#6B6B8B"
            fontSize="md"
            maxWidth="603px"
          >
            Browse frequently asked questions about Doexcess. Learn how to set
            up, automate, and manage your business operations with ease
          </Text>

          <Box pt={8} width="100%" maxWidth="800px">
            {Object.entries(faqs).map(([category, items]) => (
              <Stack gap="2" key={category} mb={8} color="#000">
                <Text fontWeight="bold" fontSize="lg">
                  {category}
                </Text>
                <Accordion.Root
                  size="sm"
                  variant="subtle"
                  collapsible
                  defaultValue={["b"]}
                >
                  {items.map((item, index) => (
                    <Accordion.Item
                      key={index}
                      value={item.value}
                      backgroundColor="rgba(247, 248, 248, 1)"
                      mb="1"
                      borderRadius="8px"
                    >
                      <Accordion.ItemTrigger>
                        <Span flex="1" fontSize={{ base: "15px", md: "18px" }}>
                          {item.title}
                        </Span>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent
                        fontSize={{ base: "13px", md: "16px" }}
                      >
                        <Accordion.ItemBody>
                          {item.text || "Answer to be added..."}
                        </Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Stack>
            ))}
          </Box>
        </VStack>
      </Container>
    </VStack>
  );
}
