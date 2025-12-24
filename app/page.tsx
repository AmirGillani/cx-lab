'use client';
import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, LineChart, Line, ComposedChart
} from 'recharts';
import { ICONS, MERCHANT_QUALITY_RATE_DATA, ACCOUNT_PERFORMANCE_DATA, QUARTERLY_ACCOUNT_DATA, SUPPORT_INQUIRIES_DATA, AI_AGENT_RESOLUTION_RATE_DATA, TOTAL_REVENUE_DATA, ROLLING_28_DAY_GMV_DATA, CSAT_BY_INTERACTION_TYPE_DATA, WEEKLY_AVG_CSAT_DATA, CSAT_BY_TICKET_TYPE_DATA, MONTHLY_TICKET_HANDLING_DATA, MONTHLY_TICKET_EVOLUTION_DATA } from './constans';
import InsightSection from './componenets/InsightSection';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900 selection:bg-blue-100">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">G</div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">CX Lab</span>
              <span className="text-[10px] uppercase font-bold text-blue-600 tracking-widest leading-none">Proof of Concept</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Insights</a>
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Methodology</a>
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">2026 Roadmap</a>
            <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md shadow-slate-200">
              Share Report
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          Experimental Research Phase
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
          Turning Customer Data <br />
          <span className="text-blue-600">Into Growth Stories.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed font-medium">
          The 2026 initiative to analyze 50 million monthly conversations. 
          We're moving past boring PDFs into an era of interactive, narrative-driven CX intelligence.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Conversations Analyzed', value: '50M+', sub: 'Per Month' },
            { label: 'Partner Brands', value: '15,000', sub: 'Active Ecosystem' },
            { label: 'Avg. Automation Rate', value: '42%', sub: '2024 Benchmark' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</span>
              <span className="text-4xl font-black text-slate-900 mb-1">{stat.value}</span>
              <span className="text-sm text-slate-500">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Insight 1: Merchant Quality Rate */}
        <InsightSection
          title="Merchant Quality Rate"
          subtitle="Feedback breakdown: good, ok, and bad ratings with quality rate trend"
          narrative="From July to December 2025, we've tracked merchant quality feedback showing consistent improvement in quality rates. The merchant_quality_rate increased from 67.6% in July to 85.2% in December—an 18 percentage point improvement. Good feedback grew from 4,461 in July to 59,761 in December, while bad feedback decreased from 2,891 to 12,535 over the same period. The total feedback volume increased significantly, from 8,911 in July to 84,589 in December, indicating both scale and quality improvements."
          whyItMatters="Merchant quality rate directly reflects customer satisfaction and service effectiveness. As we scale operations, maintaining or improving quality rates becomes critical—this data shows we've achieved both volume growth and quality improvement simultaneously."
          methodology="Monthly aggregation of Merchant Quality Rate data from MerchantQualityRate.json. Metrics include good (positive feedback count), ok (neutral feedback count), bad (negative feedback count), total (sum of all feedback), and merchant_quality_rate (percentage of positive feedback). Data represents the last entry for each month from July to December 2025."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={MERCHANT_QUALITY_RATE_DATA} 
              margin={isMobile ? { top: 10, right: 10, left: 0, bottom: 60 } : { top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorGood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorOk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorBad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="month_display" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                angle={isMobile ? -90 : -45}
                textAnchor="end"
                height={isMobile ? 70 : 80}
              />
              <YAxis 
                yAxisId="left" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                label={isMobile ? undefined : { value: 'Feedback Count', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                domain={[0, 100]}
                label={isMobile ? undefined : { value: 'Quality Rate %', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                formatter={(value: number | undefined, name: string | undefined) => {
                  const nameStr = name || '';
                  if (nameStr === 'merchant_quality_rate' || nameStr.includes('%')) {
                    return [`${value?.toFixed(1)}%`, nameStr];
                  }
                  return [value ? value.toLocaleString() : '0', nameStr];
                }}
              />
              <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="good" 
                name="Good" 
                stackId="1"
                stroke="#10b981" 
                fillOpacity={1} 
                fill="url(#colorGood)" 
                strokeWidth={isMobile ? 1.5 : 2}
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="ok" 
                name="Ok" 
                stackId="1"
                stroke="#f59e0b" 
                fillOpacity={1} 
                fill="url(#colorOk)" 
                strokeWidth={isMobile ? 1.5 : 2}
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="bad" 
                name="Bad" 
                stackId="1"
                stroke="#ef4444" 
                fillOpacity={1} 
                fill="url(#colorBad)" 
                strokeWidth={isMobile ? 1.5 : 2}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="merchant_quality_rate" 
                name="Quality Rate %" 
                stroke="#2563eb" 
                strokeWidth={isMobile ? 2 : 3} 
                dot={{fill: '#2563eb', r: isMobile ? 3 : 5}}
                activeDot={{r: isMobile ? 5 : 7}}
              />
            </ComposedChart>
          </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 2: Account Performance by GMV Band */}
        <InsightSection
          title="AI Coverage Performance Across Commercial Accounts"
          subtitle="Rolling 28-day metrics for Commercial ($3-20m) accounts as of December 1, 2025"
          narrative="Analyzing 8 commercial accounts in the $3-20M GMV band reveals significant variation in AI automation coverage. The top performer (FXKMAIPBXK) achieved 840,975 AI-covered tickets in the rolling 28-day period, representing 54% coverage of their total ticket volume. On average, these accounts show 55% AI coverage, with fully automated tickets accounting for 20% of total volume. This data demonstrates that even within the same GMV band, automation adoption varies widely—indicating opportunity for knowledge sharing and best practice implementation."
          whyItMatters="Understanding performance variation within GMV bands helps identify high-performing accounts that can serve as benchmarks. Accounts with similar revenue profiles but different automation rates reveal untapped efficiency potential."
          methodology="Data extracted from account performance tables for event_date 12/1/2025, focusing on Commercial ($3-20m) fixed_gmv_parent_band. Metrics represent rolling 28-day windows: rolling_ai_covered_28, rolling_closed_billed_28, and rolling_total_tickets_28."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={ACCOUNT_PERFORMANCE_DATA} 
              margin={isMobile ? { top: 10, right: 10, left: 0, bottom: 80 } : { top: 20, right: 30, left: 0, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="account_name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 8 : 10}}
                angle={isMobile ? -90 : -45}
                textAnchor="end"
                height={isMobile ? 90 : 100}
                interval={0}
              />
              <YAxis 
                yAxisId="left" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                label={isMobile ? undefined : { value: 'Ticket Count', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                label={isMobile ? undefined : { value: 'Total Tickets', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                formatter={(value: number | undefined) => value ? value.toLocaleString() : '0'}
              />
              <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
              <Bar 
                yAxisId="left" 
                dataKey="rolling_ai_covered_28" 
                name={isMobile ? 'AI Covered' : 'AI Covered (28d)'} 
                fill="#2563eb" 
                radius={[4, 4, 0, 0]}
                maxBarSize={isMobile ? 50 : 80}
              />
              <Bar 
                yAxisId="left" 
                dataKey="rolling_closed_billed_28" 
                name={isMobile ? 'Closed Billed' : 'Closed Billed (28d)'} 
                fill="#10b981" 
                radius={[4, 4, 0, 0]}
                maxBarSize={isMobile ? 50 : 80}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="rolling_total_tickets_28" 
                name={isMobile ? 'Total (28d)' : 'Total Tickets (28d)'} 
                stroke="#f59e0b" 
                strokeWidth={isMobile ? 2 : 3} 
                dot={{fill: '#f59e0b', r: isMobile ? 3 : 4}}
                activeDot={{r: isMobile ? 5 : 6}}
              />
            </ComposedChart>
          </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 3: Quarterly Automation Performance */}
        <InsightSection
          title="Q1 2025 Automation Performance by Account"
          subtitle="Total interactions breakdown: automated vs human across flows, AI agent, and human interactions"
          narrative="First quarter 2025 data reveals dramatic variation in automation adoption. The top performer (JRWNITZDEL) achieved 99.99% automation rate with 638,610 automated interactions out of 638,611 total—nearly perfect automation. In contrast, GVIEAVHYQF automated only 29.4% of interactions, with 138,391 requiring human intervention. The data shows that flows_interactions dominate successful automation (603,596 for JRWNITZDEL), while ai_agent_interactions provide a middle layer for complex queries. Average first response times correlate inversely with automation rates—higher automation means faster responses."
          whyItMatters="These benchmarks show what's possible when automation is fully embraced. Accounts with 50%+ automation rates see response times measured in minutes, not hours. The gap between top and bottom performers represents millions in potential efficiency gains."
          methodology="Quarterly aggregation of account performance data for 2025-Q1. Metrics include total_interactions, automated_interactions (sum of flows_interactions and ai_agent_interactions), human_interactions, automation_rate_percent, and avg_first_response_time_min."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={QUARTERLY_ACCOUNT_DATA} 
              margin={isMobile ? { top: 10, right: 10, left: 0, bottom: 80 } : { top: 20, right: 30, left: 0, bottom: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="account_name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 8 : 10}}
                angle={isMobile ? -90 : -45}
                textAnchor="end"
                height={isMobile ? 100 : 120}
                interval={0}
              />
              <YAxis 
                yAxisId="left" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                label={isMobile ? undefined : { value: 'Interactions', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                domain={[0, 100]}
                label={isMobile ? undefined : { value: 'Automation Rate %', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                formatter={(value: number | undefined, name: string | undefined) => {
                  const nameStr = name || '';
                  if (nameStr === 'Automation Rate %') {
                    return [`${((value || 0) * 100).toFixed(2)}%`, nameStr];
                  }
                  return [value ? value.toLocaleString() : '0', nameStr];
                }}
              />
              <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
              <Bar 
                yAxisId="left" 
                dataKey="flows_interactions" 
                name={isMobile ? 'Flows' : 'Flows Interactions'} 
                stackId="automated"
                fill="#10b981" 
                radius={[0, 0, 0, 0]}
                maxBarSize={isMobile ? 50 : 80}
              />
              <Bar 
                yAxisId="left" 
                dataKey="ai_agent_interactions" 
                name={isMobile ? 'AI Agent' : 'AI Agent Interactions'} 
                stackId="automated"
                fill="#3b82f6" 
                radius={[0, 0, 0, 0]}
                maxBarSize={isMobile ? 50 : 80}
              />
              <Bar 
                yAxisId="left" 
                dataKey="human_interactions" 
                name={isMobile ? 'Human' : 'Human Interactions'} 
                fill="#ef4444" 
                radius={[4, 4, 0, 0]}
                maxBarSize={isMobile ? 50 : 80}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="automation_rate_percent" 
                name={isMobile ? 'Auto Rate %' : 'Automation Rate %'} 
                stroke="#f59e0b" 
                strokeWidth={isMobile ? 2 : 3} 
                dot={{fill: '#f59e0b', r: isMobile ? 3 : 5}}
                activeDot={{r: isMobile ? 5 : 7}}
                connectNulls={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 4: Support Inquiries by Intent and Channel */}
        <InsightSection
          title="Support Inquiries by Intent and Channel"
          subtitle="Breakdown of support inquiries by TICKET INTENT LVL 1 for PERIOD 2025-12-01 across CHANNEL chat"
          narrative="On December 1, 2025, we processed 882,823 support inquiries across chat channel, with Order-related inquiries dominating at 42.5% of total volume (375,357 inquiries). Product inquiries followed at 30% (264,531), while Account and Exchange intents represented smaller but critical segments. This distribution reveals where automation can have the highest impact—Order and Product intents are prime candidates for self-service solutions, while Account and Exchange inquiries often require human empathy and complex problem-solving."
          whyItMatters="Knowing where your tickets are coming from helps you prioritize automation investments. Order status questions can be automated, freeing agents for complex Account issues that drive retention. The data shows clear opportunities: Order and Product intents together account for 72.5% of volume, representing the biggest automation opportunity."
          methodology="Data extracted from Support Inquiries by Intent and Channel table for PERIOD 2025-12-01, CHANNEL chat, showing SUPPORT_INQUIRIES broken down by TICKET_INTENT_LVL_1 categories."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={SUPPORT_INQUIRIES_DATA} 
              layout="vertical" 
              margin={isMobile ? { top: 10, right: 10, left: 80, bottom: 20 } : { top: 20, right: 30, left: 120, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
              <XAxis 
                type="number" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                label={isMobile ? undefined : { value: 'Support Inquiries', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
              />
              <YAxis 
                type="category" 
                dataKey="TICKET_INTENT_LVL_1" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                width={isMobile ? 75 : 110}
              />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                formatter={(value: number | undefined) => value ? value.toLocaleString() : '0'}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    const data = payload[0].payload as any;
                    return `${data.TICKET_INTENT_LVL_1} (${data.PERIOD})`;
                  }
                  return label;
                }}
              />
              <Bar 
                dataKey="SUPPORT_INQUIRIES" 
                name="Support Inquiries" 
                fill="#2563eb" 
                radius={[0, 8, 8, 0]}
                maxBarSize={isMobile ? 40 : 60}
              />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 5: AI Agent - Resolution Rate */}
        <InsightSection
          title="AI Agent - Resolution Rate"
          subtitle="Monthly resolution rate and ticket coverage metrics for 2025"
          narrative="Throughout 2025, we've tracked the AI Agent resolution rate alongside ticket coverage metrics. The success_rate_28 peaked at 43.7% in July 2025, demonstrating significant improvement in AI agent performance. The rolling_ai_covered_28 metric shows steady growth from 1.15M in January to 3.95M by December, while rolling_closed_billed_28 increased from 348K to 1.41M over the same period. This data reveals both the scale of AI coverage expansion and the effectiveness of resolution rates."
          whyItMatters="Resolution rate directly impacts customer satisfaction and operational efficiency. As AI coverage grows, maintaining or improving resolution rates becomes critical—this data shows we've achieved both scale and quality improvements throughout 2025."
          methodology="Monthly aggregation of AI Agent Resolution Rate data from AIAgentResolutionrate.json. Metrics include success_rate_28 (percentage of successfully resolved tickets), rolling_ai_covered_28 (28-day rolling window of AI-covered tickets), and rolling_closed_billed_28 (28-day rolling window of closed and billed tickets)."
        >
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {/* Prominent percentage display */}
            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              zIndex: 10,
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: isMobile ? '48px' : '72px', 
                fontWeight: 'bold', 
                color: '#1e293b',
                lineHeight: 1
              }}>
                {Math.round(AI_AGENT_RESOLUTION_RATE_DATA[AI_AGENT_RESOLUTION_RATE_DATA.length - 1].success_rate_28)}%
              </div>
            </div>
          <ResponsiveContainer width="100%" height="100%">
              <ComposedChart 
                data={AI_AGENT_RESOLUTION_RATE_DATA} 
                margin={isMobile ? { top: 80, right: 30, left: 0, bottom: 60 } : { top: 100, right: 40, left: 0, bottom: 0 }}
              >
              <defs>
                  <linearGradient id="colorAICovered" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#cbd5e1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#cbd5e1" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorClosedBilled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                />
                <YAxis 
                  yAxisId="left" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                  label={{ value: '', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  domain={[0, 50]}
                  tickFormatter={(value) => `${value}%`}
                  label={{ value: '', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined, name: string | undefined) => {
                    const nameStr = name || '';
                    if (nameStr === 'success_rate_28' || nameStr.includes('%')) {
                      return [`${value?.toFixed(1)}%`, nameStr];
                    }
                    return [value ? (value / 1000000).toFixed(2) + 'M' : '0', nameStr];
                  }}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="rolling_ai_covered_28" 
                  name="rolling_ai_covered_28" 
                  stackId="1"
                  stroke="#cbd5e1" 
                  fillOpacity={1} 
                  fill="url(#colorAICovered)" 
                  strokeWidth={2} 
                />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="rolling_closed_billed_28" 
                  name="rolling_closed_billed_28" 
                  stackId="1"
                  stroke="#64748b" 
                  fillOpacity={1} 
                  fill="url(#colorClosedBilled)" 
                  strokeWidth={2} 
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="success_rate_28" 
                  name="success_rate_28" 
                  stroke="#fb923c" 
                  strokeWidth={3} 
                  dot={{fill: '#fb923c', r: 4}}
                  activeDot={{r: 6}}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 6: Total Revenue - GMV Influenced vs Web */}
        <InsightSection
          title="Total Revenue - GMV Influenced vs Web"
          subtitle="Monthly GMV breakdown: influenced revenue vs web revenue with influence rate"
          narrative="Throughout 2025, we've tracked total revenue across two key channels: GMV Web and GMV Influenced. Web revenue shows dramatic growth, starting at $30.5M in January and peaking at $1.13B in November—a 36x increase. Influenced revenue, while smaller in absolute terms, demonstrates significant growth from $78K in January to $20.7M in November. The gmv_influenced_rate metric reveals the percentage of total revenue attributed to influencer-driven sales, peaking at 2.3% in June and July, indicating strong influencer impact during those months."
          whyItMatters="Understanding the balance between web and influenced revenue helps optimize marketing spend. While web revenue dominates, the influenced rate shows the growing impact of influencer marketing—peaking influence rates correlate with strategic campaign timing and effectiveness."
          methodology="Monthly aggregation of Total Revenue data from TotalRevenue.json. Metrics include gmv_web (total web-based gross merchandise value), gmv_influenced (revenue attributed to influencer marketing), and gmv_influenced_rate (percentage of total revenue from influencer channels)."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart 
                data={TOTAL_REVENUE_DATA} 
                margin={isMobile ? { top: 20, right: 30, left: 0, bottom: 60 } : { top: 20, right: 40, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                />
                <YAxis 
                  yAxisId="left" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => {
                    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
                    if (value >= 1000000) return `$${(value / 1000000).toFixed(0)}M`;
                    return `$${(value / 1000).toFixed(0)}K`;
                  }}
                  label={{ value: '', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  domain={[0, 3]}
                  tickFormatter={(value) => `${value}%`}
                  label={{ value: '', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                />
              <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined, name: string | undefined) => {
                    const nameStr = name || '';
                    if (nameStr === 'gmv_influenced_rate') {
                      return [`${value?.toFixed(2)}%`, nameStr];
                    }
                    if (nameStr === 'gmv_influenced' || nameStr === 'gmv_web') {
                      const val = value || 0;
                      if (val >= 1000000) return [`$${(val / 1000000).toFixed(2)}M`, nameStr];
                      return [`$${(val / 1000).toFixed(2)}K`, nameStr];
                    }
                    return [value ? value.toLocaleString() : '0', nameStr];
                  }}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
                <Bar 
                  yAxisId="left" 
                  dataKey="gmv_web" 
                  name="gmv_web" 
                  fill="#fb923c" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={isMobile ? 50 : 80}
                />
                <Bar 
                  yAxisId="left" 
                  dataKey="gmv_influenced" 
                  name="gmv_influenced" 
                  fill="#2563eb" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={isMobile ? 50 : 80}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="gmv_influenced_rate" 
                  name="gmv_influenced_rate" 
                  stroke="#14b8a6" 
                  strokeWidth={3} 
                  dot={{fill: '#14b8a6', r: 4}}
                  activeDot={{r: 6}}
                />
              </ComposedChart>
          </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 7: Rolling 28-Day GMV */}
        <InsightSection
          title="Rolling 28-Day GMV"
          subtitle="Monthly trends: customers, GMV, and influenced revenue over 28-day rolling windows"
          narrative="Throughout 2025, we've tracked rolling 28-day metrics showing significant growth in both GMV and influenced revenue. The gmv_28d metric started at $26.5M in January and grew exponentially to $1.08B by December—a 40x increase. Similarly, revenue_influenced_28d grew from $72K in January to $18.8M in December, demonstrating the growing impact of influencer-driven sales. The customers metric shows steady growth from 22 to 1,237, indicating expanding customer base. The rapid acceleration in Q4 2025 (September to November) highlights successful scaling of both web and influencer channels."
          whyItMatters="Rolling 28-day windows provide a smoothed view of trends, reducing daily volatility while capturing meaningful growth patterns. The exponential growth in Q4 demonstrates successful channel expansion and marketing effectiveness."
          methodology="Monthly aggregation of Rolling 28-Day GMV data from Rolling28dayGMV.json. Metrics include customers (total customer count), gmv_28d (28-day rolling gross merchandise value), and revenue_influenced_28d (28-day rolling revenue from influencer channels). Data represents the last entry for each month."
        >
          <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
              <ComposedChart 
                data={ROLLING_28_DAY_GMV_DATA} 
                margin={isMobile ? { top: 20, right: 40, left: 0, bottom: 60 } : { top: 20, right: 50, left: 0, bottom: 0 }}
              >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                  angle={isMobile ? -45 : -45}
                  textAnchor="end"
                  height={isMobile ? 70 : 80}
                />
                <YAxis 
                  yAxisId="left" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => {
                    if (value >= 1000000000) return `$${(value / 1000000000).toFixed(1)}B`;
                    if (value >= 1000000) return `$${(value / 1000000).toFixed(0)}M`;
                    return `$${(value / 1000).toFixed(0)}K`;
                  }}
                  domain={[0, 1500000000]}
                  label={{ value: '', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => {
                    if (value >= 1000000) return `$${(value / 1000000).toFixed(0)}M`;
                    return `$${(value / 1000).toFixed(0)}K`;
                  }}
                  domain={[0, 30000000]}
                  label={{ value: '', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                />
              <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined, name: string | undefined) => {
                    const nameStr = name || '';
                    const val = value || 0;
                    if (nameStr === 'customers') {
                      return [val.toLocaleString(), nameStr];
                    }
                    if (val >= 1000000) return [`$${(val / 1000000).toFixed(2)}M`, nameStr];
                    if (val >= 1000) return [`$${(val / 1000).toFixed(2)}K`, nameStr];
                    return [`$${val.toFixed(2)}`, nameStr];
                  }}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="customers" 
                  name="customers" 
                  stroke="#60a5fa" 
                  strokeWidth={3} 
                  dot={{fill: '#60a5fa', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="gmv_28d" 
                  name="gmv_28d" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  dot={{fill: '#f97316', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="revenue_influenced_28d" 
                  name="revenue_influenced_28d" 
                  stroke="#14b8a6" 
                  strokeWidth={3} 
                  dot={{fill: '#14b8a6', r: 4}}
                  activeDot={{r: 6}}
                />
            </ComposedChart>
          </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 8: CSAT by Interaction Type */}
        <InsightSection
          title="CSAT by Interaction Type"
          subtitle="Customer satisfaction scores across different interaction channels from January to November 2025"
          narrative="Throughout 2025, we've tracked CSAT scores across four interaction types, revealing clear performance hierarchies. Human-handled interactions consistently achieve the highest satisfaction, starting at 4.46 in January and maintaining around 4.47-4.51 throughout the period. After-flow interactions show strong performance, improving from 4.26 to 4.35 by November. All AI agent interactions demonstrate moderate satisfaction, fluctuating between 4.07 and 4.18. Fully automated AI agent interactions show the lowest but improving scores, starting at 3.7 and reaching 3.87 by October. The data reveals that while human interactions maintain the highest satisfaction, AI-driven channels are showing improvement, with fully automated interactions gaining 0.17 points over the period."
          whyItMatters="Understanding CSAT by interaction type helps optimize channel allocation and identify improvement opportunities. The consistent gap between human and AI interactions highlights areas for AI enhancement, while the improving trends in automated channels show progress toward closing the satisfaction gap."
          methodology="Monthly CSAT data from CSATbyInteractionType.json. Metrics include csat_human_handled (satisfaction for human-agent interactions), csat_after_flow (satisfaction after automated flow interactions), csat_all_ai_agent (satisfaction for all AI agent interactions), and csat_ai_agent_fully_automated (satisfaction for fully automated AI interactions). Scores range from 1-5."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={CSAT_BY_INTERACTION_TYPE_DATA} 
                margin={isMobile ? { top: 20, right: 30, left: 0, bottom: 60 } : { top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                  angle={isMobile ? -45 : -45}
                  textAnchor="end"
                  height={isMobile ? 70 : 80}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  domain={[3.6, 4.6]}
                  label={{ value: 'CSAT Score', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined) => value ? value.toFixed(2) : '0'}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
                <Line 
                  type="monotone" 
                  dataKey="csat_human_handled" 
                  name="csat_human_handled" 
                  stroke="#a855f7" 
                  strokeWidth={3} 
                  dot={{fill: '#a855f7', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  type="monotone" 
                  dataKey="csat_after_flow" 
                  name="csat_after_flow" 
                  stroke="#60a5fa" 
                  strokeWidth={3} 
                  dot={{fill: '#60a5fa', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  type="monotone" 
                  dataKey="csat_all_ai_agent" 
                  name="csat_all_ai_agent" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  dot={{fill: '#f97316', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  type="monotone" 
                  dataKey="csat_ai_agent_fully_automated" 
                  name="csat_ai_agent_fully_automated" 
                  stroke="#14b8a6" 
                  strokeWidth={3} 
                  dot={{fill: '#14b8a6', r: 4}}
                  activeDot={{r: 6}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 9: Weekly Avg. CSAT by Ticket Intent */}
        <InsightSection
          title="Weekly Avg. CSAT by Ticket Intent"
          subtitle="Monthly average CSAT scores across 13 ticket intent categories from October 2024 to December 2025"
          narrative="Throughout the tracking period, we've monitored CSAT scores across 13 distinct ticket intent categories, revealing significant variation in customer satisfaction by interaction type. Account and Other categories consistently maintain higher scores (often above 4.0), while Promotion & Discount and Shipping tend to score lower (typically 3.0-3.5 range). Feedback shows the most volatility, with scores ranging from 2.71 to 4.2, indicating inconsistent satisfaction levels. Marketing interactions show strong performance, frequently scoring above 4.4. The data reveals that satisfaction varies significantly by intent type, with some categories requiring focused improvement efforts."
          whyItMatters="Understanding CSAT by ticket intent helps prioritize improvement efforts. Categories with consistently lower scores (like Promotion & Discount) represent opportunities for process optimization, while high-performing categories (like Marketing) can serve as benchmarks for best practices."
          methodology="Monthly aggregation of AI Agent CSAT by Ticket Intent data from AIAgentCSATbyTicketIntentRolling7Day.json. Data represents rolling 7-day averages aggregated monthly. Metrics include avg_score (CSAT score) for each contact_reason category: Account, Exchange, Feedback, Marketing, Order, Other, Product, Promotion & Discount, Return, Shipping, Subscription, Warranty, and Wholesale."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={WEEKLY_AVG_CSAT_DATA} 
                margin={isMobile ? { top: 20, right: 30, left: 0, bottom: 60 } : { top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                  angle={isMobile ? -45 : -45}
                  textAnchor="end"
                  height={isMobile ? 70 : 80}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  domain={[2, 5]}
                  label={{ value: 'Weekly Avg. CSAT', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined) => value ? value.toFixed(2) : 'N/A'}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '10px', paddingTop: '10px' } : { fontSize: '11px' }} iconSize={isMobile ? 10 : 12} />
                <Line type="monotone" dataKey="Account" name="Account" stroke="#86efac" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Exchange" name="Exchange" stroke="#60a5fa" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Feedback" name="Feedback" stroke="#c084fc" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Marketing" name="Marketing" stroke="#9333ea" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Order" name="Order" stroke="#fb923c" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Other" name="Other" stroke="#f472b6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Product" name="Product" stroke="#fb7185" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Promotion & Discount" name="Promotion & Discount" stroke="#f97316" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Return" name="Return" stroke="#fbbf24" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Shipping" name="Shipping" stroke="#f87171" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Subscription" name="Subscription" stroke="#9ca3af" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Warranty" name="Warranty" stroke="#f0abfc" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Wholesale" name="Wholesale" stroke="#4ade80" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 10: CSAT by Ticket Type */}
        <InsightSection
          title="CSAT by Ticket Type"
          subtitle="Weekly average CSAT scores and scored volume by ticket type from October 2024 to December 2025"
          narrative="Throughout the tracking period, we've monitored CSAT scores and ticket volumes across three ticket types: human-handled, AI-assisted, and fully AI agent. Human-handled tickets consistently achieve the highest CSAT scores, maintaining around 4.4-4.5 throughout most of the period. AI-assisted tickets show strong performance with scores around 4.3-4.4, while fully AI agent tickets score lower at 3.5-3.7. The volume data reveals a dramatic shift: starting in September 2025, AI-assisted and AI agent ticket counts surged dramatically, with AI-assisted tickets peaking at 73,761 in December 2025. This surge in AI-handled volume coincided with a slight decline in CSAT scores across all categories, suggesting the need for quality optimization as scale increases."
          whyItMatters="Understanding the relationship between ticket volume and CSAT scores by type helps balance automation goals with quality maintenance. The surge in AI-handled tickets shows successful scaling, but the concurrent CSAT decline indicates the need for continuous quality improvement as automation expands."
          methodology="Monthly aggregation of CSAT by Ticket Type data from CSATbyTicketTypeforAIAgentMerchantsTicketLevel.json. Metrics include avg_score (average CSAT score) and ticket_count (number of tickets) for each ticket_type: human, ai_assisted, and ai_agent. Data represents rolling averages aggregated monthly."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart 
                data={CSAT_BY_TICKET_TYPE_DATA} 
                margin={isMobile ? { top: 20, right: 30, left: 0, bottom: 60 } : { top: 20, right: 40, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorHumanTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9ca3af" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorAIAssistedTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorAIAgentTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb923c" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#fb923c" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                  angle={isMobile ? -45 : -45}
                  textAnchor="end"
                  height={isMobile ? 70 : 80}
                />
                <YAxis 
                  yAxisId="left" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  domain={[3, 5]}
                  label={{ value: 'Weekly Avg. CSAT', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  domain={[0, 150000]}
                  label={{ value: 'Scored Volume', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined, name: string | undefined) => {
                    const nameStr = name || '';
                    if (nameStr.includes('avg_score')) {
                      return [value ? value.toFixed(2) : '0', nameStr];
                    }
                    if (nameStr.includes('ticket_count')) {
                      return [value ? value.toLocaleString() : '0', nameStr];
                    }
                    return [value ? value.toLocaleString() : '0', nameStr];
                  }}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="human_ticket_count" 
                  name="human-ticket_count" 
                  stackId="1"
                  stroke="#9ca3af" 
                  fillOpacity={1} 
                  fill="url(#colorHumanTickets)" 
                  strokeWidth={2} 
                />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="ai_assisted_ticket_count" 
                  name="ai_assisted-ticket_count" 
                  stackId="1"
                  stroke="#60a5fa" 
                  fillOpacity={1} 
                  fill="url(#colorAIAssistedTickets)" 
                  strokeWidth={2} 
                />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="ai_agent_ticket_count" 
                  name="ai_agent-ticket_count" 
                  stackId="1"
                  stroke="#fb923c" 
                  fillOpacity={1} 
                  fill="url(#colorAIAgentTickets)" 
                  strokeWidth={2} 
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="human_avg_score" 
                  name="human-avg_score" 
                  stroke="#1f2937" 
                  strokeWidth={3} 
                  strokeDasharray="5 5"
                  dot={{fill: '#1f2937', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="ai_assisted_avg_score" 
                  name="ai_assisted-avg_score" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  dot={{fill: '#2563eb', r: 4}}
                  activeDot={{r: 6}}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="ai_agent_avg_score" 
                  name="ai_agent-avg_score" 
                  stroke="#ef4444" 
                  strokeWidth={3} 
                  dot={{fill: '#ef4444', r: 4}}
                  activeDot={{r: 6}}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 11: Monthly Ticket Handling Evolution */}
        <InsightSection
          title="Monthly Ticket Handling Evolution"
          subtitle="Ticket resolution breakdown by handling type from January 2024 to December 2025"
          narrative="Over the two-year period from January 2024 to December 2025, we've tracked the evolution of ticket handling across four distinct resolution types. Human-fully-resolved tickets dominate the volume, ranging from 16.8M to 31.3M, though showing a declining trend from 30.3M in January 2024 to 16.8M in December 2025. Flows-fully-resolved tickets show the most dramatic growth, starting at just 38 tickets in January 2024 and growing to 384,957 by December 2024, then stabilizing around 150k-200k in 2025. AI-fully-resolved tickets grew from 1,440 to 2.8M by November 2025, while AI-handover-to-human tickets remained relatively low, peaking at 407,661 in August 2025. This data reveals a significant shift toward automated resolution, with flows and AI handling an increasing share of ticket volume."
          whyItMatters="Understanding the evolution of ticket handling types helps track automation adoption and identify where human intervention is still required. The growth in flows-fully-resolved and AI-fully-resolved demonstrates successful automation scaling, while the decline in human-fully-resolved suggests effective workload redistribution."
          methodology="Monthly aggregation of ticket handling data from MonthlyTicketHandlingEvolutionsince2024.json. Metrics include ai_fully_resolved (tickets fully resolved by AI agent), ai_handover_to_human (tickets requiring human escalation), flows_fully_resolved (tickets resolved by automated flows), and human_fully_resolved (tickets resolved by human agents)."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={MONTHLY_TICKET_HANDLING_DATA} 
                margin={isMobile ? { top: 20, right: 30, left: 0, bottom: 60 } : { top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                  angle={isMobile ? -45 : -45}
                  textAnchor="end"
                  height={isMobile ? 70 : 80}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => {
                    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                    return value.toString();
                  }}
                  domain={[0, 35000000]}
                  label={{ value: '', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined) => {
                    const val = value || 0;
                    if (val >= 1000000) return `${(val / 1000000).toFixed(2)}M`;
                    if (val >= 1000) return `${(val / 1000).toFixed(2)}k`;
                    return val.toLocaleString();
                  }}
                />
                <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
                <Line 
                  type="monotone" 
                  dataKey="ai_fully_resolved" 
                  name="ai_fully_resolved" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{r: 6}}
                />
                <Line 
                  type="monotone" 
                  dataKey="ai_handover_to_human" 
                  name="ai_handover_to_human" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{r: 6}}
                />
                <Line 
                  type="monotone" 
                  dataKey="flows_fully_resolved" 
                  name="flows_fully_resolved" 
                  stroke="#14b8a6" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{r: 6}}
                />
                <Line 
                  type="monotone" 
                  dataKey="human_fully_resolved" 
                  name="human_fully_resolved" 
                  stroke="#a855f7" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{r: 6}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Insight 12: Monthly Ticket Evolution */}
        <InsightSection
          title="Monthly Ticket Evolution"
          subtitle="Total ticket volume trends from January 2024 to December 2025"
          narrative="Over the two-year period, total ticket volume shows significant volatility with a clear declining trend. Starting at 30.3M tickets in January 2024, volume peaked at 33.8M in December 2024—the highest point in the tracking period. Following this peak, there was a sharp decline into early 2025, with values fluctuating between approximately 21M and 26M throughout most of 2025. The period ends at its lowest point of 19.5M in December 2025, representing a 35% decline from the peak. This decline suggests either improved automation reducing ticket volume, seasonal variations, or changes in customer behavior patterns."
          whyItMatters="Tracking total ticket volume evolution helps understand overall customer support demand trends. The declining trend, combined with increasing automation rates from other metrics, suggests successful deflection of tickets through automated channels, reducing overall volume while maintaining service quality."
          methodology="Monthly aggregation of total ticket data from MonthlyTicketEvolutionsince2024.json. Metric represents total tickets processed each month from January 2024 through December 2025."
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={MONTHLY_TICKET_EVOLUTION_DATA} 
                margin={isMobile ? { top: 20, right: 30, left: 0, bottom: 60 } : { top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month_display" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 9 : 11}}
                  angle={isMobile ? -45 : -45}
                  textAnchor="end"
                  height={isMobile ? 70 : 80}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                  tickFormatter={(value) => {
                    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                    return value.toString();
                  }}
                  domain={[18000000, 35000000]}
                  label={{ value: '', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                  formatter={(value: number | undefined) => {
                    const val = value || 0;
                    if (val >= 1000000) return `${(val / 1000000).toFixed(2)}M`;
                    return val.toLocaleString();
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tickets" 
                  name="Total Tickets" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{r: 6}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </InsightSection>

        {/* Call to Action Section */}
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ICONS.TrendingUp className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Help Us Shape the 2026 Lab</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 relative z-10">
            We're building a community of ecommerce operators who want to learn, argue, and think together. Join the waitlist for early access to our BigQuery workspace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="operator@brand.com" 
              className="px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white w-full max-w-xs focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="px-8 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap">
              Join the CX Lab
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 grayscale">
            <div className="w-8 h-8 bg-slate-400 rounded-lg flex items-center justify-center text-white font-bold">G</div>
            <span className="font-bold text-slate-500 tracking-tight">Gorgias CX Lab</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Data Security</a>
            <a href="#" className="hover:text-slate-600 transition-colors">API Docs</a>
          </div>
          <p className="text-sm text-slate-400">© 2024 Gorgias Inc. Built for humans, powered by data.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
