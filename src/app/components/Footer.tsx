import {
  Box,
  Container,
  Grid,
  GridItem,
  Link,
  Input,
  Text,
  VStack,
  HStack,
  Flex,
  Icon,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <Stack
      as="footer"
      height={{ base: "auto", md: "562px" }}
      width="full"
      padding={{ base: 6, md: 10 }}
      backgroundColor="rgba(247, 248, 248, 1)"
      justify="center"
      align="center"
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "2fr 1fr 1fr 1fr 1fr",
          }}
          gap={{ base: 6, md: 8 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack align={{ base: "center", md: "start" }}>
              <Image
                src="/images/header-logo.png"
                alt="doexcess"
                width="200"
                height="45"
              />
            </VStack>
          </GridItem>

          {/* SITEMAP Column */}
          <GridItem>
            <VStack
              align={{ base: "center", md: "start" }}
              spaceX={0}
              gap={{ base: "3", md: "5" }}
            >
              <Text
                fontSize="16px"
                fontWeight="medium"
                color="rgba(8, 9, 48, 1)"
              >
                SITEMAP
              </Text>
              <VStack
                align={{ base: "center", md: "start" }}
                spaceX={0}
                gap={{ base: "2", md: "3" }}
              >
                <Link href="/" fontSize="14px" margin="0">
                  Home
                </Link>
                <Link href="/about" fontSize="14px" margin="0">
                  About
                </Link>
                <Link href="/features" fontSize="14px" margin="0">
                  Features
                </Link>
                <Link href="/blog" fontSize="14px" margin="0">
                  Blog
                </Link>
                <Link href="/contact" fontSize="14px" margin="0">
                  Contact
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* SOCIALS Column */}
          <GridItem>
            <VStack
              align={{ base: "center", md: "start" }}
              spaceX={0}
              gap={{ base: "3", md: "5" }}
            >
              <Text
                fontSize="16px"
                fontWeight="medium"
                color="rgba(8, 9, 48, 1)"
              >
                SOCIALS
              </Text>
              <VStack
                align={{ base: "center", md: "start" }}
                spaceX={0}
                gap={{ base: "2", md: "3" }}
              >
                <Link href="https://facebook.com" fontSize="14px" margin="0">
                  Facebook
                </Link>
                <Link href="https://linkedin.com" fontSize="14px" margin="0">
                  LinkedIn
                </Link>
                <Link href="https://instagram.com" fontSize="14px" margin="0">
                  Instagram
                </Link>
                <Link href="https://twitter.com" fontSize="14px" margin="0">
                  Twitter
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* SUPPORT Column */}
          <GridItem>
            <VStack
              align={{ base: "center", md: "start" }}
              spaceX={0}
              gap={{ base: "3", md: "5" }}
            >
              <Text
                fontSize="16px"
                fontWeight="medium"
                color="rgba(8, 9, 48, 1)"
              >
                SUPPORT
              </Text>
              <VStack
                align={{ base: "center", md: "start" }}
                spaceX={0}
                gap={{ base: "2", md: "3" }}
              >
                <Link href="/contact" fontSize="14px" margin="0">
                  Contact Us
                </Link>
                <Link href="/whatsapp" fontSize="14px" margin="0">
                  WhatsApp Chat
                </Link>
                <Link href="/status" fontSize="14px" margin="0">
                  Status Page
                </Link>
                <Link href="/faqs" fontSize="14px" margin="0">
                  FAQs
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* LEGAL Column */}
          <GridItem>
            <VStack
              align={{ base: "center", md: "start" }}
              spaceX={0}
              gap={{ base: "3", md: "5" }}
            >
              <Text
                fontSize="16px"
                fontWeight="medium"
                color="rgba(8, 9, 48, 1)"
              >
                LEGAL
              </Text>
              <VStack
                align={{ base: "center", md: "start" }}
                spaceX={0}
                gap={{ base: "2", md: "3" }}
              >
                <Link href="/privacy" fontSize="14px" margin="0">
                  Privacy Policy
                </Link>
                <Link href="/terms" fontSize="14px" margin="0">
                  Terms of Service
                </Link>
                <Link href="/cookies" fontSize="14px" margin="0">
                  Cookie Policy
                </Link>
                <Link href="/compliance" fontSize="14px" margin="0">
                  Compliance
                </Link>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Newsletter */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mt={10}
          justify={{ base: "center", md: "end" }}
          align={{ base: "center", md: "flex-end" }}
          width="full"
        >
          <VStack
            align={{ base: "center", md: "start" }}
            width={{ base: "full", md: "328px" }}
            mb={{ base: 6, md: 0 }}
          >
            <Text fontSize="16px" fontWeight="medium">
              NEWSLETTER
            </Text>
            <HStack
              width="full"
              borderBottom="1px solid"
              borderColor="gray.400"
              pb={2}
            >
              <Input
                placeholder="Enter your email address"
                variant="subtle"
                fontSize="14px"
                px={0}
                outline="none"
                border="none"
                backgroundColor="transparent"
              />
              <Icon as={CiMail} boxSize={5} color="rgba(64, 69, 225, 1)" />
            </HStack>
          </VStack>
        </Flex>

        <Box width={{ base: "full", md: "auto" }} mt={{ md: "40px" }}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spaceX={{ base: 4, md: 8 }}
            align="center"
            justify={{ base: "center", md: "space-between" }}
            flexWrap="wrap"
          >
            <Link
              href="mailto:hello@doexcess.com"
              borderBottom="1px solid"
              borderColor="rgba(64, 69, 225, 1)"
              pb={1}
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight="300"
            >
              hello@doexcess.com
            </Link>
            <Text
              borderBottom="1px solid"
              borderColor="rgba(64, 69, 225, 1)"
              pb={1}
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight="300"
            >
              (123) 456-7890
            </Text>
            <Text
              fontSize="12px"
              color="gray.400"
              textAlign={{ base: "center", md: "left" }}
            >
              © {new Date().getFullYear()} Doexcess Nig. All rights reserved.
            </Text>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
}
