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

interface IUsers {
  id: number;
  firstName: string;
  lastName: string ;
  gender : string;
 email: string;
}

function Users() {
     const [users , setUsers ] = useState<IUsers[]>([])
      const [page, setPage] = useState<number>(1)
    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch("https://dummyjson.com/users")
        const {users } = await res.json()
        setUsers(users )
        
      }
    
      fetchProducts()
    }, [])
    
    const pageSize = 20
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedUsers = users.slice(start, end)
    
    
    
  return (
    <Stack width="full" gap="5">
      <Heading size="xl">Products</Heading>
      <Table.Root size="sm" variant="outline" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>firstName</Table.ColumnHeader>
            <Table.ColumnHeader>lastName</Table.ColumnHeader>
            <Table.ColumnHeader>gender</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">email</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginatedUsers.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>{item.gender}</Table.Cell>
              <Table.Cell textAlign="end">{item.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination.Root count={users.length} pageSize={pageSize} page={page} onPageChange={(e) => setPage(e.page)}>
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

export default Users