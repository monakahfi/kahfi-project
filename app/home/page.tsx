"use client"

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react"
import Dashboard from "../dashboard/page";
import Users from "../user/page";
import Products from "../products/page";
import NaveBar from "../../component/NaveBar";
import SideBar from "../../component/sideBar";

interface IProduct {
    id : number ;
    title : string;
}

 function  Main() {

    const [product , setProduct]= useState<IProduct[]>([])
    useEffect(()=>{
const res = axios(`https://dummyjson.com/products`).then((result)=>{
       const {data}=result;
       setProduct(data.products);})
    },[])
    

  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      alignItems="center"
      >
        <GridItem rowSpan={1} colSpan={12}>
           <Box>
               <Text fontWeight="medium" mb="2" fontSize="sm">
            Main Content
          </Text>
             </Box> 
        </GridItem>
      <GridItem rowSpan={6} colSpan={1}>
        <Box><SideBar/></Box>
      </GridItem>
      <GridItem colSpan={1} rowSpan={4}>
        <Box><Dashboard/></Box>
      </GridItem>
      
     
    </Grid>
  )
}

export default Main