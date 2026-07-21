import React, { useState } from 'react';
import { User, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { brandInfo, getRegisteredUsers, saveRegisteredUser } from '../data/tejendraData';

export default function LoginPage({ setActiveTab, onOpenConsultation, setCurrentUser, currentUser }) {
  const [loginMethod, setLoginMethod] = useState('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const cleanId = identifier.trim().toLowerCase();
      const cleanPass = password.trim();

      // SILENT ADMIN CREDENTIAL CHECK
      if (
        cleanId === 'admin' || 
        cleanId === 'admin@tejendra.com' || 
        cleanId === 'tejendra' ||
        cleanPass === 'admin123' || 
        cleanPass === 'tejendra123'
      ) {
        const adminSession = {
          name: 'Tejendra Meena',
          email: 'tejendrameena7@gmail.com',
          phone: '8107241463',
          role: 'admin'
        };
        setCurrentUser(adminSession);
        setIsLoading(false);
        setActiveTab('admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // STANDARD CLIENT AUTHENTICATION
      const registeredUsers = getRegisteredUsers();
      const existing = registeredUsers.find(u => u.email?.toLowerCase() === cleanId || u.phone === identifier);

      let sessionUser;
      if (existing) {
        sessionUser = { ...existing, role: 'client' };
      } else {
        sessionUser = {
          name: identifier.split('@')[0] || 'Client User',
          email: identifier.includes('@') ? identifier : 'client@example.com',
          phone: identifier.includes('@') ? '+91 8107241463' : identifier,
          role: 'client'
        };
        saveRegisteredUser(sessionUser);
      }

      setCurrentUser(sessionUser);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#1E3A8A] text-left animate-fadeIn">
        
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A] text-[#D4AF37] font-extrabold font-cinzel text-xl flex items-center justify-center mx-auto mb-3 shadow-md border border-[#D4AF37]/30">
            NT
          </div>
          <h2 className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
            Sign In to Portal
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Access your numerology consultation account
          </p>
        </div>

        {!currentUser ? (
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Method Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                  loginMethod === 'email' ? 'bg-[#1E3A8A] text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                Email Address
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                  loginMethod === 'phone' ? 'bg-[#1E3A8A] text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                Mobile Number
              </button>
            </div>

            {/* Input Identifier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {loginMethod === 'phone' ? 'Mobile Number' : 'Email Address'}
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                <input
                  type={loginMethod === 'phone' ? 'tel' : 'email'}
                  required
                  placeholder={loginMethod === 'phone' ? '+91 8107241463' : 'Email Address'}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#D4AF37] text-sm font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                <a href={`https://wa.me/${brandInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E3A8A] font-bold hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#D4AF37] text-sm font-medium"
                />
              </div>
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-4 text-base font-extrabold flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? 'Verifying Account...' : 'Sign In'}
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-semibold">New Client?</span></div>
            </div>

            {/* Secondary Register Button */}
            <button
              type="button"
              onClick={() => setActiveTab('signup')}
              className="btn-secondary w-full py-3.5 text-xs text-center cursor-pointer"
            >
              Register Now for Consultation
            </button>

          </form>
        ) : (
          /* AUTHENTICATED SESSION CARD */
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold font-cinzel text-slate-900">
              Welcome Back!
            </h3>
            
            <p className="text-xs text-slate-600">
              Signed in as <strong className="text-[#1E3A8A]">{currentUser.name || currentUser.email}</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Account Status:</span>
                <span className="font-bold text-[#1E3A8A] uppercase">Active Client</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="font-semibold text-slate-800">{currentUser.email}</span>
              </div>
            </div>

            <div className="space-y-3">
              {currentUser.role === 'admin' && (
                <button
                  onClick={() => setActiveTab('admin')}
                  className="btn-primary w-full py-3.5 text-sm cursor-pointer"
                >
                  Open Dashboard
                </button>
              )}

              <button
                onClick={onOpenConsultation}
                className="btn-primary w-full py-3.5 text-sm cursor-pointer"
              >
                Book Consultation Session
              </button>

              <button
                onClick={() => setCurrentUser(null)}
                className="w-full py-3 bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
