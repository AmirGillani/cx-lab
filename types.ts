
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

export interface AIAgentResolutionRateData {
  month: string;
  month_display: string;
  success_rate_28: number;
  rolling_closed_billed_28: number;
  rolling_ai_covered_28: number;
}

export interface TotalRevenueData {
  month_start: string;
  month_display: string;
  gmv_influenced: number;
  gmv_web: number;
  gmv_influenced_rate: number;
}

export interface Rolling28DayGMVData {
  day: string;
  month_display: string;
  customers: number;
  gmv_28d: number;
  revenue_influenced_28d: number;
}

export interface MerchantQualityRateData {
  feedback_date: string;
  month_display: string;
  good: number;
  ok: number;
  bad: number;
  total: number;
  merchant_quality_rate: number;
}

export interface CSATByInteractionTypeData {
  month: string;
  month_display: string;
  csat_after_flow: number;
  csat_all_ai_agent: number;
  csat_ai_agent_fully_automated: number;
  csat_human_handled: number;
}

export interface WeeklyAvgCSATData {
  month: string;
  month_display: string;
  Account?: number;
  Exchange?: number;
  Feedback?: number;
  Marketing?: number;
  Order?: number;
  Other?: number;
  Product?: number;
  'Promotion & Discount'?: number;
  Return?: number;
  Shipping?: number;
  Subscription?: number;
  Warranty?: number;
  Wholesale?: number;
}

export interface CSATByTicketTypeData {
  month: string;
  month_display: string;
  ai_agent_avg_score: number;
  ai_agent_ticket_count: number;
  ai_assisted_avg_score: number;
  ai_assisted_ticket_count: number;
  human_avg_score: number;
  human_ticket_count: number;
}

export interface MonthlyTicketHandlingData {
  month_start: string;
  month_display: string;
  ai_fully_resolved: number;
  ai_handover_to_human: number;
  flows_fully_resolved: number;
  human_fully_resolved: number;
}

export interface MonthlyTicketEvolutionData {
  month_start: string;
  month_display: string;
  tickets: number;
}