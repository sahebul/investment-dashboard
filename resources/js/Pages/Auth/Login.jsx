import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout
            title="Welcome back"
            subtitle="Access your consolidated broker accounts & AMC portfolios"
        >
            <Head title="Sign In - Codeblocks Finance" />

            {status && (
                <div className="mb-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm font-medium text-emerald-400">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        autoFocus
                        placeholder="investor@example.com"
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1.5 block w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        required
                    />
                    <InputError message={errors.email} className="mt-1.5 text-xs text-rose-400" />
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                            Password
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        placeholder="••••••••••••"
                        onChange={(e) => setData('password', e.target.value)}
                        className="mt-1.5 block w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        required
                    />
                    <InputError message={errors.password} className="mt-1.5 text-xs text-rose-400" />
                </div>

                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-400 focus:ring-offset-slate-900"
                        />
                        <span className="ms-2.5 text-xs text-slate-400">
                            Remember this device
                        </span>
                    </label>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        {processing ? 'Signing in...' : 'Sign In to Portfolio'}
                    </button>
                </div>
            </form>

            {/* Divider */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#0b101d] px-3 text-slate-500 font-medium">
                        New to Codeblocks?
                    </span>
                </div>
            </div>

            {/* Create Account Button */}
            <div>
                <Link
                    href={route('register')}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
                >
                    Create a New Account
                </Link>
            </div>
        </GuestLayout>
    );
}
