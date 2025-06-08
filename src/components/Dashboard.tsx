import { useState } from 'react'
import { Box, VStack, SimpleGrid } from '@chakra-ui/react'
import { DashboardHeader } from './DashboardHeader'
import { TimeSelector } from './TimeSelector'
import { MetricCard } from './MetricCard'
import type { DashboardData } from '../types/dashboard'

const DASHBOARD_DATA: DashboardData = {
  timePeriods: [
    { id: 'day', label: 'Day' },
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' }
  ],
  metrics: [
    { label: 'Total Downloads', value: '1,234' },
    { label: 'Total Installs', value: '1,023' },
    { label: 'Total Uninstalls', value: '211' },
    { label: 'Active Users', value: '812' },
    { label: 'Average Session Duration', value: '5m 30s' },
    { label: 'Average Sessions per User', value: '2.5' },
    { label: 'Total Evaluations', value: '5,432' },
    { label: 'Evaluations per User and Type', value: '6.7 / 3.2' }
  ]
}

export const Dashboard = () => {
  const [activePeriod, setActivePeriod] = useState('day')

  const handlePeriodChange = (periodId: string) => {
    setActivePeriod(periodId)
  }

  return (
    <Box
      minH="100vh"
      bg="#3D2F1F"
      p={6}
    >
      <Box maxW="1200px" mx="auto">
        <VStack gap={8} align="stretch">
          <DashboardHeader />

          <TimeSelector
            periods={DASHBOARD_DATA.timePeriods}
            activePeriod={activePeriod}
            onPeriodChange={handlePeriodChange}
          />

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={6}
            mt={4}
          >
            {DASHBOARD_DATA.metrics.map((metric, index) => (
              <MetricCard
                key={`${metric.label}-${index}`}
                data={metric}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  )
}
