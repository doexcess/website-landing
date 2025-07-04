import { DiamondIcon } from '@/components/svgs';
import {
  VStack,
  Container,
  Box,
  HStack,
  Text,
  Heading,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function Features() {
  // Responsive values
  const headingSize = {
    base: '24px',
    sm: '30px',
    md: '36px',
    lg: '46px',
  };

  const features1 = [
    {
      title: 'Stress-Free Member Onboarding',
      body: 'New members sign up in seconds (email, phone, social) with instant role assignments and guided checklists.',
      src: '/images/features/stress-free1.png',
    },
    {
      title: 'Automated Engagement',
      body: 'Send bulk email messages automatically using smart templates. Track opens, clicks, replies—live.',
      src: '/images/features/automated1.png',
    },
  ];

  const features2 = [
    {
      title: 'Sell Courses & Events',
      body: 'Drag-and-drop courses, QR ticketing, and branded checkout. Accept cards, PayPal, coupons.',
      src: '/images/features/sell-courses1.png',
    },
    {
      title: 'Actionable Analytics',
      body: 'Live dashboards, drill-down filters, and auto-generated reports. Find hidden growth gems.',
      src: '/images/features/actionable1.png',
    },
    {
      title: 'Admin Control',
      body: 'Bulk user actions, audit logs, GDPR security. Monitor everything from one dashboard.',
      src: '/images/features/admin-control1.png',
    },
  ];

  return (
    <VStack
      minHeight={{ base: '500px', md: '600px', lg: '700px' }}
      width='full'
      align='center'
      justify='center'
      overflow='hidden'
      // spaceX={{ base: 6, md: 10 }}
      py={{ base: 10, md: 20 }}
      backgroundColor='#FFFFFF'
    >
      <Container maxW='container.xl' px={{ base: 4, md: 6 }}>
        <VStack spaceX={{ base: 0, md: 6 }}>
          <HStack justify='center'>
            <Box
              backgroundColor='#4045E1'
              borderRadius='24px'
              width={{ base: '80px', md: '88px' }}
              height={{ base: '22px', md: '25px' }}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Text
                display='flex'
                gap='1'
                alignItems='center'
                color='#EDEEFC'
                fontSize={{ base: '10px', md: 'xs' }}
              >
                <DiamondIcon />
                Features
              </Text>
            </Box>
          </HStack>

          <Heading
            as='h3'
            color='#080930'
            fontSize={headingSize}
            textAlign='center'
            lineHeight='short'
            width={{ md: 'md', lg: 'full' }}
            marginBottom={10}
          >
            Features That Make Your Business Easier
          </Heading>
          <Stack gap={{ base: 6, sm: 8 }}>
            <SimpleGrid
              templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
              gap={{ base: 5, sm: 10 }}
            >
              {features1.map((feature) => (
                <VStack
                  width='588'
                  height='432'
                  key={feature.title}
                  gap={{ base: 5, md: 10 }}
                  align='center'
                  borderRadius='16px'
                  border='1px solid rgba(237, 238, 252, 1)'
                  p={{ base: 2, md: 5 }}
                  backgroundColor='rgba(247, 248, 248, 1)'
                  color='#000'
                >
                  <Image
                    src={feature.src}
                    alt={feature.title.toLowerCase()}
                    width='401'
                    height='295'
                  />
                  <VStack gap={5} align='start'>
                    <Heading>{feature.title}</Heading>
                    <Text maxWidth='535px' fontWeight='400'>
                      {feature.body}
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
            <SimpleGrid
              templateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }}
              gap={{ base: 5, sm: 10 }}
              justifyItems='center'
              alignItems='center'
            >
              {features2.map((feature) => (
                <VStack
                  width='588'
                  height='432'
                  key={feature.title}
                  gap={{ base: 5, md: 10 }}
                  align='center'
                  borderRadius='16px'
                  border='1px solid rgba(237, 238, 252, 1)'
                  p={{ base: 2, md: 5 }}
                  backgroundColor='rgba(247, 248, 248, 1)'
                  color='#000'
                >
                  <Image
                    src={feature.src}
                    alt={feature.title.toLowerCase()}
                    width='401'
                    height='295'
                  />
                  <VStack gap={5} align='start'>
                    <Heading>{feature.title}</Heading>
                    <Text maxWidth='535px' fontWeight='400'>
                      {feature.body}
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          </Stack>
        </VStack>
      </Container>
    </VStack>
  );
}
