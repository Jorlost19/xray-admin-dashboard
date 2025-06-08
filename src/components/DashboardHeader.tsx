import { Box, HStack, VStack, Text, IconButton } from '@chakra-ui/react'
import { FaPuzzlePiece, FaPlus } from 'react-icons/fa'

export const DashboardHeader = () => {
  return (
    <VStack align="stretch" gap={6}>
      <HStack justify="space-between" align="center">
        <HStack gap={3}>
          <Box color="white" fontSize="xl">
            <FaPuzzlePiece />
          </Box>
          <Text color="white" fontSize="lg" fontWeight="medium">
            Extension Analytics
          </Text>
        </HStack>
        
        <IconButton
          aria-label="Add new item"
          bg="#14B8A6"
          color="white"
          borderRadius="full"
          size="md"
          _hover={{
            bg: "#0F9488",
            transform: "scale(1.05)"
          }}
          transition="all 0.2s"
        >
          <FaPlus />
        </IconButton>
      </HStack>

      <VStack align="flex-start" gap={2}>
        <Text
          fontSize="4xl"
          color="white"
          fontWeight="bold"
          lineHeight="1.1"
        >
          Extension Analytics
        </Text>
        <Text
          fontSize="lg"
          color="#8B6914"
          fontWeight="medium"
        >
          Track key metrics for your browser extension.
        </Text>
      </VStack>
    </VStack>
  )
}
