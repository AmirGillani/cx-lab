import React from 'react';
import { AccountPerformanceData, QuarterlyAccountData, AIAgentHandoverData, SupportInquiriesByIntentData, AIAgentResolutionRateData, TotalRevenueData, Rolling28DayGMVData, MerchantQualityRateData, CSATByInteractionTypeData, WeeklyAvgCSATData, CSATByTicketTypeData, MonthlyTicketHandlingData, MonthlyTicketEvolutionData } from '../types';

// ============================================
// GRAPH 1: Merchant Quality Rate
// ============================================
// Merchant Quality Rate Data (monthly aggregated from MerchantQualityRate.json)
export const MERCHANT_QUALITY_RATE_DATA: MerchantQualityRateData[] = [
  { feedback_date: '2025-07-31', month_display: 'Jul \'25', good: 4461, ok: 1559, bad: 2891, total: 8911, merchant_quality_rate: 67.56 },
  { feedback_date: '2025-08-31', month_display: 'Aug \'25', good: 19992, ok: 5470, bad: 10132, total: 35594, merchant_quality_rate: 71.53 },
  { feedback_date: '2025-09-30', month_display: 'Sep \'25', good: 30359, ok: 8202, bad: 11840, total: 50401, merchant_quality_rate: 76.51 },
  { feedback_date: '2025-10-31', month_display: 'Oct \'25', good: 48214, ok: 10751, bad: 13806, total: 72771, merchant_quality_rate: 81.03 },
  { feedback_date: '2025-11-30', month_display: 'Nov \'25', good: 72376, ok: 16193, bad: 17500, total: 106069, merchant_quality_rate: 83.50 },
  { feedback_date: '2025-12-23', month_display: 'Dec \'25', good: 59761, ok: 12293, bad: 12535, total: 84589, merchant_quality_rate: 85.18 },
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

// ============================================
// GRAPH 5: AI Agent - Resolution Rate
// ============================================
// AI Agent Resolution Rate Data (monthly aggregated from AIAgentResolutionrate.json)
export const AI_AGENT_RESOLUTION_RATE_DATA: AIAgentResolutionRateData[] = [
  { month: '2025-01', month_display: 'Jan \'25', success_rate_28: 30.22, rolling_closed_billed_28: 348356, rolling_ai_covered_28: 1152750 },
  { month: '2025-02', month_display: 'Feb \'25', success_rate_28: 29.23, rolling_closed_billed_28: 348179, rolling_ai_covered_28: 1191289 },
  { month: '2025-03', month_display: 'Mar \'25', success_rate_28: 29.63, rolling_closed_billed_28: 409764, rolling_ai_covered_28: 1382954 },
  { month: '2025-04', month_display: 'Apr \'25', success_rate_28: 33.89, rolling_closed_billed_28: 481409, rolling_ai_covered_28: 1420593 },
  { month: '2025-05', month_display: 'May \'25', success_rate_28: 35.04, rolling_closed_billed_28: 588979, rolling_ai_covered_28: 1680813 },
  { month: '2025-06', month_display: 'Jun \'25', success_rate_28: 39.93, rolling_closed_billed_28: 767708, rolling_ai_covered_28: 1922599 },
  { month: '2025-07', month_display: 'Jul \'25', success_rate_28: 43.73, rolling_closed_billed_28: 946413, rolling_ai_covered_28: 2164230 },
  { month: '2025-08', month_display: 'Aug \'25', success_rate_28: 37.09, rolling_closed_billed_28: 775093, rolling_ai_covered_28: 2089776 },
  { month: '2025-09', month_display: 'Sep \'25', success_rate_28: 35.53, rolling_closed_billed_28: 718673, rolling_ai_covered_28: 2022599 },
  { month: '2025-10', month_display: 'Oct \'25', success_rate_28: 32.33, rolling_closed_billed_28: 760611, rolling_ai_covered_28: 2352651 },
  { month: '2025-11', month_display: 'Nov \'25', success_rate_28: 34.50, rolling_closed_billed_28: 1089369, rolling_ai_covered_28: 3157688 },
  { month: '2025-12', month_display: 'Dec \'25', success_rate_28: 35.64, rolling_closed_billed_28: 1406547, rolling_ai_covered_28: 3946030 },
];

// ============================================
// GRAPH 6: Total Revenue - GMV Influenced vs Web
// ============================================
// Total Revenue Data (from TotalRevenue.json)
export const TOTAL_REVENUE_DATA: TotalRevenueData[] = [
  { month_start: '2025-01-01', month_display: 'Jan \'25', gmv_influenced: 78081.34, gmv_web: 30500017.52, gmv_influenced_rate: 0.256 },
  { month_start: '2025-02-01', month_display: 'Feb \'25', gmv_influenced: 213505.13, gmv_web: 34447183.44, gmv_influenced_rate: 0.620 },
  { month_start: '2025-03-01', month_display: 'Mar \'25', gmv_influenced: 366045.62, gmv_web: 57395546.22, gmv_influenced_rate: 0.638 },
  { month_start: '2025-04-01', month_display: 'Apr \'25', gmv_influenced: 494673.23, gmv_web: 70967747, gmv_influenced_rate: 0.697 },
  { month_start: '2025-05-01', month_display: 'May \'25', gmv_influenced: 1250228.91, gmv_web: 101487978.2, gmv_influenced_rate: 1.232 },
  { month_start: '2025-06-01', month_display: 'Jun \'25', gmv_influenced: 1677029, gmv_web: 71726642.8, gmv_influenced_rate: 2.338 },
  { month_start: '2025-07-01', month_display: 'Jul \'25', gmv_influenced: 3790241.05, gmv_web: 161646054.2, gmv_influenced_rate: 2.345 },
  { month_start: '2025-08-01', month_display: 'Aug \'25', gmv_influenced: 5501281.69, gmv_web: 282801163.22, gmv_influenced_rate: 1.945 },
  { month_start: '2025-09-01', month_display: 'Sep \'25', gmv_influenced: 6257018.46, gmv_web: 351129323.99, gmv_influenced_rate: 1.782 },
  { month_start: '2025-10-01', month_display: 'Oct \'25', gmv_influenced: 9266605.38, gmv_web: 470351213.57, gmv_influenced_rate: 1.970 },
  { month_start: '2025-11-01', month_display: 'Nov \'25', gmv_influenced: 20732112.71, gmv_web: 1127168410.09, gmv_influenced_rate: 1.839 },
  { month_start: '2025-12-01', month_display: 'Dec \'25', gmv_influenced: 9609075.67, gmv_web: 657234517.43, gmv_influenced_rate: 1.462 },
];

// ============================================
// GRAPH 7: Rolling 28-Day GMV
// ============================================
// Rolling 28-Day GMV Data (monthly aggregated from Rolling28dayGMV.json)
export const ROLLING_28_DAY_GMV_DATA: Rolling28DayGMVData[] = [
  { day: '2025-01-31', month_display: 'Jan \'25', customers: 22, gmv_28d: 26499358.063, revenue_influenced_28d: 71696.213 },
  { day: '2025-02-28', month_display: 'Feb \'25', customers: 23, gmv_28d: 34446083.018, revenue_influenced_28d: 213505.13 },
  { day: '2025-03-31', month_display: 'Mar \'25', customers: 37, gmv_28d: 36762689.996, revenue_influenced_28d: 331422.278 },
  { day: '2025-04-30', month_display: 'Apr \'25', customers: 56, gmv_28d: 42137964.175, revenue_influenced_28d: 427466.723 },
  { day: '2025-05-31', month_display: 'May \'25', customers: 83, gmv_28d: 60992332.303, revenue_influenced_28d: 860990.606 },
  { day: '2025-06-30', month_display: 'Jun \'25', customers: 137, gmv_28d: 43549661.641, revenue_influenced_28d: 1483771.977 },
  { day: '2025-07-31', month_display: 'Jul \'25', customers: 328, gmv_28d: 109647941.78, revenue_influenced_28d: 3215285.671 },
  { day: '2025-08-31', month_display: 'Aug \'25', customers: 479, gmv_28d: 201883955.649, revenue_influenced_28d: 4705570.672 },
  { day: '2025-09-30', month_display: 'Sep \'25', customers: 664, gmv_28d: 253219836.351, revenue_influenced_28d: 5467676.579 },
  { day: '2025-10-31', month_display: 'Oct \'25', customers: 952, gmv_28d: 350662513.629, revenue_influenced_28d: 8129862.713 },
  { day: '2025-11-30', month_display: 'Nov \'25', customers: 1155, gmv_28d: 935691615.887, revenue_influenced_28d: 19168968.325 },
  { day: '2025-12-20', month_display: 'Dec \'25', customers: 1237, gmv_28d: 1077888770.905, revenue_influenced_28d: 18791498.907 },
];

// ============================================
// GRAPH 8: CSAT by Interaction Type
// ============================================
// CSAT by Interaction Type Data (from CSATbyInteractionType.json)
export const CSAT_BY_INTERACTION_TYPE_DATA: CSATByInteractionTypeData[] = [
  { month: '2025-01-01T00:00:00', month_display: 'Jan \'25', csat_after_flow: 4.26, csat_all_ai_agent: 4.09, csat_ai_agent_fully_automated: 3.7, csat_human_handled: 4.46 },
  { month: '2025-02-01T00:00:00', month_display: 'Feb \'25', csat_after_flow: 4.3, csat_all_ai_agent: 4.14, csat_ai_agent_fully_automated: 3.72, csat_human_handled: 4.5 },
  { month: '2025-03-01T00:00:00', month_display: 'Mar \'25', csat_after_flow: 4.24, csat_all_ai_agent: 4.18, csat_ai_agent_fully_automated: 3.8, csat_human_handled: 4.51 },
  { month: '2025-04-01T00:00:00', month_display: 'Apr \'25', csat_after_flow: 4.24, csat_all_ai_agent: 4.11, csat_ai_agent_fully_automated: 3.72, csat_human_handled: 4.51 },
  { month: '2025-05-01T00:00:00', month_display: 'May \'25', csat_after_flow: 4.21, csat_all_ai_agent: 4.12, csat_ai_agent_fully_automated: 3.75, csat_human_handled: 4.49 },
  { month: '2025-06-01T00:00:00', month_display: 'Jun \'25', csat_after_flow: 4.31, csat_all_ai_agent: 4.11, csat_ai_agent_fully_automated: 3.77, csat_human_handled: 4.49 },
  { month: '2025-07-01T00:00:00', month_display: 'Jul \'25', csat_after_flow: 4.29, csat_all_ai_agent: 4.07, csat_ai_agent_fully_automated: 3.71, csat_human_handled: 4.48 },
  { month: '2025-08-01T00:00:00', month_display: 'Aug \'25', csat_after_flow: 4.33, csat_all_ai_agent: 4.09, csat_ai_agent_fully_automated: 3.8, csat_human_handled: 4.47 },
  { month: '2025-09-01T00:00:00', month_display: 'Sep \'25', csat_after_flow: 4.36, csat_all_ai_agent: 4.15, csat_ai_agent_fully_automated: 3.82, csat_human_handled: 4.47 },
  { month: '2025-10-01T00:00:00', month_display: 'Oct \'25', csat_after_flow: 4.34, csat_all_ai_agent: 4.15, csat_ai_agent_fully_automated: 3.87, csat_human_handled: 4.47 },
  { month: '2025-11-01T00:00:00', month_display: 'Nov \'25', csat_after_flow: 4.35, csat_all_ai_agent: 4.12, csat_ai_agent_fully_automated: 3.83, csat_human_handled: 4.48 },
];

// ============================================
// GRAPH 9: Weekly Avg. CSAT by Ticket Intent
// ============================================
// Weekly Avg. CSAT Data (monthly aggregated from AIAgentCSATbyTicketIntentRolling7Day.json)
export const WEEKLY_AVG_CSAT_DATA: WeeklyAvgCSATData[] = [
  { month: '2024-10', month_display: 'Oct \'24', Account: 3.62, Exchange: 4.39, Feedback: 3.65, Marketing: 4.12, Order: 3.24, Other: 4.1, Product: 3.83, 'Promotion & Discount': 3.31, Return: 4.05, Shipping: 3.47, Subscription: 3.92, Warranty: 3.91 },
  { month: '2024-11', month_display: 'Nov \'24', Account: 3.92, Exchange: 4.12, Feedback: 3.62, Marketing: 4.35, Order: 3.51, Other: 3.74, Product: 3.82, 'Promotion & Discount': 3.34, Return: 4.01, Shipping: 3.7, Subscription: 3.94, Warranty: 3.41, Wholesale: 3.91 },
  { month: '2024-12', month_display: 'Dec \'24', Account: 3.87, Exchange: 3.98, Feedback: 3.59, Marketing: 4.59, Order: 3.28, Other: 3.61, Product: 3.67, 'Promotion & Discount': 3.22, Return: 3.89, Shipping: 3.68, Subscription: 3.84, Warranty: 3.03, Wholesale: 3.74 },
  { month: '2025-01', month_display: 'Jan \'25', Account: 3.74, Exchange: 3.95, Feedback: 3.65, Marketing: 4.62, Order: 3.32, Other: 3.75, Product: 3.59, 'Promotion & Discount': 3.27, Return: 3.73, Subscription: 3.8, Warranty: 2.84, Wholesale: 3.74 },
  { month: '2025-02', month_display: 'Feb \'25', Account: 3.54, Exchange: 3.95, Feedback: 3.76, Marketing: 4.53, Order: 3.36, Other: 3.67, Product: 3.66, 'Promotion & Discount': 3.27, Return: 3.8, Subscription: 3.82, Warranty: 2.71, Wholesale: 3.82 },
  { month: '2025-03', month_display: 'Mar \'25', Account: 3.86, Exchange: 3.99, Feedback: 3.67, Marketing: 4.24, Order: 3.54, Other: 3.94, Product: 3.73, 'Promotion & Discount': 3.32, Return: 3.87, Subscription: 3.7, Warranty: 3.19, Wholesale: 3.59 },
  { month: '2025-04', month_display: 'Apr \'25', Account: 3.57, Exchange: 3.94, Feedback: 3.54, Marketing: 4.5, Order: 3.36, Other: 4.01, Product: 3.57, 'Promotion & Discount': 3.18, Return: 3.81, Subscription: 3.93, Warranty: 3.2, Wholesale: 3.62 },
  { month: '2025-05', month_display: 'May \'25', Account: 3.74, Exchange: 4.07, Feedback: 3.73, Marketing: 4.47, Order: 3.38, Other: 4.11, Product: 3.61, 'Promotion & Discount': 3.06, Return: 3.8, Subscription: 3.95, Warranty: 3.44, Wholesale: 3.51 },
  { month: '2025-06', month_display: 'Jun \'25', Account: 3.68, Exchange: 4.08, Feedback: 3.99, Marketing: 4.44, Order: 3.41, Other: 4.16, Product: 3.63, 'Promotion & Discount': 3.15, Return: 3.77, Subscription: 3.91, Warranty: 3.37, Wholesale: 3.3 },
  { month: '2025-07', month_display: 'Jul \'25', Account: 3.65, Exchange: 3.85, Feedback: 4.2, Marketing: 4, Order: 3.32, Other: 4, Product: 3.6, 'Promotion & Discount': 3.07, Return: 3.61, Subscription: 3.81, Warranty: 3.1, Wholesale: 3.35 },
  { month: '2025-08', month_display: 'Aug \'25', Account: 3.77, Exchange: 4.04, Feedback: 4, Marketing: 3.92, Order: 3.4, Other: 4.19, Product: 3.71, 'Promotion & Discount': 3.28, Return: 3.76, Subscription: 4.07, Warranty: 3.35, Wholesale: 3.4 },
  { month: '2025-09', month_display: 'Sep \'25', Account: 3.72, Exchange: 4.09, Feedback: 3.59, Marketing: 4.12, Order: 3.45, Other: 4.2, Product: 3.75, 'Promotion & Discount': 3.27, Return: 3.86, Subscription: 4.13, Warranty: 3.24, Wholesale: 3.86 },
  { month: '2025-10', month_display: 'Oct \'25', Account: 3.87, Exchange: 4.1, Feedback: 3.38, Marketing: 3.94, Order: 3.52, Other: 4.27, Product: 3.78, 'Promotion & Discount': 3.26, Return: 3.89, Subscription: 4.17, Warranty: 3.22, Wholesale: 3.77 },
  { month: '2025-11', month_display: 'Nov \'25', Account: 3.95, Exchange: 4.1, Feedback: 3.44, Marketing: 4.07, Order: 3.5, Other: 4.24, Product: 3.8, 'Promotion & Discount': 3.31, Return: 3.9, Subscription: 4.1, Warranty: 3.41, Wholesale: 3.26 },
  { month: '2025-12', month_display: 'Dec \'25', Account: 3.57, Exchange: 3.9, Feedback: 3.41, Marketing: 3.78, Order: 3.28, Other: 4.09, Product: 3.78, 'Promotion & Discount': 3.09, Return: 3.74, Subscription: 4.09, Warranty: 3.21, Wholesale: 3.44 },
];

// ============================================
// GRAPH 10: CSAT by Ticket Type
// ============================================
// CSAT by Ticket Type Data (monthly aggregated from CSATbyTicketTypeforAIAgentMerchantsTicketLevel.json)
export const CSAT_BY_TICKET_TYPE_DATA: CSATByTicketTypeData[] = [
  { month: '2024-10', month_display: 'Oct \'24', ai_agent_avg_score: 3.63, ai_agent_ticket_count: 3025, ai_assisted_avg_score: 4.34, ai_assisted_ticket_count: 9659, human_avg_score: 4.44, human_ticket_count: 10332 },
  { month: '2024-11', month_display: 'Nov \'24', ai_agent_avg_score: 3.73, ai_agent_ticket_count: 4048, ai_assisted_avg_score: 4.36, ai_assisted_ticket_count: 14055, human_avg_score: 4.43, human_ticket_count: 13898 },
  { month: '2024-12', month_display: 'Dec \'24', ai_agent_avg_score: 3.55, ai_agent_ticket_count: 8691, ai_assisted_avg_score: 4.19, ai_assisted_ticket_count: 26944, human_avg_score: 4.28, human_ticket_count: 19927 },
  { month: '2025-01', month_display: 'Jan \'25', ai_agent_avg_score: 3.62, ai_agent_ticket_count: 8036, ai_assisted_avg_score: 4.3, ai_assisted_ticket_count: 25227, human_avg_score: 4.4, human_ticket_count: 16160 },
  { month: '2025-02', month_display: 'Feb \'25', ai_agent_avg_score: 3.64, ai_agent_ticket_count: 7095, ai_assisted_avg_score: 4.37, ai_assisted_ticket_count: 24834, human_avg_score: 4.47, human_ticket_count: 12666 },
  { month: '2025-03', month_display: 'Mar \'25', ai_agent_avg_score: 3.71, ai_agent_ticket_count: 7542, ai_assisted_avg_score: 4.39, ai_assisted_ticket_count: 27482, human_avg_score: 4.49, human_ticket_count: 13257 },
  { month: '2025-04', month_display: 'Apr \'25', ai_agent_avg_score: 3.63, ai_agent_ticket_count: 8645, ai_assisted_avg_score: 4.36, ai_assisted_ticket_count: 29134, human_avg_score: 4.51, human_ticket_count: 14701 },
  { month: '2025-05', month_display: 'May \'25', ai_agent_avg_score: 3.64, ai_agent_ticket_count: 10093, ai_assisted_avg_score: 4.33, ai_assisted_ticket_count: 33123, human_avg_score: 4.48, human_ticket_count: 16547 },
  { month: '2025-06', month_display: 'Jun \'25', ai_agent_avg_score: 3.67, ai_agent_ticket_count: 11345, ai_assisted_avg_score: 4.33, ai_assisted_ticket_count: 35740, human_avg_score: 4.44, human_ticket_count: 17335 },
  { month: '2025-07', month_display: 'Jul \'25', ai_agent_avg_score: 3.56, ai_agent_ticket_count: 12847, ai_assisted_avg_score: 4.33, ai_assisted_ticket_count: 39012, human_avg_score: 4.47, human_ticket_count: 17284 },
  { month: '2025-08', month_display: 'Aug \'25', ai_agent_avg_score: 3.66, ai_agent_ticket_count: 10856, ai_assisted_avg_score: 4.29, ai_assisted_ticket_count: 41777, human_avg_score: 4.48, human_ticket_count: 16910 },
  { month: '2025-09', month_display: 'Sep \'25', ai_agent_avg_score: 3.69, ai_agent_ticket_count: 9604, ai_assisted_avg_score: 4.33, ai_assisted_ticket_count: 42794, human_avg_score: 4.47, human_ticket_count: 18384 },
  { month: '2025-10', month_display: 'Oct \'25', ai_agent_avg_score: 3.73, ai_agent_ticket_count: 11140, ai_assisted_avg_score: 4.33, ai_assisted_ticket_count: 44248, human_avg_score: 4.5, human_ticket_count: 16979 },
  { month: '2025-11', month_display: 'Nov \'25', ai_agent_avg_score: 3.73, ai_agent_ticket_count: 14941, ai_assisted_avg_score: 4.32, ai_assisted_ticket_count: 53122, human_avg_score: 4.5, human_ticket_count: 20229 },
  { month: '2025-12', month_display: 'Dec \'25', ai_agent_avg_score: 3.56, ai_agent_ticket_count: 26599, ai_assisted_avg_score: 4.22, ai_assisted_ticket_count: 73761, human_avg_score: 4.43, human_ticket_count: 25339 },
];

// ============================================
// GRAPH 11: Monthly Ticket Handling Evolution
// ============================================
// Monthly Ticket Handling Data (from MonthlyTicketHandlingEvolutionsince2024.json)
export const MONTHLY_TICKET_HANDLING_DATA: MonthlyTicketHandlingData[] = [
  { month_start: '2024-01-01', month_display: 'Jan \'24', ai_fully_resolved: 1440, ai_handover_to_human: 512, flows_fully_resolved: 38, human_fully_resolved: 30338859 },
  { month_start: '2024-02-01', month_display: 'Feb \'24', ai_fully_resolved: 1365, ai_handover_to_human: 1183, flows_fully_resolved: 44, human_fully_resolved: 28184920 },
  { month_start: '2024-03-01', month_display: 'Mar \'24', ai_fully_resolved: 1457, ai_handover_to_human: 4660, flows_fully_resolved: 45, human_fully_resolved: 31309650 },
  { month_start: '2024-04-01', month_display: 'Apr \'24', ai_fully_resolved: 1720, ai_handover_to_human: 7267, flows_fully_resolved: 51, human_fully_resolved: 30636853 },
  { month_start: '2024-05-01', month_display: 'May \'24', ai_fully_resolved: 2072, ai_handover_to_human: 19027, flows_fully_resolved: 54, human_fully_resolved: 29550002 },
  { month_start: '2024-06-01', month_display: 'Jun \'24', ai_fully_resolved: 3267, ai_handover_to_human: 68548, flows_fully_resolved: 93, human_fully_resolved: 25816613 },
  { month_start: '2024-07-01', month_display: 'Jul \'24', ai_fully_resolved: 94605, ai_handover_to_human: 63481, flows_fully_resolved: 118, human_fully_resolved: 25669318 },
  { month_start: '2024-08-01', month_display: 'Aug \'24', ai_fully_resolved: 215861, ai_handover_to_human: 78167, flows_fully_resolved: 171, human_fully_resolved: 25145140 },
  { month_start: '2024-09-01', month_display: 'Sep \'24', ai_fully_resolved: 385641, ai_handover_to_human: 89253, flows_fully_resolved: 298, human_fully_resolved: 24113830 },
  { month_start: '2024-10-01', month_display: 'Oct \'24', ai_fully_resolved: 478006, ai_handover_to_human: 116376, flows_fully_resolved: 17417, human_fully_resolved: 25594664 },
  { month_start: '2024-11-01', month_display: 'Nov \'24', ai_fully_resolved: 729810, ai_handover_to_human: 192160, flows_fully_resolved: 185349, human_fully_resolved: 28556840 },
  { month_start: '2024-12-01', month_display: 'Dec \'24', ai_fully_resolved: 1231327, ai_handover_to_human: 298437, flows_fully_resolved: 384957, human_fully_resolved: 32302023 },
  { month_start: '2025-01-01', month_display: 'Jan \'25', ai_fully_resolved: 1055687, ai_handover_to_human: 245955, flows_fully_resolved: 194980, human_fully_resolved: 25833790 },
  { month_start: '2025-02-01', month_display: 'Feb \'25', ai_fully_resolved: 921609, ai_handover_to_human: 195212, flows_fully_resolved: 174582, human_fully_resolved: 21884518 },
  { month_start: '2025-03-01', month_display: 'Mar \'25', ai_fully_resolved: 1179970, ai_handover_to_human: 248377, flows_fully_resolved: 195435, human_fully_resolved: 24185072 },
  { month_start: '2025-04-01', month_display: 'Apr \'25', ai_fully_resolved: 1193130, ai_handover_to_human: 258770, flows_fully_resolved: 190423, human_fully_resolved: 20708596 },
  { month_start: '2025-05-01', month_display: 'May \'25', ai_fully_resolved: 1418538, ai_handover_to_human: 279978, flows_fully_resolved: 244080, human_fully_resolved: 24259397 },
  { month_start: '2025-06-01', month_display: 'Jun \'25', ai_fully_resolved: 1724517, ai_handover_to_human: 216958, flows_fully_resolved: 177431, human_fully_resolved: 21648224 },
  { month_start: '2025-07-01', month_display: 'Jul \'25', ai_fully_resolved: 1931754, ai_handover_to_human: 367382, flows_fully_resolved: 151972, human_fully_resolved: 21941029 },
  { month_start: '2025-08-01', month_display: 'Aug \'25', ai_fully_resolved: 1810391, ai_handover_to_human: 407661, flows_fully_resolved: 148533, human_fully_resolved: 20880606 },
  { month_start: '2025-09-01', month_display: 'Sep \'25', ai_fully_resolved: 1778319, ai_handover_to_human: 318699, flows_fully_resolved: 164681, human_fully_resolved: 18853943 },
  { month_start: '2025-10-01', month_display: 'Oct \'25', ai_fully_resolved: 2125277, ai_handover_to_human: 305932, flows_fully_resolved: 202271, human_fully_resolved: 19584365 },
  { month_start: '2025-11-01', month_display: 'Nov \'25', ai_fully_resolved: 2804511, ai_handover_to_human: 299402, flows_fully_resolved: 186137, human_fully_resolved: 22011528 },
  { month_start: '2025-12-01', month_display: 'Dec \'25', ai_fully_resolved: 2301117, ai_handover_to_human: 248707, flows_fully_resolved: 172737, human_fully_resolved: 16800396 },
];

// ============================================
// GRAPH 12: Monthly Ticket Evolution
// ============================================
// Monthly Ticket Evolution Data (from MonthlyTicketEvolutionsince2024.json)
export const MONTHLY_TICKET_EVOLUTION_DATA: MonthlyTicketEvolutionData[] = [
  { month_start: '2024-01-01', month_display: 'Jan \'24', tickets: 30340555 },
  { month_start: '2024-02-01', month_display: 'Feb \'24', tickets: 28187266 },
  { month_start: '2024-03-01', month_display: 'Mar \'24', tickets: 31315444 },
  { month_start: '2024-04-01', month_display: 'Apr \'24', tickets: 30645621 },
  { month_start: '2024-05-01', month_display: 'May \'24', tickets: 29570016 },
  { month_start: '2024-06-01', month_display: 'Jun \'24', tickets: 25876293 },
  { month_start: '2024-07-01', month_display: 'Jul \'24', tickets: 25799382 },
  { month_start: '2024-08-01', month_display: 'Aug \'24', tickets: 25399485 },
  { month_start: '2024-09-01', month_display: 'Sep \'24', tickets: 24535938 },
  { month_start: '2024-10-01', month_display: 'Oct \'24', tickets: 26120273 },
  { month_start: '2024-11-01', month_display: 'Nov \'24', tickets: 29476785 },
  { month_start: '2024-12-01', month_display: 'Dec \'24', tickets: 33805317 },
  { month_start: '2025-01-01', month_display: 'Jan \'25', tickets: 27018998 },
  { month_start: '2025-02-01', month_display: 'Feb \'25', tickets: 22837370 },
  { month_start: '2025-03-01', month_display: 'Mar \'25', tickets: 25431885 },
  { month_start: '2025-04-01', month_display: 'Apr \'25', tickets: 22116417 },
  { month_start: '2025-05-01', month_display: 'May \'25', tickets: 25936602 },
  { month_start: '2025-06-01', month_display: 'Jun \'25', tickets: 23582917 },
  { month_start: '2025-07-01', month_display: 'Jul \'25', tickets: 24288571 },
  { month_start: '2025-08-01', month_display: 'Aug \'25', tickets: 23168356 },
  { month_start: '2025-09-01', month_display: 'Sep \'25', tickets: 21060038 },
  { month_start: '2025-10-01', month_display: 'Oct \'25', tickets: 22160617 },
  { month_start: '2025-11-01', month_display: 'Nov \'25', tickets: 25147816 },
  { month_start: '2025-12-01', month_display: 'Dec \'25', tickets: 19452536 },
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


