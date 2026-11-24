import AuthenticatedLayout, { useTheme } from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const { theme } = useTheme();

    // 1. Total & Class Holdings Data
    const summary = {
        totalHoldings: 4280500,
        totalInvested: 3410000,
        totalPnL: 870500,
        totalPnLPercent: 25.52,
        stocksHoldings: 2568300,
        stocksInvested: 2020000,
        stocksPnL: 548300,
        stocksPnLPercent: 27.14,
        mfHoldings: 1712200,
        mfInvested: 1390000,
        mfPnL: 322200,
        mfPnLPercent: 23.18,
    };

    const stocksWeightageOfTotal = ((summary.stocksHoldings / summary.totalHoldings) * 100).toFixed(1);
    const mfWeightageOfTotal = ((summary.mfHoldings / summary.totalHoldings) * 100).toFixed(1);

    // 2. Brokers & AMC Connected Accounts
    const brokersAndAmcs = [
        {
            name: 'Zerodha Kite',
            type: 'Broker',
            category: 'Direct Equities & ETFs',
            value: 1680200,
            pnl: '+28.4%',
            isPositive: true,
            status: 'Synced 10m ago',
            icon: '⚡',
            accent: 'from-amber-500/20 to-orange-500/20',
            border: 'border-orange-500/30',
            badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
        },
        {
            name: 'Groww',
            type: 'Broker & AMC',
            category: 'Stocks & Direct MFs',
            value: 888100,
            pnl: '+24.7%',
            isPositive: true,
            status: 'Synced 1h ago',
            icon: '🌱',
            accent: 'from-emerald-500/20 to-teal-500/20',
            border: 'border-emerald-500/30',
            badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        },
        {
            name: 'HDFC AMC Direct',
            type: 'AMC',
            category: 'Large & Flexi Cap MFs',
            value: 742000,
            pnl: '+21.3%',
            isPositive: true,
            status: 'CAMS CAS Sync',
            icon: '💎',
            accent: 'from-blue-500/20 to-cyan-500/20',
            border: 'border-blue-500/30',
            badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        },
        {
            name: 'Nippon India AMC',
            type: 'AMC',
            category: 'Small Cap & Index Funds',
            value: 970200,
            pnl: '+24.6%',
            isPositive: true,
            status: 'KFintech Sync',
            icon: '🎯',
            accent: 'from-purple-500/20 to-indigo-500/20',
            border: 'border-purple-500/30',
            badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        },
    ];

    // 3. Asset & Cap Allocation Charts Data
    const assetAllocations = [
        { label: 'Equity / Stocks', percentage: 60, amount: '₹25,68,300', color: 'bg-emerald-400', hex: '#34d399' },
        { label: 'Active Mutual Funds', percentage: 28, amount: '₹11,98,540', color: 'bg-cyan-400', hex: '#22d3ee' },
        { label: 'Debt & Liquid Funds', percentage: 8, amount: '₹3,42,440', color: 'bg-indigo-400', hex: '#818cf8' },
        { label: 'Gold & Commodities', percentage: 4, amount: '₹1,71,220', color: 'bg-amber-400', hex: '#fbbf24' },
    ];

    const mfCapAllocations = [
        { label: 'Large Cap', percentage: 44, amount: '₹7,53,368', color: 'bg-blue-500', hex: '#3b82f6' },
        { label: 'Flexi / Multi Cap', percentage: 26, amount: '₹4,45,172', color: 'bg-teal-400', hex: '#2dd4bf' },
        { label: 'Mid Cap', percentage: 18, amount: '₹3,08,196', color: 'bg-purple-500', hex: '#a855f7' },
        { label: 'Small Cap', percentage: 12, amount: '₹2,05,464', color: 'bg-rose-400', hex: '#fb7185' },
    ];

    // 4. Detailed Stocks Holdings
    const stocksHoldingsList = [
        {
            symbol: 'RELIANCE',
            name: 'Reliance Industries Ltd.',
            broker: 'Zerodha',
            shares: 280,
            avgPrice: 2450.00,
            currPrice: 2980.50,
            curValue: 834540,
            gain: 148540,
            gainPercent: 21.65,
            isPositive: true,
        },
        {
            symbol: 'HDFCBANK',
            name: 'HDFC Bank Ltd.',
            broker: 'Zerodha',
            shares: 390,
            avgPrice: 1480.00,
            currPrice: 1720.00,
            curValue: 670800,
            gain: 93600,
            gainPercent: 16.21,
            isPositive: true,
        },
        {
            symbol: 'TCS',
            name: 'Tata Consultancy Services',
            broker: 'Groww',
            shares: 110,
            avgPrice: 3500.00,
            currPrice: 4120.00,
            curValue: 453200,
            gain: 68200,
            gainPercent: 17.71,
            isPositive: true,
        },
        {
            symbol: 'INFY',
            name: 'Infosys Limited',
            broker: 'Zerodha',
            shares: 220,
            avgPrice: 1420.00,
            currPrice: 1680.00,
            curValue: 369600,
            gain: 57200,
            gainPercent: 18.30,
            isPositive: true,
        },
        {
            symbol: 'LT',
            name: 'Larsen & Toubro Ltd.',
            broker: 'Groww',
            shares: 65,
            avgPrice: 3200.00,
            currPrice: 3694.75,
            curValue: 240160,
            gain: 32160,
            gainPercent: 15.46,
            isPositive: true,
        },
    ];

    // 5. Detailed Mutual Funds Holdings
    const mfHoldingsList = [
        {
            scheme: 'Parag Parikh Flexi Cap Direct-Growth',
            amc: 'PPFAS AMC',
            capCategory: 'Flexi Cap',
            units: 7200.54,
            nav: 78.45,
            curValue: 564882,
            invested: 420000,
            gain: 144882,
            gainPercent: 34.49,
            isPositive: true,
        },
        {
            scheme: 'Nippon India Small Cap Fund Direct-Growth',
            amc: 'Nippon India MF',
            capCategory: 'Small Cap',
            units: 2450.12,
            nav: 175.20,
            curValue: 429261,
            invested: 310000,
            gain: 119261,
            gainPercent: 38.47,
            isPositive: true,
        },
        {
            scheme: 'Mirae Asset Large Cap Fund Direct-Growth',
            amc: 'Mirae Asset AMC',
            capCategory: 'Large Cap',
            units: 3600.00,
            nav: 112.30,
            curValue: 404280,
            invested: 360000,
            gain: 44280,
            gainPercent: 12.30,
            isPositive: true,
        },
        {
            scheme: 'HDFC Mid-Cap Opportunities Direct-Growth',
            amc: 'HDFC AMC',
            capCategory: 'Mid Cap',
            units: 1890.30,
            nav: 166.00,
            curValue: 313789,
            invested: 300000,
            gain: 13789,
            gainPercent: 4.59,
            isPositive: true,
        },
    ];

    // Format utility
    const formatINR = (num) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(num);
    };

    const isDark = theme === 'dark';

    // Theme color helper classes
    const cardBg = isDark
        ? 'bg-[#0b101d]/90 border-slate-800/90 text-slate-100 shadow-xl'
        : 'bg-white border-slate-200 text-slate-900 shadow-sm';
    const subText = isDark ? 'text-slate-400' : 'text-slate-500';
    const tableHeader = isDark ? 'bg-slate-900/60 text-slate-400' : 'bg-slate-50 text-slate-600';
    const tableRowHover = isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50/80';
    const tableBorder = isDark ? 'border-slate-800' : 'border-slate-100';

    return (
        <AuthenticatedLayout>
            <Head title="Portfolio Dashboard - Codeblocks Finance" />

            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
                
                {/* Dashboard Title & Overview Banner */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Multi-Broker Live Feed Active
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                            Personal Wealth & Portfolio Overview
                        </h1>
                        <p className={`text-sm ${subText} mt-1`}>
                            Real-time valuation across all synced demat brokers, AMCs, and mutual fund folios.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href={route('connect.index')}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                            </svg>
                            Connect AMC / Broker
                        </Link>

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Refresh All Feeds
                        </button>
                    </div>
                </div>

                {/* ROW 1: Top Cards (Total, Stocks, Mutual Funds with % of Overall) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. Total Holdings */}
                    <div className={`rounded-2xl p-6 border ${cardBg} relative overflow-hidden`}>
                        <div className="flex items-center justify-between">
                            <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>
                                Consolidated Net Worth
                            </span>
                            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                                💼
                            </span>
                        </div>
                        <div className="mt-3 text-3xl font-extrabold tracking-tight">
                            {formatINR(summary.totalHoldings)}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs">
                            <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                ▲ +{summary.totalPnLPercent}% ({formatINR(summary.totalPnL)})
                            </span>
                            <span className={subText}>overall returns</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-700/40 flex justify-between text-xs">
                            <span className={subText}>Invested Amount</span>
                            <span className="font-semibold">{formatINR(summary.totalInvested)}</span>
                        </div>
                    </div>

                    {/* 2. Stocks Holdings */}
                    <div className={`rounded-2xl p-6 border ${cardBg} relative overflow-hidden`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>
                                    Stocks & Direct Equity
                                </span>
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                    {stocksWeightageOfTotal}% of Total
                                </span>
                            </div>
                            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                                📈
                            </span>
                        </div>
                        <div className="mt-3 text-3xl font-extrabold tracking-tight">
                            {formatINR(summary.stocksHoldings)}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs">
                            <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                ▲ +{summary.stocksPnLPercent}% ({formatINR(summary.stocksPnL)})
                            </span>
                            <span className={subText}>unrealized</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-700/40 flex justify-between text-xs">
                            <span className={subText}>Invested Capital</span>
                            <span className="font-semibold">{formatINR(summary.stocksInvested)}</span>
                        </div>
                    </div>

                    {/* 3. Mutual Funds Holdings */}
                    <div className={`rounded-2xl p-6 border ${cardBg} relative overflow-hidden`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-semibold uppercase tracking-wider ${subText}`}>
                                    Mutual Funds & Folios
                                </span>
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                                    {mfWeightageOfTotal}% of Total
                                </span>
                            </div>
                            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                                📊
                            </span>
                        </div>
                        <div className="mt-3 text-3xl font-extrabold tracking-tight">
                            {formatINR(summary.mfHoldings)}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs">
                            <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                ▲ +{summary.mfPnLPercent}% ({formatINR(summary.mfPnL)})
                            </span>
                            <span className={subText}>gain</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-700/40 flex justify-between text-xs">
                            <span className={subText}>Invested Capital</span>
                            <span className="font-semibold">{formatINR(summary.mfInvested)}</span>
                        </div>
                    </div>
                </div>

                {/* ROW 2: Broker & AMC Cards */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
                            <span>Connected Brokers & AMCs</span>
                            <span className={`text-xs font-medium ${subText}`}>({brokersAndAmcs.length} Active Feeds)</span>
                        </h2>
                        <Link
                            href={route('connect.index')}
                            className="text-xs text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                        >
                            + Connect Broker / CAS
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {brokersAndAmcs.map((broker, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl p-5 border ${cardBg} hover:-translate-y-1 transition-all duration-200`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-2xl">{broker.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-sm">{broker.name}</h3>
                                            <p className={`text-[11px] ${subText}`}>{broker.category}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${broker.badgeBg}`}>
                                        {broker.type}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <div className={`text-[11px] font-medium ${subText}`}>Holdings Valuation</div>
                                    <div className="text-xl font-bold tracking-tight mt-0.5">
                                        {formatINR(broker.value)}
                                    </div>
                                </div>

                                <div className="mt-3 pt-3 border-t border-slate-700/30 flex items-center justify-between text-xs">
                                    <span className="font-semibold text-emerald-400">
                                        {broker.pnl}
                                    </span>
                                    <span className={`text-[10px] ${subText}`}>
                                        {broker.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROW 3: Visual Charts (Instrument Breakdown & MF Market Cap Breakdown) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Chart 1: Instrument Asset Allocation (Equity / Debt / Gold / etc.) */}
                    <div className={`rounded-2xl p-6 border ${cardBg}`}>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-bold text-base">Asset Class & Instrument Allocation</h3>
                                <p className={`text-xs ${subText} mt-0.5`}>Weighted distribution across asset categories</p>
                            </div>
                            <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                                Balanced
                            </span>
                        </div>

                        {/* Visual multi-segment bar */}
                        <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-800 my-4 shadow-inner">
                            {assetAllocations.map((item, i) => (
                                <div
                                    key={i}
                                    className={`${item.color} h-full transition-all duration-500`}
                                    style={{ width: `${item.percentage}%` }}
                                    title={`${item.label}: ${item.percentage}%`}
                                />
                            ))}
                        </div>

                        {/* Breakdown Legend Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {assetAllocations.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-500/5 border border-slate-700/20">
                                    <div className="flex items-center gap-2.5">
                                        <span className={`w-3 h-3 rounded-full ${item.color}`} />
                                        <div>
                                            <div className="text-xs font-semibold">{item.label}</div>
                                            <div className={`text-[11px] ${subText}`}>{item.amount}</div>
                                        </div>
                                    </div>
                                    <span className="font-extrabold text-sm">{item.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chart 2: Mutual Fund Cap Category Breakdown (Large, Mid, Small Cap) */}
                    <div className={`rounded-2xl p-6 border ${cardBg}`}>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-bold text-base">Mutual Funds Market Cap Diversification</h3>
                                <p className={`text-xs ${subText} mt-0.5`}>Exposure by market capitalization profile</p>
                            </div>
                            <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                                Growth Tilt
                            </span>
                        </div>

                        {/* Visual multi-segment bar */}
                        <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-800 my-4 shadow-inner">
                            {mfCapAllocations.map((item, i) => (
                                <div
                                    key={i}
                                    className={`${item.color} h-full transition-all duration-500`}
                                    style={{ width: `${item.percentage}%` }}
                                    title={`${item.label}: ${item.percentage}%`}
                                />
                            ))}
                        </div>

                        {/* Breakdown Legend Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {mfCapAllocations.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-500/5 border border-slate-700/20">
                                    <div className="flex items-center gap-2.5">
                                        <span className={`w-3 h-3 rounded-full ${item.color}`} />
                                        <div>
                                            <div className="text-xs font-semibold">{item.label}</div>
                                            <div className={`text-[11px] ${subText}`}>{item.amount}</div>
                                        </div>
                                    </div>
                                    <span className="font-extrabold text-sm">{item.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ROW 4: Stock Holdings Details with Weightage */}
                <div className={`rounded-2xl border ${cardBg} overflow-hidden`}>
                    <div className="p-6 border-b border-slate-700/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <h3 className="font-bold text-base flex items-center gap-2">
                                <span>Equity & Stock Holdings</span>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {stocksHoldingsList.length} Holdings
                                </span>
                            </h3>
                            <p className={`text-xs ${subText} mt-0.5`}>
                                Individual stocks with calculated weightage from total stock portfolio ({formatINR(summary.stocksHoldings)})
                            </p>
                        </div>
                        <span className="text-xs font-medium text-emerald-400">
                            Total Equity Weight: 100%
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className={`${tableHeader} border-b ${tableBorder} font-semibold uppercase tracking-wider text-[11px]`}>
                                    <th className="py-3.5 px-6">Instrument</th>
                                    <th className="py-3.5 px-4">Broker</th>
                                    <th className="py-3.5 px-4 text-right">Qty & Avg</th>
                                    <th className="py-3.5 px-4 text-right">LTP</th>
                                    <th className="py-3.5 px-4 text-right">Current Value</th>
                                    <th className="py-3.5 px-4 text-right">P&L</th>
                                    <th className="py-3.5 px-6 text-right">Portfolio Weight</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/20">
                                {stocksHoldingsList.map((stock, i) => {
                                    const weight = ((stock.curValue / summary.stocksHoldings) * 100).toFixed(1);
                                    return (
                                        <tr key={i} className={`${tableRowHover} transition-colors`}>
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-sm">{stock.symbol}</div>
                                                <div className={`text-[11px] ${subText}`}>{stock.name}</div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="px-2.5 py-1 rounded-md bg-slate-500/10 border border-slate-700/30 text-[10px] font-semibold">
                                                    {stock.broker}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <div className="font-semibold">{stock.shares} units</div>
                                                <div className={`text-[11px] ${subText}`}>₹{stock.avgPrice.toFixed(2)}</div>
                                            </td>
                                            <td className="py-4 px-4 text-right font-semibold">
                                                ₹{stock.currPrice.toFixed(2)}
                                            </td>
                                            <td className="py-4 px-4 text-right font-bold text-sm">
                                                {formatINR(stock.curValue)}
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <div className="font-bold text-emerald-400">
                                                    +{stock.gainPercent}%
                                                </div>
                                                <div className={`text-[11px] ${subText}`}>
                                                    +{formatINR(stock.gain)}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="font-bold text-sm text-cyan-400">{weight}%</div>
                                                <div className="w-20 bg-slate-700/40 h-1.5 rounded-full ml-auto mt-1.5 overflow-hidden">
                                                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${weight}%` }} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ROW 5: Mutual Fund Holdings Details with Weightage */}
                <div className={`rounded-2xl border ${cardBg} overflow-hidden`}>
                    <div className="p-6 border-b border-slate-700/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <h3 className="font-bold text-base flex items-center gap-2">
                                <span>Mutual Fund Schemes & Folios</span>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {mfHoldingsList.length} Funds
                                </span>
                            </h3>
                            <p className={`text-xs ${subText} mt-0.5`}>
                                Direct mutual fund schemes with calculated weightage from total MF portfolio ({formatINR(summary.mfHoldings)})
                            </p>
                        </div>
                        <span className="text-xs font-medium text-cyan-400">
                            Total MF Weight: 100%
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className={`${tableHeader} border-b ${tableBorder} font-semibold uppercase tracking-wider text-[11px]`}>
                                    <th className="py-3.5 px-6">Scheme Name</th>
                                    <th className="py-3.5 px-4">AMC & Category</th>
                                    <th className="py-3.5 px-4 text-right">Units & NAV</th>
                                    <th className="py-3.5 px-4 text-right">Invested</th>
                                    <th className="py-3.5 px-4 text-right">Current Value</th>
                                    <th className="py-3.5 px-4 text-right">P&L (Returns)</th>
                                    <th className="py-3.5 px-6 text-right">MF Weight</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/20">
                                {mfHoldingsList.map((fund, i) => {
                                    const weight = ((fund.curValue / summary.mfHoldings) * 100).toFixed(1);
                                    return (
                                        <tr key={i} className={`${tableRowHover} transition-colors`}>
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-sm max-w-xs">{fund.scheme}</div>
                                                <div className="text-[10px] text-emerald-400 font-medium">Direct Growth Plan</div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="font-semibold">{fund.amc}</div>
                                                <span className="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-semibold border border-blue-500/20">
                                                    {fund.capCategory}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <div className="font-semibold">{fund.units.toFixed(2)} units</div>
                                                <div className={`text-[11px] ${subText}`}>NAV ₹{fund.nav.toFixed(2)}</div>
                                            </td>
                                            <td className="py-4 px-4 text-right font-medium">
                                                {formatINR(fund.invested)}
                                            </td>
                                            <td className="py-4 px-4 text-right font-bold text-sm">
                                                {formatINR(fund.curValue)}
                                            </td>
                                            <td className="py-4 px-4 text-right">
                                                <div className="font-bold text-emerald-400">
                                                    +{fund.gainPercent}%
                                                </div>
                                                <div className={`text-[11px] ${subText}`}>
                                                    +{formatINR(fund.gain)}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="font-bold text-sm text-emerald-400">{weight}%</div>
                                                <div className="w-20 bg-slate-700/40 h-1.5 rounded-full ml-auto mt-1.5 overflow-hidden">
                                                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${weight}%` }} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
