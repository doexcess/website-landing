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
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CiMail } from 'react-icons/ci';

export default function Footer() {
  const router = useRouter();
  return (
    <Stack
      as='footer'
      height={{ base: 'auto', md: '562px' }}
      width='full'
      padding={{ base: 6, md: 10 }}
      backgroundColor='rgba(247, 248, 248, 1)'
      justify='center'
      align='center'
    >
      <Container maxW='container.xl'>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: '2fr 1fr 1fr 1fr 1fr',
          }}
          justifyContent='end'
          gap={{ base: 6, md: 8 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack
              align={{ base: 'start', md: 'start' }}
              mb={{ base: 15, sm: 0 }}
            >
              <Image
                src='/images/header-logo.png'
                alt='doexcess'
                width={150}
                height={35}
                style={{ width: '150px', height: '35px' }}
              />
            </VStack>
          </GridItem>

          {/* LEGAL Column */}
          <GridItem>
            <VStack
              align={{ base: 'start', md: 'start' }}
              spaceX={0}
              gap={{ base: '3', md: '5' }}
            >
              <Text
                fontSize='16px'
                fontWeight='medium'
                color='#080930'
                textAlign='left'
              >
                LEGAL
              </Text>
              <VStack
                align={{ base: 'start', md: 'start' }}
                spaceX={0}
                gap={{ base: '2', md: '3' }}
              >
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/privacy-policy');
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/terms');
                  }}
                >
                  Terms of Service
                </Link>
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/faqs');
                  }}
                >
                  FAQs
                </Link>
                {/* <Link
                  href='/compliance'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                >
                  Compliance
                </Link> */}
              </VStack>
            </VStack>
          </GridItem>

          {/* SITEMAP Column */}
          <GridItem>
            <VStack
              align={{ base: 'center', md: 'start' }}
              spaceX={0}
              gap={{ base: '3', md: '5' }}
            >
              <Text fontSize='16px' fontWeight='medium' color='#080930'>
                SITEMAP
              </Text>
              <VStack
                align={{ base: 'start', md: 'start' }}
                spaceX={0}
                gap={{ base: '2', md: '3' }}
              >
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/');
                  }}
                >
                  Home
                </Link>
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/about');
                  }}
                >
                  About
                </Link>
                {/* <Link
                  href='/features'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                >
                  Features
                </Link> */}
                {/* <Link href='/blog' fontSize='14px' margin='0' color='#0A142F'>
                  Blog
                </Link> */}
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/contact');
                  }}
                >
                  Contact
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* SUPPORT Column */}
          <GridItem>
            <VStack
              align={{ base: 'start', md: 'start' }}
              spaceX={0}
              gap={{ base: '3', md: '5' }}
            >
              <Text fontSize='16px' fontWeight='medium' color='#080930'>
                SUPPORT
              </Text>
              <VStack
                align={{ base: 'start', md: 'start' }}
                spaceX={0}
                gap={{ base: '2', md: '3' }}
              >
                <Link
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/privacy-policy');
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href='https://wa.link/ors6gq'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  target='_blank'
                >
                  WhatsApp Chat
                </Link>
                {/* <Link href='/status' fontSize='14px' margin='0' color='#0A142F'>
                  Status Page
                </Link>
                <Link href='/faqs' fontSize='14px' margin='0' color='#0A142F'>
                  FAQs
                </Link> */}
              </VStack>
            </VStack>
          </GridItem>

          {/* SOCIALS Column */}
          <GridItem>
            <VStack
              align={{ base: 'center', md: 'start' }}
              spaceX={0}
              gap={{ base: '3', md: '5' }}
            >
              <Text fontSize='16px' fontWeight='medium' color='#080930'>
                SOCIALS
              </Text>
              <VStack
                align={{ base: 'start', md: 'start' }}
                spaceX={0}
                gap={{ base: '2', md: '3' }}
              >
                {/* <Link
                  href='https://facebook.com'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                >
                  Facebook
                </Link> */}
                <Link
                  href='https://linkedin.com/company/doexcesshq'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  target='_blank'
                >
                  LinkedIn
                </Link>
                <Link
                  href='https://instagram.com/doexcess'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  target='_blank'
                >
                  Instagram
                </Link>
                <Link
                  href='https://x.com/doexcess'
                  fontSize='14px'
                  margin='0'
                  color='#0A142F'
                  target='_blank'
                >
                  X
                </Link>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Newsletter */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          mt={10}
          justify={{ base: 'center', md: 'end' }}
          align={{ base: 'center', md: 'flex-end' }}
          width='full'
        >
          <VStack
            align={{ base: 'center', md: 'start' }}
            width={{ base: 'full', md: '328px' }}
            mb={{ base: 6, md: 0 }}
          >
            <Text fontSize='16px' fontWeight='medium' color='#080930'>
              NEWSLETTER
            </Text>
            <HStack
              width='full'
              borderBottom='1px solid'
              borderColor='gray.400'
              pb={0}
            >
              <Input
                placeholder='Enter your email address'
                variant='subtle'
                fontSize='14px'
                px={0}
                outline='none'
                border='none'
                backgroundColor='transparent'
                color='#000'
              />
              <Icon
                as={CiMail}
                className='hover:cursor-pointer'
                boxSize={5}
                color='rgba(64, 69, 225, 1)'
              />
            </HStack>
          </VStack>
        </Flex>

        <Box width={{ base: 'full', md: 'auto' }} mt={{ md: '40px' }}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spaceX={{ base: 4, md: 8 }}
            align='center'
            justify={{ base: 'center', md: 'space-between' }}
            flexWrap='wrap'
          >
            <Link
              href='mailto:hello@doexcess.com'
              borderBottom='1px solid'
              borderColor='rgba(64, 69, 225, 1)'
              pb={1}
              fontSize={{ base: '14px', md: '18px' }}
              fontWeight='300'
              color='#0A142F'
            >
              hello@doexcess.com
            </Link>
            <Text
              borderBottom='1px solid'
              borderColor='rgba(64, 69, 225, 1)'
              pb={1}
              fontSize={{ base: '14px', md: '18px' }}
              fontWeight='300'
              color='#0A142F'
            >
              +234 (707) 218-2999
            </Text>
            <Text
              fontSize='12px'
              color='gray.400'
              textAlign={{ base: 'center', md: 'left' }}
            >
              © {new Date().getFullYear()} Doexcess. All rights reserved.
            </Text>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
}
