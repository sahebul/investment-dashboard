import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // Default to 'dark' to match Welcome page theme
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('app-theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('app-theme', theme);
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`min-h-screen transition-colors duration-200 ${
                theme === 'dark'
                    ? 'bg-[#090D16] text-slate-100'
                    : 'bg-slate-50 text-slate-800'
            } relative overflow-hidden font-sans`}>
                
                {/* Ambient glow effects for dark mode */}
                {theme === 'dark' && (
                    <>
                        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
                        <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                    </>
                )}

                {/* Top Navigation */}
                <nav className={`relative z-20 border-b sticky top-0 backdrop-blur-xl ${
                    theme === 'dark'
                        ? 'border-slate-800/80 bg-[#090D16]/80'
                        : 'border-slate-200 bg-white/80'
                }`}>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between items-center">
                            {/* Brand & Left Navigation */}
                            <div className="flex items-center space-x-6">
                                <Link href="/" className="flex items-center space-x-3">
                                    <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-[1.5px] shadow-md shadow-emerald-500/20">
                                        <div className={`h-full w-full rounded-[10px] flex items-center justify-center ${
                                            theme === 'dark' ? 'bg-[#0d1322]' : 'bg-white'
                                        }`}>
                                            <svg className="h-4.5 w-4.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                                <polyline points="16 7 22 7 22 13" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                        Codeblocks<span className={theme === 'dark' ? 'text-white' : 'text-slate-800'}>.Finance</span>
                                    </span>
                                </Link>

                                <div className="hidden sm:flex sm:items-center space-x-1">
                                    <Link
                                        href={route('dashboard')}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                                            route().current('dashboard')
                                                ? theme === 'dark'
                                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                                    : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                                : theme === 'dark'
                                                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        Portfolio Dashboard
                                    </Link>
                                    <Link
                                        href={route('connect.index')}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                                            route().current('connect.index')
                                                ? theme === 'dark'
                                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                                    : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                                : theme === 'dark'
                                                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        Connect Accounts
                                    </Link>
                                </div>
                            </div>

                            {/* Right Actions: Dark/Light Toggle + User Menu */}
                            <div className="hidden sm:flex sm:items-center sm:space-x-4">
                                {/* Theme Switcher Button */}
                                <button
                                    onClick={toggleTheme}
                                    type="button"
                                    aria-label="Toggle light or dark theme"
                                    className={`p-2 rounded-xl border transition-all duration-200 ${
                                        theme === 'dark'
                                            ? 'bg-slate-900 border-slate-700/80 text-amber-300 hover:bg-slate-800 hover:border-slate-600'
                                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {theme === 'dark' ? (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>

                                {/* User Dropdown */}
                                <div className="relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button
                                                type="button"
                                                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium border transition duration-150 ${
                                                    theme === 'dark'
                                                        ? 'bg-slate-900/90 border-slate-700/80 text-slate-200 hover:bg-slate-800'
                                                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                                                }`}
                                            >
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span>{user.name}</span>
                                                <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>
                                                Profile Settings
                                            </Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            {/* Mobile Hamburger */}
                            <div className="-me-2 flex items-center gap-2 sm:hidden">
                                <button
                                    onClick={toggleTheme}
                                    type="button"
                                    className={`p-2 rounded-lg border ${
                                        theme === 'dark' ? 'bg-slate-900 border-slate-700 text-amber-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                                    }`}
                                >
                                    {theme === 'dark' ? '☀️' : '🌙'}
                                </button>
                                <button
                                    onClick={() => setShowingNavigationDropdown((prev) => !prev)}
                                    className={`inline-flex items-center justify-center rounded-lg p-2 ${
                                        theme === 'dark' ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d={showingNavigationDropdown ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile dropdown */}
                    <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} sm:hidden border-t ${
                        theme === 'dark' ? 'border-slate-800 bg-[#0b101d]' : 'border-slate-200 bg-white'
                    }`}>
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('connect.index')} active={route().current('connect.index')}>
                                Connect Accounts
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </nav>

                {/* Subheader if present */}
                {header && (
                    <header className={`border-b ${
                        theme === 'dark' ? 'border-slate-800/80 bg-[#0c1220]/60' : 'border-slate-200 bg-white'
                    }`}>
                        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                {/* Main Content Area */}
                <main className="relative z-10">{children}</main>
            </div>
        </ThemeContext.Provider>
    );
}
