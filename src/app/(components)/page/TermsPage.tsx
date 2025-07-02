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
import toast from 'react-hot-toast';

const TermsPage = () => {
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
                Terms of Service
              </Heading>
              <Text color='#6B6B8B' fontSize='md' textAlign='center'>
                Effective Date: 02/07/2025
              </Text>
            </VStack>
          </Container>
        </Box>
      </Stack>

      <Container maxW='container.md' py={{ base: 20, md: 10 }} minH='70vh'>
        <VStack gap={6} align='start' justify='center' h='full'>
          <Heading as='h2' size='md' color='#080930'>
            Terms of Service
          </Heading>
          <Text color='#434453'>
            Welcome to Doexcess! These Terms of Service (&quot;Terms&quot;)
            govern your use of the Doexcess platform, including our website,
            app, tools, and all related services (collectively, the
            &quot;Services&quot;). By using our Services, you agree to these
            Terms. If you do not agree, please do not use the platform.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            1. Acceptance of Terms
          </Heading>
          <Text color='#434453'>
            By accessing or using Doexcess, you agree to be bound by these Terms
            and our Privacy Policy. If you are using the Services on behalf of a
            company or organization, you represent that you have the authority
            to bind them to these Terms.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            2. Eligibility
          </Heading>
          <Text color='#434453'>
            To use Doexcess, you must be at least 18 years old or have legal
            capacity to form a binding agreement in your jurisdiction. The
            platform is not intended for use by children.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            3. Account Registration
          </Heading>
          <Text color='#434453'>
            You may be required to create an account to use certain features.
            You agree to:
          </Text>
          <Box as='ul' pl={6} color='#434453'>
            <li>Provide accurate and complete information</li>
            <li>Keep your login credentials confidential</li>
            <li>Be responsible for any activity under your account</li>
          </Box>
          <Text color='#434453'>
            We reserve the right to suspend or terminate accounts that violate
            these Terms.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            4. Use of the Services
          </Heading>
          <Text color='#434453'>You agree to use Doexcess:</Text>
          <Box as='ul' pl={6} color='#434453'>
            <li>In compliance with all applicable laws and regulations</li>
            <li>Only for lawful and authorized purposes</li>
            <li>
              Without violating the rights of others or disrupting the platform
            </li>
          </Box>
          <Text color='#434453'>
            <b>Prohibited actions include, but are not limited to:</b>
          </Text>
          <Box as='ul' pl={6} color='#434453'>
            <li>
              Reverse engineering, duplicating, or exploiting the platform
            </li>
            <li>Uploading harmful or malicious content</li>
            <li>Engaging in unauthorized data scraping or harvesting</li>
          </Box>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            5. Subscriptions &amp; Payments
          </Heading>
          <Text color='#434453'>
            Some features of Doexcess may require a paid subscription. By
            subscribing:
          </Text>
          <Box as='ul' pl={6} color='#434453'>
            <li>You agree to pay all fees specified during checkout</li>
            <li>
              Payments are billed in advance and are non-refundable unless
              otherwise stated
            </li>
            <li>We may change pricing or features with prior notice</li>
            <li>
              Failure to pay may result in suspension or termination of access
            </li>
          </Box>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            6. Intellectual Property
          </Heading>
          <Text color='#434453'>
            All content, software, design, and branding on Doexcess are the
            property of Doexcess or its licensors and are protected by
            intellectual property laws. You are granted a limited,
            non-transferable license to use the Services in accordance with
            these Terms.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            7. Termination
          </Heading>
          <Text color='#434453'>
            We reserve the right to suspend or terminate your account and access
            to the Services at our discretion, especially if:
          </Text>
          <Box as='ul' pl={6} color='#434453'>
            <li>You violate these Terms</li>
            <li>You engage in misuse or abuse of the platform</li>
            <li>Required payments are not made</li>
          </Box>
          <Text color='#434453'>
            You may also terminate your account at any time by contacting us.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            8. Disclaimers
          </Heading>
          <Text color='#434453'>
            The Services are provided &quot;as is&quot; and &quot;as
            available.&quot; We do not guarantee that the platform will be
            uninterrupted, error-free, or fully secure. Use of Doexcess is at
            your own risk.
          </Text>
          <Text color='#434453'>
            We disclaim all warranties, express or implied, including but not
            limited to merchantability, fitness for a particular purpose, and
            non-infringement.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            9. Limitation of Liability
          </Heading>
          <Text color='#434453'>
            To the fullest extent permitted by law, Doexcess and its affiliates
            shall not be liable for any indirect, incidental, special, or
            consequential damages arising out of your use of the Services,
            including but not limited to data loss, business interruption, or
            service delays.
          </Text>
          <Text color='#434453'>
            Our total liability to you for any claim shall not exceed the amount
            you paid to use the Services in the 6 months prior to the incident.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            10. Modifications
          </Heading>
          <Text color='#434453'>
            We may modify these Terms from time to time. When we do, we will
            update the &quot;Effective Date&quot; at the top and notify you of
            material changes. Continued use of the Services after such updates
            constitutes acceptance of the new terms.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            11. Third-Party Services
          </Heading>
          <Text color='#434453'>
            Doexcess may integrate with or link to third-party services. We are
            not responsible for the content, policies, or functionality of those
            third-party platforms. Use of such services is at your own risk.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            12. Governing Law
          </Heading>
          <Text color='#434453'>
            These Terms shall be governed by and interpreted in accordance with
            the laws of [Insert Country/State], without regard to its conflict
            of law principles.
          </Text>

          <Heading as='h3' size='sm' color='#2326a3' mt={6}>
            13. Contact Us
          </Heading>
          <Text color='#434453'>
            If you have any questions about these Terms, please contact us:
          </Text>
          <Box pl={4} color='#434453'>
            <Text>
              Email: <b>hello@doexcess.com</b>{' '}
              <Box
                as='button'
                ml={2}
                px={2}
                py={1}
                fontSize='sm'
                color='#4045E1'
                bg='gray.100'
                borderRadius='md'
                _hover={{ bg: 'gray.200' }}
                onClick={() => {
                  navigator.clipboard.writeText('hello@doexcess.com');
                  toast.success('Email copied to clipboard!');
                }}
              >
                Copy Email
              </Box>
            </Text>
            <Text>Business Name: Doexcess</Text>
            <Text>Website: https://doexcess.com</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default TermsPage;
