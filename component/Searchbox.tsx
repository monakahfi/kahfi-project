"use client"
import { Button, Flex, Group, Input ,Badge, Box, HStack, Icon, Image, Text, Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react"

interface IProduct {
  id: number;
  title : string;
  category : string ;
  price : number;
  brand : string;
  images: string[];
}
function Searchbox() {
    const[answer , setAnswer] = useState<IProduct[]>([])
    const [search,setSearch]=useState<string>("")
    const fetchhandler= async()=>{
        const res = await fetch(`https://dummyjson.com/products/category/${search}`)
        const {products} = await res.json();
        setAnswer(products)
    }
  return (
    <Grid
    h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      alignItems="center">
        <GridItem rowSpan={12} colSpan={6}>
      <Group attached w="full" maxW="sm">
      <Input flex="1" placeholder="search" onChange={(e)=>setSearch(e.target.value)} value={search} />
      <Button bg="bg.subtle" onClick={fetchhandler} variant="outline">
        Submit
      </Button>
    </Group>
    </GridItem>
    <GridItem colSpan={5}>
  <Grid
    templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
    gap={6}
  >
    {answer.map((item) => (
      <Box key={item.id} borderWidth="1px" p="4">
        <Image src={item.images[0]} alt={item.title} />

        <Text fontWeight="bold" mt="2">
          {item.title}
        </Text>

        <Text color="gray.500">
          {item.brand}
        </Text>

        <Text>
          ${item.price}
        </Text>
      </Box>
    ))}
  </Grid>
</GridItem>

    </Grid>
  )
}

export default Searchbox