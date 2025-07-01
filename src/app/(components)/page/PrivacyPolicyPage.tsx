'use client';

import React from 'react';
import { Box, Container, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { MdLockOutline } from 'react-icons/md';
import Header from '../Header';
import Footer from '../Footer';

const PrivacyPolicyPage = () => {
  return (
    <Box bg='#F7F8F8' minH='100vh'>
      <Header handleNav={() => {}} />
      <Container maxW='container.md' py={{ base: 32, md: 40 }} minH='70vh'>
        <VStack gap={6} align='center' justify='center' h='full'>
          <Icon as={MdLockOutline} boxSize={20} color='#4045E1' />
          <Heading
            as='h1'
            fontSize={{ base: '2xl', md: '4xl' }}
            color='#080930'
            fontWeight='bold'
            textAlign='center'
          >
            Privacy Policy
          </Heading>
          <Text
            color='#434453'
            fontSize={{ base: 'md', md: 'lg' }}
            textAlign='center'
          >
            Our Privacy Policy page is coming soon.
            <br />
            We're working hard to make this available. Please check back later!
          </Text>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicyPage;
