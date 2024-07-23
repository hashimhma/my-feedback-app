import { ChakraProvider } from "@chakra-ui/react"
import Component from './component'

export default function Home() {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}
