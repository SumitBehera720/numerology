import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, Search, ShieldCheck, Lock, LogOut, CheckCircle2, 
  Sparkles, MessageSquare, Phone, Mail, RefreshCw, Trash2, ArrowRight
} from 'lucide-react';
import { brandInfo, getRegisteredUsers, getConsultationBookings } from '../data/tejendraData';

export default function AdminPanel({ setActiveTab, currentUser, setCurrentUser }) {
  const [activeAdminTab, setActiveAdminTab] = useState('bookings');
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const isAdmin = currentUser?.role === 'admin';

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setUsers(getRegisteredUsers());
    setBookings(getConsultationBookings());
  };

  const filteredUsers = users.filter(u => 
    u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBookings = bookings.filter(b => 
    b.userName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.userEmail?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.service?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsAppClient = (phone, name, service) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const msg = `Hello ${name}, this is Tejendra Meena Ji's office regarding your ${service} consultation booking. We have received your request.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] py-10 px-4 sm:px-6 lg:px-8 text-left font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* If user is NOT authenticated as Admin */}
        {!isAdmin ? (
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#1E3A8A] text-center my-12">
            <div className="w-16 h-16 rounded-2xl bg-[#1E3A8A] text-[#D4AF37] flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]">
              <Lock className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-extrabold font-cinzel text-[#1E3A8A]">
              Admin Panel Access Required
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Please sign in with your Admin credentials to access management records.
            </p>

            <button
              onClick={() => setActiveTab('login')}
              className="btn-primary w-full py-3.5 mt-6 text-sm font-extrabold cursor-pointer"
            >
              Go to Sign In Page
            </button>
          </div>
        ) : (
          /* ADMIN DASHBOARD VIEW */
          <div className="space-y-6">
            
            {/* Top Bar */}
            <div className="bg-[#1E3A8A] text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                  System Administration Dashboard
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white">
                  Consultations & Client Management
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={refreshData}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
                <button
                  onClick={() => { setCurrentUser(null); setActiveTab('home'); }}
                  className="p-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-red-400/30"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out Admin
                </button>
              </div>
            </div>

            {/* Metrics Ticker */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block">Total Registered Users</span>
                  <span className="text-3xl font-extrabold font-cinzel text-[#1E3A8A]">{users.length}</span>
                </div>
                <Users className="w-10 h-10 text-[#D4AF37]" />
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block">Consultation Requests</span>
                  <span className="text-3xl font-extrabold font-cinzel text-[#1E3A8A]">{bookings.length}</span>
                </div>
                <Calendar className="w-10 h-10 text-[#D4AF37]" />
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block">Advance Deposit Value</span>
                  <span className="text-3xl font-extrabold font-cinzel text-emerald-600">₹{bookings.length * 1000}</span>
                </div>
                <Sparkles className="w-10 h-10 text-emerald-500" />
              </div>
            </div>

            {/* Controls Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold w-full sm:w-auto">
                <button
                  onClick={() => setActiveAdminTab('bookings')}
                  className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                    activeAdminTab === 'bookings' ? 'bg-[#1E3A8A] text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  Consultation Bookings ({bookings.length})
                </button>
                <button
                  onClick={() => setActiveAdminTab('users')}
                  className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                    activeAdminTab === 'users' ? 'bg-[#1E3A8A] text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  Registered Users ({users.length})
                </button>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search name, phone or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* 1. CONSULTATION BOOKINGS TABLE */}
            {activeAdminTab === 'bookings' && (
              <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-lg font-extrabold font-cinzel text-slate-900">
                    Consultation Requests
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">
                    20% Advance Payment @ ₹1,000 Required
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-[#F8F6F1] text-[#1E3A8A] font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="p-4">Client Name</th>
                        <th className="p-4">Contact Info</th>
                        <th className="p-4">Service Required</th>
                        <th className="p-4">Preferred Date</th>
                        <th className="p-4">Deposit Status</th>
                        <th className="p-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredBookings.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="p-8 text-center text-slate-400 font-medium">
                            No consultation bookings found.
                          </td>
                        </tr>
                      ) : (
                        filteredBookings.map((b) => (
                          <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-bold text-slate-900">
                              {b.userName || b.name || 'Valued Client'}
                              <span className="block text-[10px] text-slate-400 font-normal">DOB: {b.dob || 'N/A'}</span>
                            </td>
                            <td className="p-4">
                              <div className="font-semibold text-slate-800">{b.phone}</div>
                              <div className="text-[10px] text-slate-500">{b.userEmail || b.email}</div>
                            </td>
                            <td className="p-4 font-bold text-[#1E3A8A]">
                              {b.service}
                            </td>
                            <td className="p-4">
                              <div className="font-semibold text-slate-800">{b.date || 'TBD'}</div>
                              <div className="text-[10px] text-slate-400">{b.timeSlot || 'Morning'}</div>
                            </td>
                            <td className="p-4">
                              <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[10px] border border-emerald-200">
                                {b.advanceDeposit || '₹1,000 Advance'}
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <button
                                onClick={() => handleWhatsAppClient(b.phone, b.userName || b.name, b.service)}
                                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] rounded-lg transition-all flex items-center justify-center gap-1 mx-auto"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                WhatsApp Client
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 2. REGISTERED USERS TABLE */}
            {activeAdminTab === 'users' && (
              <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-lg font-extrabold font-cinzel text-slate-900">
                    Registered Client Accounts
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">
                    Client Accounts Database
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-[#F8F6F1] text-[#1E3A8A] font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="p-4">Client Name</th>
                        <th className="p-4">Email Address</th>
                        <th className="p-4">Mobile Number</th>
                        <th className="p-4">Date of Birth</th>
                        <th className="p-4">Registered Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredUsers.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="p-8 text-center text-slate-400 font-medium">
                            No registered users found.
                          </td>
                        </tr>
                      ) : (
                        filteredUsers.map((u) => (
                          <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-bold text-slate-900">
                              {u.name}
                            </td>
                            <td className="p-4 font-medium text-slate-700">
                              {u.email}
                            </td>
                            <td className="p-4 font-semibold text-slate-800">
                              {u.phone}
                            </td>
                            <td className="p-4 text-slate-600">
                              {u.dob || 'Not provided'}
                            </td>
                            <td className="p-4 text-slate-500">
                              {u.registeredAt ? new Date(u.registeredAt).toLocaleDateString() : 'Recent'}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
