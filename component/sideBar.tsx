"use client"

import { useRouter } from "next/navigation"
import { For, Group, HStack, RadioCard, Stack } from "@chakra-ui/react"

interface IPage {
  id:number
  title : string ;
  href : string;
}
function SideBar() {
  const routher = useRouter();

  const page :IPage[]= [
    {
      id:1,
      title : "کاربران",
      href : "/user"
    },
    {
      id:2,
      title : "محصولات",
      href : "/products"

    },
    {
      id:3,
      title : "جستجو",
      href : "/searchproduct"
    },
  ]
  return (
   <RadioCard.Root defaultValue="next" gap="4" maxW="sm">
      <RadioCard.Label>pages</RadioCard.Label>
      <Group attached orientation="vertical">
        {page.map((item) => (
          <RadioCard.Item key={item.id} value={item.title} width="full" onClick={() => routher.push(item.href)}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemIndicator />
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                
              </RadioCard.ItemContent>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </Group>
    </RadioCard.Root>
  )
}

export default SideBar