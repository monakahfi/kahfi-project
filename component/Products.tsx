"use client"
import {
  ButtonGroup,
  Heading,
  IconButton,
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"


interface IProduct {
  id: number;
  title : string;
  category : string ;
  price : number;
  brand : string;
}

function Products() {
    const [product , setProduct ] = useState<IProduct[]>([])
  const [page, setPage] = useState<number>(1)
useEffect(() => {
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const {products } = await res.json()
    setProduct(products )
    
  }

  fetchProducts()
}, [])

const pageSize = 10
const start = (page - 1) * pageSize
const end = start + pageSize
const paginatedProducts = product.slice(start, end)




  return (
    <Stack width="full" gap="5">
      <Heading size="xl">Products</Heading>
      <Table.Root size="sm" variant="outline" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Product</Table.ColumnHeader>
            <Table.ColumnHeader>brand</Table.ColumnHeader>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginatedProducts.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.brand}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination.Root count={product.length} pageSize={pageSize} page={page} onPageChange={(e) => setPage(e.page)}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  )
}

export default Products