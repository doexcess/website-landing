'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';

const infoCards = [
  {
    icon: MdPhone,
    label: 'Phone',
    value: '+234 707 218 2999',
    sub: '',
  },
  {
    icon: MdEmail,
    label: 'Email',
    value: 'hello@doexcess.com',
    sub: 'support@doexcess.com',
  },
  {
    icon: MdLocationOn,
    label: '',
    value: '18, Oke Aro Road, Agbado Station, Lagos State',
    sub: '',
  },
];

const purposes = [
  'Choose an option that best fits your purpose',
  'General Inquiry',
  'Support',
  'Partnership',
  'Feedback',
];
const methods = ['Choose one option', 'Email', 'Phone', 'WhatsApp'];

const socials = [
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/' },
];

const ContactPage = () => {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  return (
    <Box bg='#fff' minH='100vh'>
      <Container maxW='container.xl' pt={{ base: 32, md: 40 }} pb={8}>
        <Heading
          as='h1'
          fontSize={headingSize}
          color='#1A1A2E'
          fontWeight='bold'
          mb={8}
          textAlign={{ base: 'center', md: 'left' }}
        >
          Let's Get in Touch
        </Heading>
        {/* Info Cards */}
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={6} mb={10}>
          {infoCards.map((card) => (
            <VStack
              key={card.label}
              bg='#fff'
              // borderRadius='12px'
              // boxShadow='0 2px 16px 0 rgba(19, 69, 98, 0.06)'
              p={0}
              align='left'
              gap={2}
            >
              <Box
                // bg='#4045E1'
                border='1px solid #4045E1'
                p={2}
                mb={2}
                width={10}
              >
                <Icon as={card.icon} color='#4045E1' boxSize={6} />
              </Box>

              <Text color='#080930' fontSize='sm'>
                {card.value}
              </Text>
              {card.sub && (
                <Text color='#080930' fontSize='sm'>
                  {card.sub}
                </Text>
              )}
            </VStack>
          ))}
        </SimpleGrid>
        {/* Divider with text */}
        <HStack w='full' align='center' mb={8}>
          <Box height='1px' bg='#C0C1C6' flex='1' />

          {/* <Box height='1px' bg='#4045E1' flex='1' /> */}
        </HStack>

        <HStack w='full' align='start' mb={8}>
          <Text color='#000' fontWeight='bold' fontSize={20}>
            Or fill out the form below
          </Text>
        </HStack>
        {/* Contact Form */}
        <Box maxW='100%' color='#000'>
          <form onSubmit={(e) => e.preventDefault()}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={4}>
              <div>
                <label>Inquiry Purpose</label>
                <select
                  required
                  defaultValue=''
                  style={{
                    appearance: 'none',
                    // fontSize: '1.125rem',
                    background: '#F7F8F8',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    border: '1px solid #D4D5D8',
                    width: '100%',
                    marginBottom: 0,
                    color: '#000',
                    borderColor: '#D4D5D8',
                  }}
                >
                  <option value='' disabled>
                    {purposes[0]}
                  </option>
                  {purposes.slice(1).map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Description that fits you</label>
                <select
                  required
                  defaultValue=''
                  style={{
                    appearance: 'none',
                    background: '#F7F8F8',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    width: '100%',
                    marginBottom: 0,
                    border: '1px solid #D4D5D8',
                    color: '#000',
                    borderColor: '#D4D5D8',
                  }}
                >
                  <option value='' disabled>
                    {methods[0]}
                  </option>
                  {methods.slice(1).map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Full Name</label>
                <Input
                  placeholder='Enter your full name'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  required
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                />
              </div>
              <div>
                <label>Email Address</label>
                <Input
                  placeholder='Enter your email address'
                  type='email'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                  required
                />
              </div>
              <div>
                <label>Organization</label>
                <Input
                  placeholder='Enter your organization'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                />
              </div>
              <div>
                <label>Phone Number</label>
                <Input
                  placeholder='Enter your phone number'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                />
              </div>
            </SimpleGrid>
            <Box mb={8}>
              <div>
                <label>Message</label>
                <Textarea
                  placeholder='Enter your message here'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                  rows={5}
                  required
                />
              </div>
            </Box>
            <Button
              type='submit'
              colorScheme='blue'
              color='white'
              size='lg'
              borderRadius='8px'
              bg='#4045E1'
              w='sm'
              _hover={{ bg: '#2326a3' }}
              // w='full'
            >
              Submit Form
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ContactPage;
