'use client';

import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import BasicFooter from '@/app/(components)/BasicFooter';

export default function OnboardSuccessPage() {
  const router = useRouter();
  return (
    <Center minH='100vh' bg='#f4f6fa' px={4} display='flex' flexDir='column'>
      <Box
        bg='white'
        borderRadius='2xl'
        boxShadow='0 8px 32px 0 rgba(30,41,59,0.10)'
        p={{ base: 8, md: 16 }}
        maxW='lg'
        w='full'
        textAlign='center'
      >
        <VStack gap={6}>
          {/* <Icon as={FaCheckCircle} boxSize={20} color='#38A169' /> */}
          <Image src='/images/verified.png' alt='doexcess' width={100} />

          <Heading as='h1' size='lg' color='#2326a3' fontWeight='extrabold'>
            You&apos;ve Joined Successfully!
          </Heading>
          <Text color='#434453' fontSize='lg'>
            Welcome to the organization. Your registration is complete and you
            now have access to all member features. We&apos;re excited to have
            you onboard!
          </Text>
          <Button
            colorScheme='blue'
            size='lg'
            borderRadius='md'
            color='white'
            bg='#4045E1'
            _hover={{ bg: '#2326a3' }}
            fontWeight={700}
            fontSize='lg'
            mt={4}
            onClick={() => router.push('/signin')}
          >
            Login to your Dashboard
          </Button>
        </VStack>
      </Box>
      <BasicFooter />
    </Center>
  );
}
