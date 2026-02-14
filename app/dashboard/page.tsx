
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import Product from '../products/page'
import User from '../user/page'
import Searchbox from '../../component/Searchbox'

function Dashboard() {
  return (
    <Grid
     h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      alignItems="center">
         <GridItem rowSpan={12} colSpan={6}>
           <Box>
               <Text fontWeight="medium" mb="2" fontSize="sm">
            
          </Text>
             </Box> 
        </GridItem>
<GridItem rowSpan={6} colSpan={1}>
           <Box>
               <Text fontWeight="medium" mb="2" fontSize="sm">
            <Product/>
          </Text>
             </Box> 
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
           <Box>
               <Text fontWeight="medium" mb="2" fontSize="sm">
            <User/>
          </Text>
             </Box> 
        </GridItem>
      
     
    </Grid>
  )
}

export default Dashboard