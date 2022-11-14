import { Box, Heading } from "@chakra-ui/react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Head from "next/head";

export const Fasilitas = () => {
  const list = [
    {
      title: "Pusat Inisiatif Bisnis",
      img: "/public/uploads/images/Politeknik-WBIwbic.jpg5f1513afa5687.jpg",
      price: "Wilmar Bisnis Indonesia Initiative Center",
    },
    {
      title: "Perpustakaan",
      img: "/public/uploads/images/DPUNVggMi8hxiEa4FE3JVjrl5FsOXdWW11zmiUSO.jpeg",
      price: "Perpustakaan Politeknik Wilmar Bisnis Indonesia (WBI)",
    },
    {
      title: "Laboratorium",
      img: "/public/uploads/images/komputer.jpg5f24f215ad48e.jpg",
      price: "Lab Komputer Politeknik Wilmar Bisnis Indonesia (WBI)",
    },
    {
      title: "WBI Store",
      img: "/public/uploads/images/IMG_366411.jpg5f2505cf60269.jpg",
      price: "Toko Politeknik Wilmar Bisnis Indonesia (WBI) ",
    },
    {
      title: "Food Court",
      img: "/public/uploads/images/IMG_360711.jpg5f2506efec021.jpg",
      price: "Food Court Politeknik Wilmar Bisnis Indonesia (WBI)",
    },
    {
      title: "Auditorium",
      img: "/public/uploads/images/Audit.jpg5f250b0613650.jpg",
      price: "Auditorium Politeknik Wilmar Bisnis Indonesia (WBI)",
    },
    {
      title: "Mini Theater",
      img: "/public/uploads/images/IMG_369711.jpg5f25072cf22ad.jpg",
      price: "Mini Theater Politeknik Wilmar Bisnis Indonesia (WBI)",
    },
  ];

  return (
    <Box
      id="fasilitas"
      height="auto"
      left={{ lg: '60%', xl: '55%' }}
      maxW="1100px"
      margin="0 auto"
    >
      <Heading
        lineHeight="short"
        fontSize={['2xl', null, '4xl']}
        textAlign="center"
        as="p"
        margin="10"
      >
        Fasilitas Prodi Teknologi Rekayasa Perangkat Lunak
      </Heading>
    <Grid.Container gap={1} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={16} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://wbi.ac.id/" + item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </Box>
  );
}
