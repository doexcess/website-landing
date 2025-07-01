import { DiamondIcon } from '@/components/svgs';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function About() {
  const headingSize = useBreakpointValue({
    base: '2xl',
    sm: '3xl',
    md: '4xl',
    lg: '5xl',
  });

  const subHeadingSize = useBreakpointValue({
    base: 'xl',
    sm: '2xl',
    md: '3xl',
  });

  return (
    <Stack
      minHeight={{ base: 'auto', md: '706px', lg: '906px' }}
      width='full'
      align='center'
      justify='center'
      overflow='hidden'
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 8, md: 12, lg: 16 }}
      backgroundColor='#F7F8F8'
    >
      <Container maxW='container.xl'>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          alignItems='center'
          spaceX={{ base: 8, md: 10 }}
        >
          <VStack
            align={{ base: 'center', md: 'start' }}
            // spaceX={{ base: 8, md: 12, lg: 16 }}
            gap={10}
          >
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
                fontWeight='medium'
              >
                <DiamondIcon />
                About
              </Text>
            </Box>

            {/* Main Heading Section */}
            <VStack align={{ base: 'center', md: 'start' }}>
              <Heading
                as='h1'
                color='#080930'
                fontSize={headingSize}
                lineHeight={1.2}
                fontWeight='bold'
                textAlign={{ base: 'center', md: 'start' }}
              >
                Where Simplicity Meets Impact
              </Heading>

              <Text
                color='#434453'
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight={1.6}
                textAlign={{ base: 'center', md: 'start' }}
              >
                At Doexcess, we believe running a business, community, or event
                shouldn&apos;t feel like juggling 10 tools at once. That&apos;s
                why we built an all-in-one platform that automates the
                busywork—so you can focus on what truly matters: your people.
              </Text>
            </VStack>

            {/* Our Story Section */}
            <VStack align={{ base: 'center', md: 'start' }}>
              <Heading
                as='h2'
                color='#080930'
                fontSize={subHeadingSize}
                lineHeight={1.2}
                fontWeight='bold'
                textAlign={{ base: 'center', md: 'start' }}
              >
                Our Story
              </Heading>

              <Text
                color='#434453'
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight={1.6}
                textAlign={{ base: 'center', md: 'start' }}
              >
                We started in [Year] after [Founder&apos;s Name], a [former
                community leader/event organizer/business owner], grew
                frustrated with clunky tools that made member management feel
                like a chore. Why waste hours onboarding members, chasing
                payments, or manually sending reminders when technology could do
                it better?
                <br />
                <br />
                So, we created Doexcess—a platform that combines the heart of
                community-building with the brains of automation. Today,
                thousands of teams worldwide use Doexcess to save time, boost
                engagement, and grow smarter.
              </Text>
            </VStack>
          </VStack>

          {/* Image - Hidden on mobile, visible on md and up */}
          <Box
            display={{ base: 'none', md: 'flex' }}
            width='full'
            height='full'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src='/images/org.png'
              alt='Doexcess about section illustration'
              width={600}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
              }}
              priority
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
