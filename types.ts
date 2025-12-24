
import React from 'react';

export interface DataPoint {
  date: string;
  automationRate: number;
  humanRate: number;
  csat: number;
  revenuePerInteraction: number;
}

export interface IntentDataPoint {
  intent: string;
  inquiries: number;
}

export interface SupportInquiriesByIntentData {
  PERIOD: string;
  CHANNEL: string;
  TICKET_INTENT_LVL_1: string;
  SUPPORT_INQUIRIES: number;
}

export interface MonthlyTicketData {
  month: string;
  totalTickets: number;
  orderTickets: number;
  productTickets: number;
  returnTickets: number;
}

export interface QualityRateData {
  month: string;
  good: number;
  ok: number;
  bad: number;
  merchantQualityRate: number;
}

export interface AIAgentHandoverData {
  month_start: string;
  handover_tickets: number;
  fully_automated_tickets: number;
  total_ai_agent_tickets: number;
  handover_percent: number;
  fully_automated_percent: number;
}

export interface AccountPerformanceData {
  event_date: string;
  fixed_gmv_parent_band: string;
  account_name: string;
  rolling_ai_covered_28: number;
  rolling_closed_billed_28: number;
  rolling_total_tickets_28: number;
}

export interface QuarterlyAccountData {
  account_name: string;
  quarter_label: string;
  total_interactions: number;
  automated_interactions: number;
  flows_interactions: number;
  ai_agent_interactions: number;
  human_interactions: number;
  automation_rate_percent: number;
  avg_first_response_time_min: number;
}

export interface MetricCardProps {
  label: string;
  value: string;
  trend: number;
  description: string;
}

export interface InsightSectionProps {
  title: string;
  subtitle: string;
  narrative: string;
  whyItMatters: string;
  methodology: string;
  children: React.ReactNode;
}