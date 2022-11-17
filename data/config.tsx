import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'


const siteConfig = {
  logo: Logo,
  seo: {
    title: 'TRPL PWBI',
    description: 'Teknologi Rekayasa Perangkat Lunak Politeknik Wilmar Bisnis Indonesia',
    image:
      'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
    site_name: 'TRPL PWBI',
    imageWidth: 1280,
    imageHeight: 720
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'benefits',
        label: 'Kurikulum',
      },
      {
        id: 'fasilitas',
        label: 'Fasilitas',
      },
      {
        label: 'Tentang',
        href: '/about',
      },
      {
        label: 'Artikel',
        href: '/blog',
      },
      {
        label: 'Daftar',
        href: 'https://wbi.ac.id/calon-mahasiswa/registrasi',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Made with{' '}
        <Link href="https://nextjs.org/showcase">Next.js</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:muslim.ramli@ac.id',
        label: 'Contact',
      },
      {
        href: 'https://instagram.com/trplwbi',
        label: <FaInstagram size="14" />,
      },
      {
        href: 'https://github.com/orgs/HIMATRPL-WBI/dashboard',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://youtu.be/RFFSWgZR57M',
        label: <FaYoutube size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
