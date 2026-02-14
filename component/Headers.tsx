"use client"

import { useEffect, useState } from "react"

import { Box, HStack, Image, Marquee } from "@chakra-ui/react"

interface IProduct {
  id: number;
  title: string;
  images: string[] ; 
  thumbnail: string;
}
function MarqueeItems({ images }: { images: string[] }) {
  return (
    <>
      {images.map((src, i) => (
        <Marquee.Item key={i} py="2">
          <Image
            src={src}
            alt={`Product image ${i + 1}`}
            width="full"
            height="200px"
            objectFit="cover"
            rounded="lg"
            shadow="md"
          />
        </Marquee.Item>
      ))}
    </>
  )
}

function Headers() {
  const [pic, setPic] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products")
      const { products } = await res.json()
      setPic(products)
    }
    fetchProducts()
  }, [])

  const firstImages = pic.map(p => p.images[0])
  const countImages = firstImages.slice(0, 12)

  return (
    <Box height="200px" overflow="hidden" perspective="500px">
      <HStack
        gap="4"
        height="200px"
        transform="rotateX(20deg)"
        transformOrigin="center top"
      >
        <Marquee.Root side="top" flex="1" autoFill>
          <Marquee.Viewport>
            <Marquee.Content>
              <MarqueeItems images={countImages} />
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>

        <Marquee.Root side="bottom" flex="1" autoFill>
          <Marquee.Viewport>
            <Marquee.Content>
              <MarqueeItems images={countImages} />
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>

        <Marquee.Root side="top" flex="1" autoFill>
          <Marquee.Viewport>
            <Marquee.Content>
              <MarqueeItems images={countImages} />
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>
      </HStack>
    </Box>
  )
}





export default Headers