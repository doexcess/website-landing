'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { MdHourglassEmpty } from 'react-icons/md';
import Header from '../Header';
import Footer from '../Footer';
import Faq from '../Faq';

const FaqsPage = () => {
  const headingSize = {
    base: '2xl',
    sm: '3xl',
    md: '4xl',
    lg: '5xl',
  };

  return (
    <Box bg='#F7F8F8' minH='100vh'>
      {/* Hero Section */}
      <Stack
        minHeight={{ base: 'auto', md: '200px', lg: '200px' }}
        width='full'
        align='center'
        justify='center'
        overflow='hidden'
        px={{ base: 4, md: 0, lg: 0 }}
        pb={{ base: 8, md: 12, lg: 8 }}
        pt={{ base: 0, md: 0, lg: 0 }}
        position='relative'
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
          linear-gradient(104deg, rgba(255, 255, 255, 0.55) 0%, rgba(199, 202, 255, 1) 100%),
          url('/images/home-grid.png')
        `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box pt={{ base: 32, md: 40 }} pb={0} bg='#F7F8F8'>
          <Container maxW='container.xl'>
            <VStack gap={2} mb={10}>
              <Heading
                as='h1'
                fontSize={headingSize}
                color='#080930'
                textAlign='center'
                fontWeight='bold'
              >
                Frequent Asked Questions
              </Heading>
            </VStack>
          </Container>
        </Box>
      </Stack>

      <Container maxW='container.md'>
        <VStack gap={6} align='start' justify='center' h='full'>
          <Faq currentPage={true} />
        </VStack>
      </Container>
    </Box>
  );
};

export default FaqsPage;
