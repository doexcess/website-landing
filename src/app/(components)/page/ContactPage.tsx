'use client';

import React, { useState } from 'react';
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
  Select,
} from '@chakra-ui/react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import SelectBox from '@/components/ui/select';

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
  { label: 'Choose an option that best fits your purpose', value: '' },
  { label: 'General Inquiry', value: 'General Inquiry' },
  { label: 'Support', value: 'Support' },
  { label: 'Partnership', value: 'Partnership' },
  { label: 'Feedback', value: 'Feedback' },
];

const methods = [
  { label: 'Choose one option', value: '' },
  { label: 'Email', value: 'Email' },
  { label: 'Phone', value: 'Phone' },
  { label: 'WhatsApp', value: 'WhatsApp' },
];

const socials = [
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/' },
];

const ContactPage = () => {
  const headingSize = { base: '2xl', md: '4xl' };

  // Form state
  const [formData, setFormData] = useState({
    inquiryPurpose: '',
    description: '',
    fullName: '',
    email: '',
    organization: '',
    phoneNumber: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.inquiryPurpose || formData.inquiryPurpose === '') {
      alert('Please select an inquiry purpose');
      return;
    }

    if (!formData.description || formData.description === '') {
      alert('Please select a description');
      return;
    }

    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }

    if (!formData.message.trim()) {
      alert('Please enter your message');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(
        "Your message has been sent successfully! We'll get back to you soon."
      );

      // Reset form
      setFormData({
        inquiryPurpose: '',
        description: '',
        fullName: '',
        email: '',
        organization: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          data-aos='fade-up'
        >
          Let's Get in Touch
        </Heading>
        {/* Info Cards */}
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={6} mb={10}>
          {infoCards.map((card, index) => (
            <VStack
              key={card.label}
              bg='#fff'
              p={0}
              align='left'
              gap={2}
              data-aos='fade-up'
              data-aos-delay={100 + index * 100}
            >
              <Box border='1px solid #4045E1' p={2} mb={2} width={10}>
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
        <HStack
          w='full'
          align='center'
          mb={8}
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <Box height='1px' bg='#C0C1C6' flex='1' />
        </HStack>

        <HStack
          w='full'
          align='start'
          mb={8}
          data-aos='fade-up'
          data-aos-delay='500'
        >
          <Text color='#000' fontWeight='bold' fontSize={20}>
            Or fill out the form below
          </Text>
        </HStack>
        {/* Contact Form */}
        <Box maxW='100%' color='#000' data-aos='fade-up' data-aos-delay='600'>
          <form onSubmit={handleSubmit}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={4}>
              <div data-aos='fade-right' data-aos-delay='700'>
                <label>Inquiry Purpose</label>
                <SelectBox
                  size='lg'
                  data={purposes}
                  required={true}
                  value={formData.inquiryPurpose}
                  onChange={(e: any) =>
                    handleInputChange('inquiryPurpose', e.value)
                  }
                  placeholder='Choose an option that best fits your purpose'
                />
              </div>
              <div data-aos='fade-left' data-aos-delay='800'>
                <label>Description that fits you</label>
                <SelectBox
                  size='lg'
                  data={methods}
                  required={true}
                  value={formData.description}
                  onChange={(e: any) =>
                    handleInputChange('description', e.value)
                  }
                  placeholder='Choose an option that best fits your description'
                />
              </div>
              <div data-aos='fade-right' data-aos-delay='900'>
                <label>Full Name</label>
                <Input
                  placeholder='Enter your full name'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  required
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange('fullName', e.target.value)
                  }
                />
              </div>
              <div data-aos='fade-left' data-aos-delay='1000'>
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
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div data-aos='fade-right' data-aos-delay='1100'>
                <label>Organization</label>
                <Input
                  placeholder='Enter your organization'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                  value={formData.organization}
                  onChange={(e) =>
                    handleInputChange('organization', e.target.value)
                  }
                />
              </div>
              <div data-aos='fade-left' data-aos-delay='1200'>
                <label>Phone Number</label>
                <Input
                  placeholder='Enter your phone number'
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='8px'
                  border='1px solid #D4D5D8'
                  borderColor='#D4D5D8'
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange('phoneNumber', e.target.value)
                  }
                />
              </div>
            </SimpleGrid>
            <Box mb={8} data-aos='fade-up' data-aos-delay='1300'>
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
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
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
              data-aos='zoom-in'
              data-aos-delay='1400'
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Form'}
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
