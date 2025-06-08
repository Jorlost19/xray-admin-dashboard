import { Box, Text } from '@chakra-ui/react'
import type { MetricCardData } from '../types/dashboard'

interface MetricCardProps {
  data: MetricCardData;
}

export const MetricCard = ({ data }: MetricCardProps) => {
  return (
    <Box
      bg="#2F1F0F"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'xl',
      }}
    >
      <Text
        fontSize="sm"
        color="#8B6914"
        mb={3}
        fontWeight="medium"
      >
        {data.label}
      </Text>
      <Text
        fontSize="3xl"
        color="white"
        fontWeight="bold"
        lineHeight="1"
      >
        {data.value}
      </Text>
    </Box>
  )
}
