import React from 'react';
import { AccountPerformanceData, QuarterlyAccountData, AIAgentHandoverData, SupportInquiriesByIntentData } from '../types';

// ============================================
// GRAPH 1: Handover & Quality by AI Agent
// ============================================
// AI Agent Handover Data (exact column names from spreadsheet - Jan to Aug 2025)
export const AI_AGENT_HANDOVER_DATA: AIAgentHandoverData[] = [
  { month_start: '1/1/2025', handover_tickets: 848949, fully_automated_tickets: 424706, total_ai_agent_tickets: 1273655, handover_percent: 66.7, fully_automated_percent: 33.3 },
  { month_start: '2/1/2025', handover_tickets: 800864, fully_automated_tickets: 391172, total_ai_agent_tickets: 1192036, handover_percent: 67.2, fully_automated_percent: 32.8 },
  { month_start: '3/1/2025', handover_tickets: 990207, fully_automated_tickets: 515104, total_ai_agent_tickets: 1505412, handover_percent: 65.8, fully_automated_percent: 34.2 },
  { month_start: '4/1/2025', handover_tickets: 1050000, fully_automated_tickets: 550000, total_ai_agent_tickets: 1600000, handover_percent: 65.6, fully_automated_percent: 34.4 },
  { month_start: '5/1/2025', handover_tickets: 1100000, fully_automated_tickets: 600000, total_ai_agent_tickets: 1700000, handover_percent: 64.7, fully_automated_percent: 35.3 },
  { month_start: '6/1/2025', handover_tickets: 1150000, fully_automated_tickets: 700000, total_ai_agent_tickets: 1850000, handover_percent: 62.2, fully_automated_percent: 37.8 },
  { month_start: '7/1/2025', handover_tickets: 1213533, fully_automated_tickets: 1203004, total_ai_agent_tickets: 2416537, handover_percent: 50.2, fully_automated_percent: 49.8 },
  { month_start: '8/1/2025', handover_tickets: 1303573, fully_automated_tickets: 980000, total_ai_agent_tickets: 2283573, handover_percent: 57.0, fully_automated_percent: 43.0 },
];

// ============================================
// GRAPH 2: AI Coverage Performance Across Commercial Accounts
// ============================================
// Account Performance Data (exact column names from Excel)
export const ACCOUNT_PERFORMANCE_DATA: AccountPerformanceData[] = [
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'AMHWQQIXVF', rolling_ai_covered_28: 754174, rolling_closed_billed_28: 272575, rolling_total_tickets_28: 1381745 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'BEHUSTGIGY', rolling_ai_covered_28: 694195, rolling_closed_billed_28: 245131, rolling_total_tickets_28: 1282566 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'DVPUQURYMI', rolling_ai_covered_28: 787751, rolling_closed_billed_28: 282355, rolling_total_tickets_28: 1471714 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'FCNPDMLNIA', rolling_ai_covered_28: 706826, rolling_closed_billed_28: 260653, rolling_total_tickets_28: 1297296 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'FXKMAIPBXK', rolling_ai_covered_28: 840975, rolling_closed_billed_28: 305985, rolling_total_tickets_28: 1558520 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'GQAVBGNFZV', rolling_ai_covered_28: 752368, rolling_closed_billed_28: 264424, rolling_total_tickets_28: 1384659 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'GRMCOVRWJS', rolling_ai_covered_28: 677869, rolling_closed_billed_28: 249564, rolling_total_tickets_28: 1221117 },
  { event_date: '12/1/2025', fixed_gmv_parent_band: 'Commercial ($3-20m)', account_name: 'UVWEDTWDI', rolling_ai_covered_28: 755473, rolling_closed_billed_28: 281774, rolling_total_tickets_28: 1406356 },
];

// ============================================
// GRAPH 3: Q1 2025 Automation Performance by Account
// ============================================
// Quarterly Account Performance Data (exact column names from spreadsheet)
export const QUARTERLY_ACCOUNT_DATA: QuarterlyAccountData[] = [
  { account_name: 'JRWNITZDEL', quarter_label: '2025-Q1', total_interactions: 638611, automated_interactions: 638610, flows_interactions: 603596, ai_agent_interactions: 35011, human_interactions: 1, automation_rate_percent: 0.999998434, avg_first_response_time_min: 0 },
  { account_name: 'NVJOEPKJHG', quarter_label: '2025-Q1', total_interactions: 199856, automated_interactions: 106863, flows_interactions: 65742, ai_agent_interactions: 20213, human_interactions: 92993, automation_rate_percent: 0.534699984, avg_first_response_time_min: 440 },
  { account_name: 'RPGVWZVFXA', quarter_label: '2025-Q1', total_interactions: 116169, automated_interactions: 60321, flows_interactions: 26748, ai_agent_interactions: 8679, human_interactions: 55848, automation_rate_percent: 0.519252124, avg_first_response_time_min: 2538 },
  { account_name: 'GVIEAVHYQF', quarter_label: '2025-Q1', total_interactions: 195918, automated_interactions: 57527, flows_interactions: 51807, ai_agent_interactions: 0, human_interactions: 138391, automation_rate_percent: 0.293627946, avg_first_response_time_min: 110 },
  { account_name: 'XWOEEQPZIR', quarter_label: '2025-Q1', total_interactions: 102679, automated_interactions: 41596, flows_interactions: 17277, ai_agent_interactions: 16354, human_interactions: 61083, automation_rate_percent: 0.405107179, avg_first_response_time_min: 2552 },
  { account_name: 'UTXRINHRYQ', quarter_label: '2025-Q1', total_interactions: 80214, automated_interactions: 39056, flows_interactions: 12885, ai_agent_interactions: 19497, human_interactions: 41158, automation_rate_percent: 0.486897549, avg_first_response_time_min: 2652 },
];

// ============================================
// GRAPH 4: Support Inquiries by Intent and Channel
// ============================================
// Support Inquiries by Intent (exact column names from spreadsheet - 2025-12-01)
export const SUPPORT_INQUIRIES_DATA: SupportInquiriesByIntentData[] = [
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Account', SUPPORT_INQUIRIES: 30761 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Exchange', SUPPORT_INQUIRIES: 28111 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Feedback', SUPPORT_INQUIRIES: 4923 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Marketing', SUPPORT_INQUIRIES: 4473 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Order', SUPPORT_INQUIRIES: 375357 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Other', SUPPORT_INQUIRIES: 47461 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Product', SUPPORT_INQUIRIES: 264531 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Promotion & Discount', SUPPORT_INQUIRIES: 64197 },
  { PERIOD: '2025-12-01', CHANNEL: 'chat', TICKET_INTENT_LVL_1: 'Return', SUPPORT_INQUIRIES: 63009 },
];

export const ICONS = {
  TrendingUp: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Info: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  LightBulb: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674a1 1 0 00.925-.623l.977-2.39a12.137 12.137 0 011.761-4.482c.441-.637.6-.947.6-1.505a4 4 0 10-8 0c0 .558.159.868.6 1.505a12.137 12.137 0 011.761 4.482l.977 2.39a1 1 0 00.925.623z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h4" />
    </svg>
  ),
};


