import { DiamondIcon } from '@/components/svgs';
import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function About() {
  const headingSize = {
    base: '2xl',
    sm: '3xl',
    md: '4xl',
    lg: '5xl',
  };

  const subHeadingSize = {
    base: 'xl',
    sm: '2xl',
    md: '3xl',
  };

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
          columns={{ base: 1, md: 1, lg: 2 }}
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
                display={{ mdDown: 'none', lg: 'block' }}
                lineHeight={1.6}
                textAlign={{ base: 'center', md: 'start' }}
              >
                At Doexcess, we believe digital work shouldn&apos;t feel
                disorganized or overwhelming. We&apos;ve seen people experience
                the stress of juggling scattered tools, missing tasks, and
                managing important workflows with systems that simply
                didn&apos;t scale. So we decided to build something more
                efficient.
              </Text>

              {/* Mobile */}
              <Text
                color='#434453'
                fontSize={{ base: 'md', md: 'lg' }}
                display={{ mdDown: 'block', lg: 'none' }}
                lineHeight={1.6}
                textAlign={{ base: 'center', md: 'start' }}
              >
                At Doexcess, we&apos;re building a platform that helps
                individuals, teams, and organizations simplify tasks, reduce
                chaos, and stay organized — all in one place. We&apos;ve seen
                people experienced the stress of switching between tools,
                missing deadlines, and managing scattered workflows. So we
                created a smarter way to work. Doexcess is a system built to
                help you optimize how you work — with more clarity, more
                control, and less stress.
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
                It all started early last year when I began working on a project
                I initially called SkillUp. The idea was simple: make practical
                knowledge affordable and accessible to as many people as
                possible. But when I discovered the name was already taken, I
                rebranded it to Learnexcess and kept building—layer by layer.
                <br />
                I&apos;ve always had a passion for creating things, especially
                tools that solve real problems. And over time, I noticed
                something: many creators were struggling to manage their digital
                offerings effectively. There were too many moving parts—too many
                tools that didn&apos;t quite fit together. That&apos;s when it
                hit me: “What if we build an all that can solve this specific
                problem?”...{' '}
                <Link href='/about' style={{ textDecoration: 'none' }}>
                  <Box
                    as='span'
                    color='#4045E1'
                    fontWeight='bold'
                    fontSize={{ base: 'md', md: 'lg' }}
                    _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    Read more
                  </Box>
                </Link>
              </Text>
            </VStack>
          </VStack>

          {/* Image - Hidden on mobile, visible on md and up */}
          <Box
            display={{ base: 'none', md: 'none', lg: 'flex' }}
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
