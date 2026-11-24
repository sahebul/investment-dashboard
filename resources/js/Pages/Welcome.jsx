import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const brokersAndAmcs = [
        { name: 'Zerodha Kite', type: 'Broker', tag: 'Direct Integration', icon: '⚡', color: 'from-amber-500/20 to-orange-500/20', border: 'border-orange-500/30' },
        { name: 'Groww', type: 'Broker & AMC', tag: 'Instant Sync', icon: '🌱', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30' },
        { name: 'Upstox', type: 'Broker', tag: 'Multi-Asset API', icon: '📈', color: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/30' },
        { name: 'ICICI Direct', type: 'Banking & Demat', tag: 'CAS Auto-Fetch', icon: '🏦', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30' },
        { name: 'HDFC AMC & Mutual Funds', type: 'AMC / MF', tag: 'CAMS / KFintech', icon: '💎', color: 'from-rose-500/20 to-red-500/20', border: 'border-rose-500/30' },
        { name: 'Nippon India MF', type: 'AMC', tag: 'Daily NAV Tracker', icon: '🎯', color: 'from-yellow-500/20 to-amber-500/20', border: 'border-yellow-500/30' },
    ];

    const features = [
        {
            title: 'Unified Net Worth Dashboard',
            desc: 'Aggregate stocks, mutual funds, ETFs, fixed deposits, and US equities across all your demat accounts in real time.',
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Multi-Broker & AMC Aggregation',
            desc: 'Connect Zerodha, Groww, AngelOne, Upstox, and CAMS/KFintech statements seamlessly into one single consolidated ledger.',
            icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
        },
        {
            title: 'True XIRR & Capital Gains Analytics',
            desc: 'Gain deep insights into true compounding returns (XIRR), realized vs unrealized P&L, and automated tax-loss harvesting alerts.',
            icon: (
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            title: 'Bank-Grade Privacy & Security',
            desc: 'Your financial privacy is non-negotiable. Zero data selling, client-side encryption, and read-only portfolio analysis.',
            icon: (
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    const stats = [
        { value: '₹450 Cr+', label: 'Tracked Assets' },
        { value: '35+', label: 'Supported Brokers & AMCs' },
        { value: '99.9%', label: 'Sync Accuracy' },
        { value: 'Zero', label: 'Hidden Tracking Fees' },
    ];

    return (
        <>
            <Head title="Codeblocks Finance - Unified Wealth & Portfolio Tracking" />

            <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-emerald-500 selection:text-black relative overflow-hidden font-sans">
                {/* Background Ambient Glows */}
                <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
                <div className="pointer-events-none absolute top-1/4 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />

                {/* Navigation Bar */}
                <header className="relative z-20 border-b border-slate-800/80 bg-[#090D16]/70 backdrop-blur-xl sticky top-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                        {/* Brand Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-[1.5px] shadow-lg shadow-emerald-500/20">
                                <div className="h-full w-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                                    <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                        <polyline points="16 7 22 7 22 13" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                                    Codeblocks<span className="text-emerald-400">.Finance</span>
                                </span>
                                <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Portfolio Engine
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/25 active:scale-95"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="relative group inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl hover:from-emerald-300 hover:to-cyan-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95"
                                    >
                                        Get Started
                                        <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main className="relative z-10">
                    {/* Hero Section */}
                    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Multi-Broker & AMC Aggregation Platform
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
                            All your investments.{' '}
                            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                                Every broker, every AMC.
                            </span>{' '}
                            One command center.
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Stop switching between 5 different apps. Consolidate your Demat portfolios, Mutual Funds, direct stock holdings, and cash reserves in a single high-performance dashboard.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href={route('login')}
                                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <span>Get Started with Your Portfolio</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>

                            <a
                                href="#integrations"
                                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 transition-all duration-200"
                            >
                                View Supported Brokers
                            </a>
                        </div>

                        {/* Stats Banner */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Interactive Portfolio Mockup Preview */}
                    <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-24">
                        <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/20 shadow-2xl shadow-emerald-950/40">
                            <div className="bg-[#0b101d] rounded-[15px] p-6 sm:p-8 border border-slate-800">
                                {/* Header Bar */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
                                    <div>
                                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Consolidated Portfolio</p>
                                        <div className="flex items-baseline gap-3 mt-1">
                                            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">₹38,45,920.40</span>
                                            <span className="inline-flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                                ▲ +18.42% (₹5,98,400)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                                            Synced 2 mins ago
                                        </span>
                                        <span className="inline-flex items-center text-xs px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                            ● 4 Accounts Live
                                        </span>
                                    </div>
                                </div>

                                {/* Asset Allocation Breakdown Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                                        <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                                            <span>Direct Equity (Zerodha + Upstox)</span>
                                            <span className="text-emerald-400 font-semibold">+22.8%</span>
                                        </div>
                                        <div className="text-xl font-bold text-white mt-1">₹24,12,400</div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '62%' }} />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                                        <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                                            <span>Mutual Funds (Groww + AMC)</span>
                                            <span className="text-cyan-400 font-semibold">+14.6%</span>
                                        </div>
                                        <div className="text-xl font-bold text-white mt-1">₹11,85,520</div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: '31%' }} />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                                        <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                                            <span>Fixed Income & Liquid Funds</span>
                                            <span className="text-indigo-400 font-semibold">+7.1%</span>
                                        </div>
                                        <div className="text-xl font-bold text-white mt-1">₹2,48,000</div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                                            <div className="bg-indigo-400 h-full rounded-full" style={{ width: '7%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Supported Brokers and AMCs Section */}
                    <section id="integrations" className="py-20 bg-slate-950/70 border-y border-slate-800/80">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center max-w-3xl mx-auto mb-14">
                                <h2 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                                    Ecosystem Compatibility
                                </h2>
                                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                    Sync seamlessly across India's top Brokers & AMCs
                                </p>
                                <p className="mt-4 text-slate-400 text-base">
                                    Whether you trade on Zerodha, hold SIPs with Groww, or direct mutual funds with HDFC, Codeblocks brings it into one pristine ledger.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {brokersAndAmcs.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} to-slate-900/90 border ${item.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl">{item.icon}</span>
                                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                                                {item.type}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-lg font-bold text-white">{item.name}</h3>
                                        <p className="mt-1 text-xs text-slate-400 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                            {item.tag}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                                Powerful Capabilities
                            </h2>
                            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                Built specifically for serious wealth builders
                            </p>
                            <p className="mt-4 text-slate-400 text-base">
                                Everything you need to track, evaluate, and optimize personal net worth without manual spreadsheet headaches.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform duration-200">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
                                    <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom CTA Banner */}
                    <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border border-emerald-500/30 text-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                            <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-white">
                                Ready to master your consolidated wealth?
                            </h2>
                            <p className="relative z-10 mt-4 text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
                                Join Codeblocks Finance today to connect your broker accounts, track AMC mutual funds, and monitor real-time gains effortlessly.
                            </p>
                            <div className="relative z-10 mt-8 flex justify-center">
                                <Link
                                    href={route('login')}
                                    className="px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-xl shadow-emerald-500/20 active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
                                >
                                    <span>Get Started Now</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-800/80 bg-[#070b13] py-8 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Codeblocks Finance. Built for modern investors managing multi-broker portfolios.</p>
                </footer>
            </div>
        </>
    );
}
