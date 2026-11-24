import { Link } from '@inertiajs/react';

export default function GuestLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-emerald-500 selection:text-black relative flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 overflow-hidden font-sans">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

            {/* Brand Logo Header */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10 mb-8">
                <Link href="/" className="inline-flex items-center space-x-3 group">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                        <div className="h-full w-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                            <svg className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-left">
                        <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                            Codeblocks<span className="text-emerald-400">.Finance</span>
                        </span>
                        <div className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                            Unified Portfolio Terminal
                        </div>
                    </div>
                </Link>

                {title && (
                    <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className="mt-2 text-sm text-slate-400">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Form Card Container */}
            <div className="relative z-10 w-full sm:max-w-md">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/30 shadow-2xl shadow-emerald-950/30">
                    <div className="rounded-[15px] bg-[#0b101d]/90 backdrop-blur-xl p-6 sm:p-8 border border-slate-800/80">
                        {children}
                    </div>
                </div>

                {/* Back to Home Link */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to landing page
                    </Link>
                </div>
            </div>
        </div>
    );
}
