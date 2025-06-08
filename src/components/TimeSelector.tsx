import { HStack, Text, Box } from '@chakra-ui/react'
import type { TimePeriod } from '../types/dashboard'

interface TimeSelectorProps {
  periods: TimePeriod[];
  activePeriod: string;
  onPeriodChange: (periodId: string) => void;
}

export const TimeSelector = ({ periods, activePeriod, onPeriodChange }: TimeSelectorProps) => {
  return (
    <HStack gap={8}>
      {periods.map((period) => (
        <Box key={period.id} position="relative">
          <Text
            fontSize="lg"
            color={period.id === activePeriod ? "white" : "#8B6914"}
            fontWeight={period.id === activePeriod ? "semibold" : "medium"}
            cursor="pointer"
            transition="color 0.2s"
            _hover={{
              color: period.id === activePeriod ? "white" : "#A78B20"
            }}
            onClick={() => onPeriodChange(period.id)}
          >
            {period.label}
          </Text>
          {period.id === activePeriod && (
            <Box
              position="absolute"
              bottom="-8px"
              left="0"
              right="0"
              height="2px"
              bg="#F97316"
              borderRadius="full"
            />
          )}
        </Box>
      ))}
    </HStack>
  )
}
