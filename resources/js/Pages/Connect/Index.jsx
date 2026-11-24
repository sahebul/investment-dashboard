import AuthenticatedLayout, { useTheme } from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Connect() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [activeTab, setActiveTab] = useState('all'); // 'all', 'broker', 'amc', 'cas'
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [connectingState, setConnectingState] = useState(null); // id of provider currently connecting
    const [connectedList, setConnectedList] = useState(['zerodha', 'groww', 'hdfc_amc', 'nippon_amc']);

    // List of brokers, AMCs, and CAS providers
    const providers = [
        {
            id: 'zerodha',
            name: 'Zerodha Kite',
            type: 'broker',
            category: 'Discount Broker',
            tagline: 'Direct Equities, F&O, ETFs, & Coin MF portfolios',
            icon: '⚡',
            badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
            popular: true,
            authType: 'API Key & Kite Connect OAuth',
            supportedAssets: ['Stocks', 'ETFs', 'Mutual Funds', 'Bonds'],
        },
        {
            id: 'groww',
            name: 'Groww',
            type: 'broker',
            category: 'Broker & Direct MFs',
            tagline: 'Zero-commission stock trading & instant direct MF sync',
            icon: '🌱',
            badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            popular: true,
            authType: 'Groww Direct Connect / Mobile OTP',
            supportedAssets: ['Stocks', 'Direct Mutual Funds', 'US Stocks'],
        },
        {
            id: 'upstox',
            name: 'Upstox Pro',
            type: 'broker',
            category: 'Discount Broker',
            tagline: 'Pro trading platform with fast demat holdings sync',
            icon: '📈',
            badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
            popular: true,
            authType: 'Upstox Developer API v2',
            supportedAssets: ['Stocks', 'Futures', 'Options', 'Commodities'],
        },
        {
            id: 'angelone',
            name: 'Angel One (SmartAPI)',
            type: 'broker',
            category: 'Full-Service Broker',
            tagline: 'Automated portfolio tracking via SmartAPI protocols',
            icon: '👼',
            badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
            popular: false,
            authType: 'SmartAPI TOTP + Client ID',
            supportedAssets: ['Stocks', 'Mutual Funds', 'IPOs', 'Bonds'],
        },
        {
            id: 'icici_direct',
            name: 'ICICI Direct',
            type: 'broker',
            category: 'Banking 3-in-1 Broker',
            tagline: 'Connect ICICI 3-in-1 Demat & direct investment folios',
            icon: '🏦',
            badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            popular: false,
            authType: 'Breeze API / Net Banking OAuth',
            supportedAssets: ['Stocks', 'FDs', 'Bonds', 'PMS', 'Mutual Funds'],
        },
        {
            id: 'hdfc_amc',
            name: 'HDFC AMC Direct',
            type: 'amc',
            category: 'Asset Management Company',
            tagline: 'Large & Mid Cap schemes, balanced advantage, index funds',
            icon: '💎',
            badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
            popular: true,
            authType: 'PAN + Folio Number Instant Fetch',
            supportedAssets: ['Direct Mutual Funds', 'SIPs', 'STPs'],
        },
        {
            id: 'nippon_amc',
            name: 'Nippon India Mutual Fund',
            type: 'amc',
            category: 'Asset Management Company',
            tagline: 'Small cap leaders, CPSE ETF & multi-asset funds',
            icon: '🎯',
            badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
            popular: true,
            authType: 'Folio Sync / Registered Email OTP',
            supportedAssets: ['Mutual Funds', 'ETFs', 'Gold Funds'],
        },
        {
            id: 'sbi_mf',
            name: 'SBI Mutual Fund',
            type: 'amc',
            category: 'Asset Management Company',
            tagline: "India's largest fund house with nationwide folio coverage",
            icon: '🏛️',
            badgeBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
            popular: true,
            authType: 'PAN & Mobile OTP Verification',
            supportedAssets: ['Mutual Funds', 'Index Funds', 'Liquid Funds'],
        },
        {
            id: 'ppfas_amc',
            name: 'PPFAS Mutual Fund (Parag Parikh)',
            type: 'amc',
            category: 'Asset Management Company',
            tagline: 'Flagship Flexi Cap and international equity value funds',
            icon: '🐢',
            badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            popular: true,
            authType: 'CAN / Folio Direct Link',
            supportedAssets: ['Flexi Cap Direct', 'Tax Saver ELSS', 'Liquid Fund'],
        },
        {
            id: 'mirae_amc',
            name: 'Mirae Asset Mutual Fund',
            type: 'amc',
            category: 'Asset Management Company',
            tagline: 'Leading emerging equities & global tech ETF investments',
            icon: '🚀',
            badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
            popular: false,
            authType: 'PAN / Folio Number Sync',
            supportedAssets: ['Large Cap', 'Global ETFs', 'Healthcare Funds'],
        },
        {
            id: 'cams_cas',
            name: 'CAMS CAS Consolidated Feed',
            type: 'cas',
            category: 'Consolidated Account Statement',
            tagline: 'One-click import for all folios serviced by CAMS registrar',
            icon: '📑',
            badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
            popular: true,
            authType: 'eCAS PDF Upload or CAMS myCAMS API',
            supportedAssets: ['All CAMS Mutual Fund Folios across all AMCs'],
        },
        {
            id: 'kfintech_cas',
            name: 'KFintech (Karvy) Consolidated Feed',
            type: 'cas',
            category: 'Consolidated Account Statement',
            tagline: 'Unified import for Nippon, UTI, Axis, Mirae and KFintech AMCs',
            icon: '📂',
            badgeBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
            popular: true,
            authType: 'eCAS PDF or KPRISM Gateway',
            supportedAssets: ['All KFintech Mutual Fund Folios'],
        },
    ];

    const filteredProviders = providers.filter((item) => {
        const matchesCategory =
            activeTab === 'all'
                ? true
                : activeTab === 'cas'
                ? item.type === 'cas'
                : item.type === activeTab;
        const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleConnectClick = (provider) => {
        setSelectedProvider(provider);
    };

    const handleConfirmConnect = (e) => {
        e.preventDefault();
        if (!selectedProvider) return;

        setConnectingState(selectedProvider.id);
        setTimeout(() => {
            setConnectedList((prev) =>
                prev.includes(selectedProvider.id) ? prev : [...prev, selectedProvider.id]
            );
            setConnectingState(null);
            setSelectedProvider(null);
        }, 1200);
    };

    const handleDisconnect = (id) => {
        setConnectedList((prev) => prev.filter((item) => item !== id));
    };

    // Card style helpers matching Dashboard theme
    const cardBg = isDark
        ? 'bg-[#0b101d]/90 border-slate-800/90 text-slate-100 shadow-xl'
        : 'bg-white border-slate-200 text-slate-900 shadow-sm';
    const subText = isDark ? 'text-slate-400' : 'text-slate-500';

    return (
        <AuthenticatedLayout>
            <Head title="Connect AMC & Broker Accounts - Codeblocks Finance" />

            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
                
                {/* Header & Navigation Breadcrumb */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-xs font-semibold">
                            <Link
                                href={route('dashboard')}
                                className="text-emerald-400 hover:underline flex items-center gap-1"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Dashboard
                            </Link>
                            <span className={subText}>/</span>
                            <span className={subText}>Integrations & Data Sources</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                            Connect Demat Broker, AMC or CAS
                        </h1>
                        <p className={`text-sm ${subText} mt-1 max-w-2xl`}>
                            Link your trading accounts and direct mutual fund portfolios to enable real-time price tracking, automated CAS imports, and unified net worth calculation.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href={route('dashboard')}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-700/60 hover:bg-slate-800/50 transition-all"
                        >
                            Return to Portfolio
                        </Link>
                    </div>
                </div>

                {/* Integration Trust Banner */}
                <div className={`p-4 sm:p-5 rounded-2xl border ${isDark ? 'bg-gradient-to-r from-emerald-950/20 via-slate-900/60 to-cyan-950/20 border-emerald-500/20' : 'bg-emerald-50/60 border-emerald-200'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xl flex-shrink-0">
                                🔒
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-emerald-400">
                                    Read-Only & SEBI Compliant Data Sync
                                </h3>
                                <p className={`text-xs ${subText} mt-0.5`}>
                                    We never ask for your trading PINs or transaction permissions. Connections are strictly restricted to fetch holding valuations and unit balances.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap self-start sm:self-auto">
                            <span>256-Bit Encrypted</span>
                        </div>
                    </div>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    {/* Category tabs */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-500/10 border border-slate-700/30 overflow-x-auto">
                        {[
                            { key: 'all', label: 'All Integrations' },
                            { key: 'broker', label: 'Stock Brokers' },
                            { key: 'amc', label: 'Mutual Fund AMCs' },
                            { key: 'cas', label: 'CAS Auto-Sync' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                                    activeTab === tab.key
                                        ? 'bg-emerald-500 text-white shadow-sm'
                                        : isDark
                                        ? 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search box */}
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search Zerodha, HDFC, CAMS..."
                            className={`w-full text-xs rounded-xl px-3.5 py-2 pl-9 border transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                                isDark
                                    ? 'bg-slate-900/90 border-slate-700/80 text-white placeholder-slate-500'
                                    : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                            }`}
                        />
                        <svg
                            className={`w-4 h-4 absolute left-3 top-2.5 ${subText}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Provider Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProviders.map((provider) => {
                        const isConnected = connectedList.includes(provider.id);
                        const isConnecting = connectingState === provider.id;

                        return (
                            <div
                                key={provider.id}
                                className={`rounded-2xl p-6 border ${cardBg} flex flex-col justify-between hover:border-slate-700 transition-all duration-200 relative group`}
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-500/10 border border-slate-700/30">
                                                {provider.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-base leading-snug">{provider.name}</h3>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${provider.badgeBg}`}>
                                                    {provider.category}
                                                </span>
                                            </div>
                                        </div>

                                        {isConnected && (
                                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                Active
                                            </span>
                                        )}
                                    </div>

                                    <p className={`text-xs ${subText} mt-4 leading-relaxed`}>
                                        {provider.tagline}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-slate-700/30 space-y-2">
                                        <div className="flex items-center justify-between text-[11px]">
                                            <span className={subText}>Sync Protocol</span>
                                            <span className="font-medium text-slate-300">{provider.authType}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-[11px]">
                                            <span className={subText}>Supported Assets</span>
                                            <span className="font-medium text-slate-300 truncate max-w-[160px]">
                                                {provider.supportedAssets.join(', ')}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-700/20 flex items-center justify-between gap-3">
                                    {isConnected ? (
                                        <>
                                            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                                                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Connected
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => handleDisconnect(provider.id)}
                                                className="text-[11px] text-rose-400 hover:text-rose-300 hover:underline font-semibold"
                                            >
                                                Disconnect
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <span className={`text-[11px] ${subText}`}>Ready to pair</span>
                                            <button
                                                type="button"
                                                onClick={() => handleConnectClick(provider)}
                                                disabled={isConnecting}
                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50"
                                            >
                                                {isConnecting ? (
                                                    <>
                                                        <svg className="animate-spin w-3.5 h-3.5 text-slate-950" viewBox="0 0 24 24" fill="none">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                        </svg>
                                                        Linking...
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                        </svg>
                                                        Connect
                                                    </>
                                                )}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredProviders.length === 0 && (
                    <div className={`p-12 text-center rounded-2xl border ${cardBg}`}>
                        <div className="text-3xl mb-2">🔍</div>
                        <h3 className="font-bold text-base">No providers found</h3>
                        <p className={`text-xs ${subText} mt-1`}>
                            No broker or AMC matches your search query "{searchQuery}". Try searching for Zerodha, Groww, CAMS, or HDFC.
                        </p>
                    </div>
                )}

                {/* Manual CAS PDF Upload Section */}
                <div className={`rounded-2xl p-6 border ${cardBg}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                                Alternative Method
                            </div>
                            <h3 className="font-bold text-base">
                                Upload Consolidated Account Statement (CAS PDF)
                            </h3>
                            <p className={`text-xs ${subText} mt-1 max-w-xl`}>
                                Have a CAS PDF generated from CAMS, KFintech or NSDL? Upload it with your password to automatically parse all mutual fund schemes and stock holdings without API credentials.
                            </p>
                        </div>

                        <label className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all">
                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <span>Choose CAS PDF</span>
                            <input type="file" accept=".pdf" className="hidden" />
                        </label>
                    </div>
                </div>

            </div>

            {/* Connection Modal */}
            {selectedProvider && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className={`w-full max-w-md rounded-2xl p-6 border ${cardBg} shadow-2xl relative`}>
                        <div className="flex items-center justify-between pb-4 border-b border-slate-700/30">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{selectedProvider.icon}</span>
                                <div>
                                    <h3 className="font-bold text-base">Connect {selectedProvider.name}</h3>
                                    <p className={`text-xs ${subText}`}>{selectedProvider.category}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedProvider(null)}
                                className={`p-1.5 rounded-lg hover:bg-slate-700/30 ${subText}`}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleConfirmConnect} className="mt-5 space-y-4">
                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 ${subText}`}>
                                    Client / Folio / Account ID
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder={selectedProvider.type === 'broker' ? 'e.g. AB1234 or Client ID' : 'e.g. Folio Number or Registered PAN'}
                                    className={`w-full text-xs rounded-xl px-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                                        isDark
                                            ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                                            : 'bg-white border-slate-300 text-slate-800'
                                    }`}
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-semibold mb-1.5 ${subText}`}>
                                    API Key / Authentication Token (Optional)
                                </label>
                                <input
                                    type="password"
                                    placeholder="Leave blank for web redirect OAuth"
                                    className={`w-full text-xs rounded-xl px-3.5 py-2.5 border transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                                        isDark
                                            ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                                            : 'bg-white border-slate-300 text-slate-800'
                                    }`}
                                />
                            </div>

                            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 flex items-start gap-2">
                                <span className="text-base">🛡️</span>
                                <span>
                                    Credentials are cryptographically secured. Auto-sync will fetch new NAVs and trade execution daily at 00:00 IST.
                                </span>
                            </div>

                            <div className="pt-2 flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setSelectedProvider(null)}
                                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={connectingState === selectedProvider.id}
                                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2"
                                >
                                    {connectingState === selectedProvider.id ? 'Authorizing...' : 'Authorize & Connect'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
