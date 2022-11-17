import * as React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  Divider,
} from '@chakra-ui/react'

import { Cardblog } from 'components/card/card_blog';
import { Card, Grid, Row } from "@nextui-org/react";

import { SEO } from 'components/seo/seo'
import { FallInPlace } from 'components/motion/fall-in-place'
import { Hero } from 'components/hero'
import { Link, Br } from '@saas-ui/react'
import { Em } from 'components/typography'
import { ChakraLogo} from 'components/logos'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiSettings,
  FiSmartphone,
} from 'react-icons/fi'
import { Features } from 'components/features'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Faq } from 'components/faq'
import { Fasilitas } from 'components/fasilitas/fasilitas'
import { ButtonLink } from 'components/button-link/button-link'
import { Testimonial, Testimonials } from 'components/testimonials'

import faq from 'data/faq'
import testimonials from 'data/testimonials'
import pricing from 'data/pricing'

import {
  Highlights,
  HighlightsItem,
} from 'components/highlights'

import Typewriter from 'typewriter-effect';

import Terminal from '@nitric/react-animated-term'
import { FaClipboardCheck, FaHubspot, FaInfinity, FaLaptopCode, FaReact } from 'react-icons/fa';

const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴"];
const termLines = [
  {
    text: "yarn i trpl-pwbi",
    cmd: true
  },
  {
    color:"#9BDBE0",
    text: "✔ [1/4] 🔍  Resolving packages",
    cmd: false,
    repeat: true,
    repeatCount: 1,
    frames: spinnerFrames.map(function(spinner) {
      return {
        text: spinner + " [1/4] 🔍  Resolving packages...",
        delay: 80
      };
    })
  },
  {
    color:"#9BDBE0",
    text: "✔ [2/4] 🚚  Fetching packages...",
    cmd: false,
    repeat: true,
    repeatCount: 1,
    frames: spinnerFrames.map(function(spinner) {
      return {
        text: spinner + " [2/4] 🚚  Fetching packages...",
        delay: 80
      };
    })
  },
  {
    color:"#9BDBE0",
    text: "✔ [3/4] 🔗  Linking dependencies...",
    cmd: false,
    repeat: true,
    repeatCount: 1,
    frames: spinnerFrames.map(function(spinner) {
      return {
        text: spinner + " [3/4] 🔗  Linking dependencies...",
        delay: 80
      };
    })
  },
  {
    color:"#9BDBE0",
    text: "✔ [4/4] 📃  Building fresh packages...",
    cmd: false,
    repeat: true,
    repeatCount: 1,
    frames: spinnerFrames.map(function(spinner) {
      return {
        text: spinner + " [4/4] 📃  Building fresh packages...",
        delay: 80
      };
    })
  },
  {
    color:'#25C93F',
    text: "✨ Done in 4.91s.",
    cmd: false
  },
  {
    text: "🚀 Hello, Welcome to our website",
    cmd: false
  },
  {
    text: "",
    cmd: true
  }
];


