import {
  Box, Center,
  SimpleGrid
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { Button, Card, Col, Grid, Link, Row, Spacer, Text } from "@nextui-org/react"
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { SEO } from 'components/seo/seo'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'


const About: NextPage = () => {
  return (
    <Box>
      <SEO
        title="TRPL PWBI - Teknologi Rekayasa Perangkat Lunak Politeknik Wilmar Bisnis Indonesia"
        description="Teknologi Rekayasa Perangkat Lunak Politeknik Wilmar Bisnis Indonesia"
      />
      <Box>
        <AboutSection />
      </Box>
    </Box>
  )
}

export default function AboutSection() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };

    const list = [
      {
        nama: "Muslim Ramli, S.Kom., M.Kom.",
        img: "/static/images/muslim.png",
        link:"https://muslimramli.id/"
      },
      {
        nama: "Septian Simatupang, S.Kom., M.Kom.",
        img: "/static/images/septian.jpeg",
        link:"https://wbi.ac.id/program-studi/teknologi-rekayasa-perangkat-lunak/dosen/septian-simatupang"
      },
      {
        nama: "Ronald Belferik, S.Kom., M.Kom.",
        img: "/static/images/ronald.jpeg",
        link:"https://wbi.ac.id/program-studi/teknologi-rekayasa-perangkat-lunak/dosen/ronald-belferik"
      },
      {
        nama: "Indah Clara Sari, S.Kom., M.Kom.",
        img: "/static/images/indah.jpeg",
        link:"https://wbi.ac.id/program-studi/teknologi-rekayasa-perangkat-lunak/dosen/indah-clara-sari"
      },
      {
        nama: "Taufiqurrahman, S.T., M.Kom.",
        img: "/static/images/taufiq.png",
        link:"https://fiqgant.github.io/",
        github:"https://github.com/fiqgant"
      },
    ];
    
  return (
    <>
    <Head>
        <title>TRPL PWBI | Tentang</title>
    </Head>
    <div className="mx-auto max-w-2xl py-16 text-center">
        <Section>
            <BackgroundGradient zIndex="-1" />
            <Center height="100%">
                <PageTransition width="100%">
                  <Center>
                      <Text
                      h1
                      size={50}
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                      weight="bold"
                      >
                        TEKNOLOGI REKAYASA
                      </Text>
                    </Center>
                    <Center>
                      <Text
                      h1
                      size={50}
                      css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                      }}
                      weight="bold"
                    >
                      PERANGKAT LUNAK
                    </Text>
                  </Center>
                <br></br>
                    <Center>
                        <SimpleGrid textAlign="center" alignContent="center" columns={1} gap="0">
                            <Text color="#A8ABAD">
                              Program Studi Teknologi Rekayasa Perangkat Lunak (TRPL) berdiri berdasarkan 
                              Keputusan Menteri Pendidikan dan Kebudayaan Nomor 081/D/OT/2021. Program 
                              studi ini bertujuan untuk menghasilkan lulusan yang terampil, teruji dan 
                              tersertifikasi serta berjiwa entrepreneur melalui kurikulum yang merujuk 
                              kepada Asosiasi Pendidikan Ilmu Komputer Indonesia (APTIKOM) dan standar pendidikan global.
                            </Text>
                        </SimpleGrid>
                    </Center>
                    <Spacer y={1} />
                    <Row gap={1}>
                      <Col>
                        <Card css={{ w: "100%", h: "400px" }}>
                          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                Program Studi Rekayasa Perangkat Lunak Politeknik WBI
                              </Text>
                            </Col>
                          </Card.Header>
                          <Card.Body css={{ p: 0 }}>
                            <Card.Image
                              src="./static/images/yt.gif"
                              width="100%"
                              height="100%"
                              objectFit="cover"
                              alt="Card example background"
                            />
                          </Card.Body>
                          <Card.Footer
                            isBlurred
                            css={{
                              position: "absolute",
                              bgBlur: "#ffffff66",
                              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                              bottom: 0,
                              zIndex: 1,
                            }}
                          >
                            <Row>
                              <Col>
                                <Row justify="flex-end">
                                  <Button flat auto rounded color="secondary">
                                    <Link href="https://youtu.be/RFFSWgZR57M">
                                    <Text
                                      css={{ color: "inherit" }}
                                      size={12}
                                      weight="bold"
                                      transform="uppercase"
                                    >
                                      Lihat Video Selengkapnya
                                    </Text>
                                    </Link>
                                  </Button>
                                </Row>
                              </Col>
                            </Row>
                          </Card.Footer>
                        </Card>
                      </Col>
                    </Row>
                    <Spacer y={5} />
                    <Center>
                      <Text
                      h1
                      size={50}
                      css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                      }}
                      weight="bold"
                    >
                      PROFIL DOSEN
                    </Text>
                  </Center>
                <br></br>
                
                  <Grid.Container gap={2} justify="center" >
                  {list.map((item, index) => (
                <Grid xs={12} sm={4} key={index}>
                <Row gap={1} >
                      <Col>
                        <Card css={{ w: "100%", h: "400px" }}>
                          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                          </Card.Header>
                          <Card.Body css={{ p: 0 }}>
                            <Card.Image
                              src={item.img}
                              width="100%"
                              height="100%"
                              objectFit="cover"
                              alt="Card example background"
                            />
                          </Card.Body>
                          <Card.Footer
                            isBlurred
                            css={{
                              position: "absolute",
                              bgBlur: "#ffffff66",
                              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                              bottom: 0,
                              zIndex: 1,
                            }}
                          >
                            <Row>
                              <Col>
                              <Text size={14} weight="bold" color="#000">
                                {item.nama}
                              </Text>
                              </Col>
                              <Col>
                                <Row justify="flex-end">
                                  <Button flat auto rounded color="secondary">
                                    <Link href={item.link}>
                                    <Text
                                      css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                      }}
                                      size={12}
                                      weight="bold"
                                      transform="uppercase"
                                    >
                                      Profil
                                    </Text>
                                    </Link>
                                  </Button>
                                </Row>
                              </Col>
                            </Row>
                          </Card.Footer>
                        </Card>
                      </Col>
                    </Row>
                
                </Grid>
                ))}
                </Grid.Container>


                </PageTransition>
            </Center>
        </Section>
    </div>
    </>
  )
}
