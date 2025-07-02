import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const BasicFooter = () => {
  return (
    <Box color='gray.800' marginTop='5'>
      <Text>
        &copy; <Link href={'/'}> Doexcess</Link> {new Date().getFullYear()}
      </Text>
    </Box>
  );
};

export default BasicFooter;
