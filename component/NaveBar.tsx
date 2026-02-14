"use client"
import { usePathname } from 'next/navigation'


import { Breadcrumb, Flex, Text } from '@chakra-ui/react';
import { LiaSlashSolid } from 'react-icons/lia';

function NaveBar() {
   
    const navLink =[
         {
          href:"/",
          title:" صفحه اصلی  ",
        },
        {
          href:"/dashboard",
          title:"  داشبورد ",
        },
         {
          href:"/login",
          title:  " ورود کاربر ",
        }

    ]
  return (

    

    <Flex justify="right"  align="center" maxBlockSize="20" >
   
<Breadcrumb.Root size="md">
  <Breadcrumb.List>
    {navLink.map((i) => (
      <Breadcrumb.Item key={i.href} fontSize="xl">
        <Breadcrumb.Link href={i.href}>
          <Text fontWeight="medium" mb="2" fontSize="sm">
            {i.title}
          </Text>
        </Breadcrumb.Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb.List>
</Breadcrumb.Root>

             

  </Flex>
  
  )
}

export default NaveBar