import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { NextPage } from 'next'
import { Image } from "@nextui-org/react";

import { useMDXComponent } from 'next-contentlayer/hooks'
import { Section } from 'components/section'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Center, Heading, SimpleGrid } from '@chakra-ui/react'
import { PageTransition } from 'components/motion/page-transition'

export async function getStaticPaths() {
    const paths = allPosts.map((post) => post.url)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    return {
        props: {
            post,
        },
    }
}

const PostLayout: NextPage = ({ post }: any) => {
    const MDXContent = useMDXComponent(post.body.code)
    
    return (
    <>
    <Head>
        <title>TRPL PWBI | {post.title}</title>
    </Head>
    <div className="mx-auto max-w-2xl py-16 text-center">
        <Section>
            <BackgroundGradient zIndex="-1" />
            <Center height="100%">
                <PageTransition width="100%">
                    <Heading lineHeight="short" fontSize="xxx-large" textAlign="center" as="p">
                        {post.title}
                    </Heading>
                <br></br>
                    <Center>
                        <SimpleGrid alignContent="center" columns={1} gap="0">
                            <Center>
                                <p className="mb-1 text-3xl font-bold">{post.author}</p>
                            </Center>
                            <Center>
                                <time dateTime={post.date} className="text-sm text-slate-600">
                                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                                </time>
                            </Center>
                        </SimpleGrid>
                    </Center>
                <br></br>
                <Image
                    showSkeleton
                    width={300}
                    height={300}
                    src={post.image}
                    alt="Artikel TRPL"
                    />
                </PageTransition>
            </Center>
            <br></br>
            <div className="cl-post-body">
                <MDXContent />
            </div>
        </Section>
    </div>
    </>
    )
}

export default PostLayout
