export interface MetricCardData {
  label: string;
  value: string;
}

export interface TimePeriod {
  id: string;
  label: string;
  active?: boolean;
}

export interface DashboardData {
  metrics: MetricCardData[];
  timePeriods: TimePeriod[];
}
