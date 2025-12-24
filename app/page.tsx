'use client';
import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, LineChart, Line, ComposedChart
} from 'recharts';
import { ICONS, AI_AGENT_HANDOVER_DATA, ACCOUNT_PERFORMANCE_DATA, QUARTERLY_ACCOUNT_DATA, SUPPORT_INQUIRIES_DATA } from './constans';
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

        {/* Insight 1: AI Agent Handover vs Fully Automated */}
        <InsightSection
          title="Handover & Quality by AI Agent"
          subtitle="AI Agent Ticket Handover vs Fully Automated Tickets"
          narrative="From January to August 2025, we've seen remarkable growth in AI agent ticket volume, with total_ai_agent_tickets increasing from 1.27M to 2.28M—a 79% increase. More importantly, the automation efficiency has improved dramatically: fully_automated_percent rose from 33.3% in January to 49.8% in July, before settling at 43% in August. This shift means that nearly half of all AI agent tickets are now fully automated without human handover, representing millions of interactions handled autonomously. The handover_percent trend shows we're getting better at resolving issues without escalation."
          whyItMatters="As fully_automated_percent increases, we reduce agent workload while maintaining quality. The goal is to maximize fully_automated_tickets while minimizing handover_tickets—this data shows we're on the right trajectory, with automation rates improving even as volume grows."
          methodology="Monthly aggregation of AI agent ticket data from January 2025 through August 2025. Metrics include handover_tickets (tickets requiring human escalation), fully_automated_tickets (completely resolved by AI), total_ai_agent_tickets (sum of both), and calculated percentages for each category."
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={AI_AGENT_HANDOVER_DATA} 
              margin={isMobile ? { top: 10, right: 10, left: 0, bottom: 60 } : { top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorHandover" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorFullyAutomated" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="month_start" 
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
                label={isMobile ? undefined : { value: 'Ticket Count', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: isMobile ? 10 : 12}}
                domain={[0, 100]}
                label={isMobile ? undefined : { value: 'Percentage %', angle: 90, position: 'insideRight', fill: '#94a3b8' }}
                width={isMobile ? 50 : 60}
              />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: isMobile ? '12px' : '14px'}}
                formatter={(value: number | undefined, name: string | undefined) => {
                  const nameStr = name || '';
                  if (nameStr.includes('%') || nameStr === 'Handover %' || nameStr === 'Fully Automated %') {
                    return [`${value?.toFixed(1)}%`, nameStr];
                  }
                  return [value ? value.toLocaleString() : '0', nameStr];
                }}
              />
              <Legend wrapperStyle={isMobile ? { fontSize: '11px', paddingTop: '10px' } : {}} iconSize={isMobile ? 12 : 14} />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="handover_tickets" 
                name={isMobile ? 'Handover' : 'Handover Tickets'} 
                stackId="1"
                stroke="#ef4444" 
                fillOpacity={1} 
                fill="url(#colorHandover)" 
                strokeWidth={isMobile ? 1.5 : 2} 
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="fully_automated_tickets" 
                name={isMobile ? 'Fully Auto' : 'Fully Automated Tickets'} 
                stackId="1"
                stroke="#10b981" 
                fillOpacity={1} 
                fill="url(#colorFullyAutomated)" 
                strokeWidth={isMobile ? 1.5 : 2} 
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="handover_percent" 
                name="Handover %" 
                stroke="#f59e0b" 
                strokeWidth={isMobile ? 2 : 3} 
                dot={{fill: '#f59e0b', r: isMobile ? 3 : 5}}
                activeDot={{r: isMobile ? 5 : 7}}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="fully_automated_percent" 
                name="Fully Automated %" 
                stroke="#22c55e" 
                strokeWidth={isMobile ? 2 : 3} 
                dot={{fill: '#22c55e', r: isMobile ? 3 : 5}}
                activeDot={{r: isMobile ? 5 : 7}}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </InsightSection>

        {/* Insight 2: Account Performance by GMV Band */}
        <InsightSection
          title="AI Coverage Performance Across Commercial Accounts"
          subtitle="Rolling 28-day metrics for Commercial ($3-20m) accounts as of December 1, 2025"
          narrative="Analyzing 8 commercial accounts in the $3-20M GMV band reveals significant variation in AI automation coverage. The top performer (FXKMAIPBXK) achieved 840,975 AI-covered tickets in the rolling 28-day period, representing 54% coverage of their total ticket volume. On average, these accounts show 55% AI coverage, with fully automated tickets accounting for 20% of total volume. This data demonstrates that even within the same GMV band, automation adoption varies widely—indicating opportunity for knowledge sharing and best practice implementation."
          whyItMatters="Understanding performance variation within GMV bands helps identify high-performing accounts that can serve as benchmarks. Accounts with similar revenue profiles but different automation rates reveal untapped efficiency potential."
          methodology="Data extracted from account performance tables for event_date 12/1/2025, focusing on Commercial ($3-20m) fixed_gmv_parent_band. Metrics represent rolling 28-day windows: rolling_ai_covered_28, rolling_closed_billed_28, and rolling_total_tickets_28."
        >
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
        </InsightSection>

        {/* Insight 3: Quarterly Automation Performance */}
        <InsightSection
          title="Q1 2025 Automation Performance by Account"
          subtitle="Total interactions breakdown: automated vs human across flows, AI agent, and human interactions"
          narrative="First quarter 2025 data reveals dramatic variation in automation adoption. The top performer (JRWNITZDEL) achieved 99.99% automation rate with 638,610 automated interactions out of 638,611 total—nearly perfect automation. In contrast, GVIEAVHYQF automated only 29.4% of interactions, with 138,391 requiring human intervention. The data shows that flows_interactions dominate successful automation (603,596 for JRWNITZDEL), while ai_agent_interactions provide a middle layer for complex queries. Average first response times correlate inversely with automation rates—higher automation means faster responses."
          whyItMatters="These benchmarks show what's possible when automation is fully embraced. Accounts with 50%+ automation rates see response times measured in minutes, not hours. The gap between top and bottom performers represents millions in potential efficiency gains."
          methodology="Quarterly aggregation of account performance data for 2025-Q1. Metrics include total_interactions, automated_interactions (sum of flows_interactions and ai_agent_interactions), human_interactions, automation_rate_percent, and avg_first_response_time_min."
        >
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
        </InsightSection>

        {/* Insight 4: Support Inquiries by Intent and Channel */}
        <InsightSection
          title="Support Inquiries by Intent and Channel"
          subtitle="Breakdown of support inquiries by TICKET INTENT LVL 1 for PERIOD 2025-12-01 across CHANNEL chat"
          narrative="On December 1, 2025, we processed 882,823 support inquiries across chat channel, with Order-related inquiries dominating at 42.5% of total volume (375,357 inquiries). Product inquiries followed at 30% (264,531), while Account and Exchange intents represented smaller but critical segments. This distribution reveals where automation can have the highest impact—Order and Product intents are prime candidates for self-service solutions, while Account and Exchange inquiries often require human empathy and complex problem-solving."
          whyItMatters="Knowing where your tickets are coming from helps you prioritize automation investments. Order status questions can be automated, freeing agents for complex Account issues that drive retention. The data shows clear opportunities: Order and Product intents together account for 72.5% of volume, representing the biggest automation opportunity."
          methodology="Data extracted from Support Inquiries by Intent and Channel table for PERIOD 2025-12-01, CHANNEL chat, showing SUPPORT_INQUIRIES broken down by TICKET_INTENT_LVL_1 categories."
        >
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
