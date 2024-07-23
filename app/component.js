"use client"

import { useState } from "react"
import { Box, Button, Input, Progress, Text, Flex, Select } from "@chakra-ui/react"

export default function Component() {
  const [progress, setProgress] = useState(25)

  const handleNext = () => {
    if (progress === 25) {
      setProgress(50)
    } else if (progress === 50) {
      setProgress(75)
    } else if (progress === 75) {
      setProgress(100)
    } else if (progress === 100) {
      setProgress(25)
    }
  }
  const handleBack = () => {
    if (progress === 100) {
      setProgress(75)
    } else if (progress === 75) {
      setProgress(50)
    } else if (progress === 50) {
      setProgress(25)
    }
  }

  const getProgressLabel = (value) => {
    switch(value) {
      case 25: return "1/4";
      case 50: return "2/4";
      case 75: return "3/4";
      case 100: return "4/4";
      default: return "";
    }
  }

  return (
    <Box maxW="md" mx="auto" py="12" px="4">
      <Box borderWidth="1px" borderRadius="lg" p="6" borderColor="black">
        <Flex align="center">
          <Progress value={progress} size="sm" colorScheme="blackAlpha" hasStripe borderRadius="md" flex="1" />
          <Text ml="4" color="black">{getProgressLabel(progress)}</Text>
        </Flex>
        <Text fontSize="2xl" fontWeight="bold" mt="6" color="black">
          Tell Us About Your Business
        </Text>
        <form>
          <Box mt="6">
            <Text fontSize="sm" fontWeight="medium" color="black">Enter your name</Text>
            <Input type="text" mt="1" borderColor="black" focusBorderColor="black" />

            <Text mt="4" fontSize="sm" fontWeight="medium" color="black">Enter your email</Text>
            <Input type="email" mt="1" borderColor="black" focusBorderColor="black" />

            <Text mt="4" fontSize="sm" fontWeight="medium" color="black">Phone number</Text>
            <Input type="tel" mt="1" borderColor="black" focusBorderColor="black" />

            <Text mt="4" fontSize="sm" fontWeight="medium" color="black">Enter your business name</Text>
            <Input type="text" mt="1" borderColor="black" focusBorderColor="black" />

            <Text mt="4" fontSize="sm" fontWeight="medium" color="black">Select your business sector (5%)</Text>
            <Select mt="1" borderColor="black" focusBorderColor="black">
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
            </Select>

            <Text mt="4" fontSize="sm" fontWeight="medium" color="black">How long has your business been running? (10%)</Text>
            <Select mt="1" borderColor="black" focusBorderColor="black">
              <option value="less_than_1_year">Less than 1 year</option>
              <option value="1_2_years">1-2 years</option>
              <option value="3_5_years">3-5 years</option>
              <option value="more_than_5_years">More than 5 years</option>
            </Select>
          </Box>
        </form>
        <Box display="flex" justifyContent="space-between" mt="6">
          {progress !== 25 && (
            <Button onClick={handleBack} bg="black" color="white" _hover={{ bg: "blackAlpha.800" }}>
              Back
            </Button>
          )}
          {progress === 100 ? (
            <Box textAlign="center">
              <Text color="green.500" fontSize="2xl" fontWeight="bold" mb="4">
                Success!
              </Text>
              <Button onClick={handleNext} bg="black" color="white" _hover={{ bg: "blackAlpha.800" }}>
                Restart
              </Button>
            </Box>
          ) : (
            <Button onClick={handleNext} bg="black" color="white" _hover={{ bg: "blackAlpha.800" }}>
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}
