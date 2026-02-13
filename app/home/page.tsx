"use client"

import { Box, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react"
import Dashboard from "../dashboard/page";
import Users from "../user/page";
import Products from "../products/page";
import NaveBar from "../../component/NaveBar";

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
      gap={4}>
        <GridItem rowSpan={1} colSpan={12}>
           <Box><NaveBar/> </Box> 
        </GridItem>
      <GridItem rowSpan={6} colSpan={1}>
        <Box><Users/> </Box>
      </GridItem>
      <GridItem colSpan={1} rowSpan={4}>
        <Box><Products/></Box>
      </GridItem>
      
      <GridItem colSpan={2} rowSpan={8}>
        <Box><Dashboard/></Box>
      </GridItem>
    </Grid>
  )
}

export default Main