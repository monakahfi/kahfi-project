"use client"
import { usePathname } from 'next/navigation'

import Countainer from './sideBar';
import Link from 'next/link';
import { Breadcrumb, Flex, Text } from '@chakra-ui/react';
import { LiaSlashSolid } from 'react-icons/lia';

function NaveBar() {
    const PathName = usePathname();
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
{
  
  navLink.map((i)=>(
    <Breadcrumb.Item  fontSize="xl" key={i.href} >
      <Breadcrumb.Link href={i.href}>
       <Breadcrumb.Separator flex="content">
        <Text fontWeight="medium" mb="2" fontSize="sm">
            {i.title}
          </Text>
      
          <LiaSlashSolid />
        </Breadcrumb.Separator>
      </Breadcrumb.Link>
   
      </Breadcrumb.Item>
  ))}
             </Breadcrumb.List>

  </Breadcrumb.Root>
  </Flex>
  
  )
}

export default NaveBar