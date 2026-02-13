"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  Alert,
 
  Box,
 
  Button,
  Center,
  Field,
  
  Flex,
  
  Input,
  Stack,
} from "@chakra-ui/react"

export default function Page() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${name}`,
        password: `${password}`,
        expiresInMins: 30,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError("نام کاربری یا رمز اشتباه است")
      return
    }

    localStorage.setItem("token", data.accessToken)
    router.push("/dashboard")
  }

  return (

  <Flex  justify="center" align="center" minH="100vh" bg="gray.50">
  <Box
    p="8"
    bg="white"
    rounded="xl"
    shadow="md"
    w="full"
    maxW="md"
  >
    <form onSubmit={submitHandler}>
      <Stack gap="4" maxW="sm">
        
        {error && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>{error}</Alert.Title>
          </Alert.Root>
        )}

        <Field.Root>
          <Field.Label color="black">Username</Field.Label>
          <Input
          color="black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label color="black">Password</Field.Label>
          <Input
          color="black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field.Root>

        <Button type="submit" colorPalette="blue">
          ورود
        </Button>
      </Stack>
    </form>
    </Box>
    </Flex>
    
  )
}
