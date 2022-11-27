import {
    Center,
    Heading, LinkBox,
    LinkOverlay,
    SimpleGrid,
    Text,
    Wrap
} from '@chakra-ui/react'
import {
    Card, 
    CardBody,
    CardFooter, 
    CardHeader, 
    CardMedia, 
    CardTitle, 
    Persona
} from '@saas-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

const Blog: NextPage = ({ posts }: any) => (
    <div className="mx-auto max-w-2xl py-16 text-center">
        <Section height="calc(30vh - 200px)" innerWidth="container.sm">
            <BackgroundGradient zIndex="-1" />
            <Center height="100%">
                <PageTransition width="100%">
                <Head>
                    <title>Artikel | TRPL PWBI</title>
                </Head>
                <Heading lineHeight="short" fontSize={['2xl', null, '4xl']} textAlign="center" as="p">
                    Artikel
                </Heading>
                </PageTransition>
            </Center>
        </Section>
        <Center>
            <Wrap spacing='40px' justify='center'>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
            </Wrap>
        </Center>
    </div>
)

function PostCard(post) {
    return (
    <div className="mb-6">
        <Card as={LinkBox} width="100%" maxW="400px" boxShadow='base' border="1px" borderColor="-moz-initial" isHoverable variant="outline">
            <CardHeader>
                <Persona name={post.author} secondaryLabel={post.author_role} src={post.author_image} presence="online" size="sm" me="2" />
                <LinkOverlay href={post.url}>
                </LinkOverlay>
            </CardHeader>
            <CardMedia height="300px" alignItems="center" bgImage={post.image} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <Text fontSize="md" color="muted">
                {post.description}
                </Text>
            </CardBody>
            <CardFooter>
                <Text fontSize="md" color="muted">
                    <time dateTime={post.date} className="block text-sm text-slate-600">
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>
                </Text>
            </CardFooter>
            </Card>
    </div>
    )
}


export default Blog

export async function getStaticProps() {
    const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
})
return { props: { posts } }
}
