'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Stack,
  Icon,
  Image,
  Container,
} from '@chakra-ui/react';
import { FaUserPlus } from 'react-icons/fa';
import useBusinessInfo from '@/hooks/page/useBusinessInfo';
import { useDispatch } from 'react-redux';
import { addCustomer } from '@/redux/slices/onboardSlice';
import toast from 'react-hot-toast';
import BasicFooter from '@/app/(components)/BasicFooter';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
};

const SignupForm = () => {
  const { business_info } = useBusinessInfo();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const businessId = searchParams.get('business_id');
  const businessName =
    business_info?.business_name ||
    (businessId
      ? businessId
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase())
      : 'Your Organization');

  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const validate = () => ({
    name: form.name.trim().length < 2,
    email: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email),
    phone: form.phone.trim().length < 7,
  });
  const errors = validate();
  const isValid = !errors.name && !errors.email && !errors.phone;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    setSubmitted(true);
    if (isValid && businessId) {
      try {
        await dispatch(
          addCustomer({
            name: form.name,
            email: form.email,
            phone: form.phone,
            business_id: businessId,
          }) as any
        ).unwrap();
        toast.success('Signup successful!');
        setForm({ name: '', email: '', phone: '' });
        setTouched({ name: false, email: false, phone: false });
        router.push('/onboard/success');
      } catch (err: any) {
        toast.error(err?.message || 'Signup failed. Please try again.');
      } finally {
        setSubmitted(false);
      }
    } else {
      setSubmitted(false);
    }
  };

  // Responsive width for the card
  const cardW = { base: '100%', md: '900px' };
  const cardMinH = { base: '20vh', md: '600px' };

  if (!businessId) {
    return (
      <Container maxW='container.sm' py={32}>
        <Box
          bg='#fff'
          p={8}
          borderRadius='16px'
          boxShadow='0 2px 16px 0 rgba(19, 69, 98, 0.06)'
        >
          <Heading as='h2' size='lg' color='#4045E1' mb={4} textAlign='center'>
            Invalid Access
          </Heading>
          <Text color='#434453' textAlign='center'>
            This signup page requires a valid business ID. Please use the
            correct link provided by your business or organization.
          </Text>
        </Box>
      </Container>
    );
  }

  return (
    <Flex
      minH='100vh'
      bg='#f4f6fa'
      align='center'
      justify='center'
      direction='column'
      py={{ base: 8, md: 0 }}
      px={{ base: 4, md: 0 }}
    >
      <Box
        w={cardW}
        minH={cardMinH}
        bg='white'
        borderRadius='2xl'
        boxShadow='0 8px 32px 0 rgba(30,41,59,0.10)'
        overflow='hidden'
        display='flex'
        flexDir={{ base: 'column-reverse', md: 'row' }}
      >
        {/* Left: Form */}
        <Box
          flex='1'
          px={{ base: 6, md: 12 }}
          py={{ base: 8, md: 12 }}
          display='flex'
          flexDir='column'
          justifyContent='center'
        >
          {/* Logo */}
          <Link href='/'>
            <Flex align='center' mb={8}>
              <Image src='/images/header-logo.png' alt='doexcess' width={150} />
            </Flex>
          </Link>
          <Heading
            as='h1'
            size='lg'
            mb={2}
            color='gray.800'
            fontWeight='extrabold'
          >
            Join {business_info?.business_name}
          </Heading>
          <Text color='gray.500' mb={8} fontSize='md'>
            Welcome! Fill in your details to join{' '}
            <b>{business_info?.business_name}</b> and get started.
          </Text>
          <form onSubmit={handleSubmit}>
            <Box color='#000'>
              <Box mb={5}>
                <label>Name</label>
                <Input
                  name='name'
                  placeholder='Name'
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='md'
                  borderColor={
                    touched.name && errors.name ? 'red.300' : '#e6e9f5'
                  }
                  _focus={{
                    borderColor: '#4045E1',
                    boxShadow: '0 0 0 1px #4045E1',
                  }}
                  required
                />
                {touched.name && errors.name && (
                  <Text color='red.500' fontSize='sm' mt={1}>
                    Name must be at least 2 characters.
                  </Text>
                )}
              </Box>
              <Box mb={5}>
                <label>Email Address</label>
                <Input
                  name='email'
                  type='email'
                  placeholder='Email Address'
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='md'
                  borderColor={
                    touched.email && errors.email ? 'red.300' : '#e6e9f5'
                  }
                  _focus={{
                    borderColor: '#4045E1',
                    boxShadow: '0 0 0 1px #4045E1',
                  }}
                  required
                />
                {touched.email && errors.email && (
                  <Text color='red.500' fontSize='sm' mt={1}>
                    Enter a valid email address.
                  </Text>
                )}
              </Box>
              <Box mb={5}>
                <label>Phone Number</label>
                <Input
                  name='phone'
                  placeholder='Phone Number'
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size='lg'
                  bg='#F7F8F8'
                  borderRadius='md'
                  borderColor={
                    touched.phone && errors.phone ? 'red.300' : '#e6e9f5'
                  }
                  _focus={{
                    borderColor: '#4045E1',
                    boxShadow: '0 0 0 1px #4045E1',
                  }}
                  required
                />
                {touched.phone && errors.phone && (
                  <Text color='red.500' fontSize='sm' mt={1}>
                    Enter a valid phone number.
                  </Text>
                )}
              </Box>
              <Button
                type='submit'
                colorScheme='blue'
                size='lg'
                borderRadius='md'
                bg='#4045E1'
                _hover={{ bg: '#2326a3' }}
                fontWeight={700}
                fontSize='lg'
                disabled={submitted && !isValid}
                color='#fff'
              >
                {submitted && isValid
                  ? 'Submitting...'
                  : `Join ${business_info?.business_name}`}
              </Button>
            </Box>
          </form>
        </Box>
        {/* Right: Illustration & Info */}
        <Box
          flex='1'
          bgGradient='linear(to-br, #4045E1 0%, #3b82f6 100%)'
          color='white'
          display={{ base: 'none', md: 'flex' }}
          alignItems='center'
          justifyContent='center'
          p={0}
          m={0}
          height='auto'
        >
          <Image
            src='/images/onboarding.gif'
            alt='Connect Illustration'
            objectFit='cover'
            width='100%'
            height='100%'
            display='block'
          />
        </Box>
      </Box>
      <BasicFooter />
    </Flex>
  );
};

export default SignupPage;