const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="TRPL PWBI"
        description="Teknologi Rekayasa Perangkat Lunak Politeknik Wilmar Bisnis Indonesia"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <FasilitasSection />

        <TestimonialsSection />

        {/* <FaqSection /> */}
        
      </Box>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg:60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                <Typewriter
                  options={{
                    strings: ['Teknologi Rekayasa Perangkat Lunak', 
                    'Politeknik Wilmar Bisnis Indonesia'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Kami bertujuan untuk menghasilkan lulusan 
                yang <Em>terampil, teruji</Em> dan <Em>tersertifikasi </Em>
                serta berjiwa <Em>entrepreneur</Em>.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <ChakraLogo height="60px" />
              </HStack>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://wbi.ac.id/calon-mahasiswa/registrasi">
                  Daftar
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/about"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Tentang Kami
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width="1200px"
                  height="762px"
                  alt="TRPL"
                  quality="75"
                  priority             
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 10, lg:10 }} >
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Box
            margin="0 auto"
          >
            <FallInPlace delay={2}>
              <Box margin="7" overflow="hidden" height="100%">
              <HighlightsItem
                colSpan={[1, null, 3]}
                title="Skill yang akan kamu kuasai"
              >
                <Text color="muted" fontSize="lg">
                  Dalam mata perkuliahan di Politeknik Wilmar Bisnis Indonesia terutama prodi 
                  Teknologi Rekayasa Perangkat Lunak, kami pastikan kamu akan menguasai 
                  beberapa skill yang akan membantu hidup kamu, terutama di bidang teknologi 
                  dan entrepreneur.
                </Text>
                <Wrap mt="8">
                  {[
                    'coding',
                    'algoritma',
                    'SDLC',
                    'mobile dev',
                    'front end',
                    'back end',
                    'database',
                    'design',
                    'user interface',
                    'user experience',
                    'motion',
                    'python',
                    'javascript',
                    'flutter',
                    'C++',
                    'framework',
                    'dan masih banyak lagi',
                  ].map((value) => (
                    <Tag
                      key={value}
                      variant="subtle"
                      colorScheme="purple"
                      rounded="full"
                      px="3"
                    >
                      {value}
                    </Tag>
                  ))}
                </Wrap>
              </HighlightsItem>
              </Box>
            </FallInPlace>
          </Box>
          {/* <Box overflow="hidden" height='320px' width="150%" > */}
          <Terminal
          height={340}
            lines={termLines}
            interval={80}
          />

          {/* </Box> */}
        </Stack>
      </Container>

      <Features
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="center"
          as="p"
        >
          Skill Path Kurikulum
        </Heading>
      }
      description={
        <>
          Adaptif terhadap perkembangan teknologi, kurikulum dirancang berstandar internasional
          <Br />
          yang disusun bersama industri mengedepankan praktikum sesuai dengan kebutuhan

          pengembangan perangkat lunak terkini.
        </>
      }
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={7}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Front End',
            icon: FaLaptopCode,
            description: 'Memindahkan desain dari UI designer ke dalam bentuk yang interaktif dan membuat desain tersebut menjadi hidup',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Back End',
            icon: FiSettings,
            description:
              'Memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Mobile Apps Dev',
            icon: FiSmartphone,
            description:
              'Membuat aplikasi mobile berbasis Android dan iOS.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'DevOps Engineer',
            icon: FaInfinity,
            description:
              'Mengembangkan solusi skala besar dalam sebuah software.',
            iconPosition: 'left',
            delay: 1.1,
          }, 
          {
            title: 'Quality Assurance',
            icon: FaClipboardCheck,
            description:
              'Memastikan sebuah produk yang akan dilepas ke pasaran sudah memenuhi semua standar kualitas untuk setiap komponennya.',
            iconPosition: 'left',
            delay: 1.1,
          },
          {
            title: 'Creative Technology',
            icon: FaReact,
            description:
              'Selalu berpikir kreatif dan up-to-date dalam hal tren teknologi sehingga bisa menciptakan sebuah produk teknologi.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}



const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('npx trplpwbi')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 3  ]} title="NPX Introduction Card">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Kamu bisa ketik atau copy command <Em>dibawah</Em> ini 
            di terminal kamu sekarang untuk mempelajari lebih 
            lanjut tentang kami.
            <Em> Pastikan {' '}<Link href="https://nodejs.org/en/">Node.js</Link> sudah terinstal ya</Em>.
          </Text>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            boxSize="auto"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                npx
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                trplpwbi
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Kompetensi Lulusan
        </Heading>
      }
      description={
        <>
          Lulusan Sarjana Terapan TRPL sangat spesifik dan berorientasi kompetensi 
          yang dibutuhkan oleh software house atau bagian IT dalam sebuah perusahan.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Software Engineer ',
          icon: FiBox,
          description:
            'Sebagai perancang perangkat lunak di perusahaan atau software house.',
          variant: 'inline',
        },
        {
          title: 'Software Development ',
          icon: FiCode,
          description:
            'Sebagai pengembang perangkat lunak pada perusahaan atau software house.',
          variant: 'inline',
        },
        {
          title: 'Project Management ',
          icon: FaHubspot,
          description:
            'Sebagai pengelola pengembangan perangkat lunak di software house.',
          variant: 'inline',
        },
      ]}
    />
  )
}


const FasilitasSection = () => {
  return <Fasilitas />
}

const FaqSection = () => {
  return <Faq {...faq} />
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []]
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: 'Beasiswa 100% untuk siswa beprestasi.',
        href: '#',
      },
    },
  }
}
