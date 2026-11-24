import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout
            title="Create an account"
            subtitle="Start aggregating your multi-broker & AMC wealth in one place"
        >
            <Head title="Create Account - Codeblocks Finance" />

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        autoComplete="name"
                        autoFocus
                        placeholder="John Doe"
                        onChange={(e) => setData('name', e.target.value)}
                        className="mt-1.5 block w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        required
                    />
                    <InputError message={errors.name} className="mt-1.5 text-xs text-rose-400" />
                </div>

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
                        placeholder="investor@example.com"
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1.5 block w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        required
                    />
                    <InputError message={errors.email} className="mt-1.5 text-xs text-rose-400" />
                </div>

                <div>
                    <label htmlFor="password" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="new-password"
                        placeholder="Minimum 8 characters"
                        onChange={(e) => setData('password', e.target.value)}
                        className="mt-1.5 block w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        required
                    />
                    <InputError message={errors.password} className="mt-1.5 text-xs text-rose-400" />
                </div>

                <div>
                    <label htmlFor="password_confirmation" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Confirm Password
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        placeholder="Re-type your password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className="mt-1.5 block w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-1.5 text-xs text-rose-400" />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        {processing ? 'Creating account...' : 'Create Account & Start Tracking'}
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
                        Existing Investor?
                    </span>
                </div>
            </div>

            {/* Already have an account Button */}
            <div>
                <Link
                    href={route('login')}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
                >
                    Already have an account? Log In
                </Link>
            </div>
        </GuestLayout>
    );
}
