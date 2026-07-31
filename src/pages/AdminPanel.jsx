import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, Search, ShieldCheck, Lock, LogOut, CheckCircle2, 
  Sparkles, MessageSquare, Phone, Mail, RefreshCw, Trash2, ArrowRight
} from 'lucide-react';
import { 
  brandInfo, 
  getRegisteredUsers, 
  getConsultationBookings, 
  updateConsultationBooking, 
  deleteConsultationBooking,
  getUpdatesData,
  saveUpdatePost,
  deleteUpdatePost
} from '../data/tejendraData';

export default function AdminPanel({ setActiveTab, currentUser, setCurrentUser }) {
  const [activeAdminTab, setActiveAdminTab] = useState('bookings');
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [newPost, setNewPost] = useState({
    type: 'reel',
    title: '',
    duration: '',
    thumbnail: '/logo.jpeg',
    description: '',
    link: 'https://instagram.com/numerologybytejendra',
    readTime: '',
    category: 'Educational',
    excerpt: ''
  });

  const isAdmin = currentUser?.role === 'admin';

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setUsers(getRegisteredUsers());
    setBookings(getConsultationBookings());
    setPosts(getUpdatesData());
  };

  const handleUpdateStatus = (id, newStatus) => {
    updateConsultationBooking(id, { status: newStatus });
    refreshData();
  };

  const handleDeleteBooking = (id) => {
    if (window.confirm("Are you sure you want to delete this booking lead?")) {
      deleteConsultationBooking(id);
      refreshData();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2MB for storage.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPost(prev => ({ ...prev, thumbnail: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.title) return;
    saveUpdatePost(newPost);
    setNewPost({
      type: 'reel',
      title: '',
      duration: '',
      thumbnail: '/logo.jpeg',
      description: '',
      link: 'https://instagram.com/numerologybytejendra',
      readTime: '',
      category: 'Educational',
      excerpt: ''
    });
    refreshData();
    alert("Post added successfully!");
  };

  const handleDeletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteUpdatePost(postId);
      refreshData();
    }
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
    const msg = `Hello ${name}, this is Tejendraa K Meena Ji's office regarding your ${service} consultation booking. We have received your request.`;
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
                <button
                  onClick={() => setActiveAdminTab('updates')}
                  className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                    activeAdminTab === 'updates' ? 'bg-[#1E3A8A] text-white shadow-sm' : 'text-slate-600'
                  }`}
                >
                  Manage Updates Posts ({posts.length})
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
                              <select
                                value={b.status || 'Active Request'}
                                onChange={(e) => handleUpdateStatus(b.id, e.target.value)}
                                className="px-2.5 py-1 rounded-full text-[10px] font-extrabold border outline-none bg-emerald-50 text-emerald-800 border-emerald-200 cursor-pointer"
                              >
                                <option value="Active Request">Active Request</option>
                                <option value="Deposit Pending">Deposit Pending</option>
                                <option value="20% Deposit Paid">20% Deposit Paid</option>
                                <option value="Fully Paid">Fully Paid</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex gap-2 justify-center">
                                <button
                                  onClick={() => handleWhatsAppClient(b.phone, b.userName || b.name, b.service)}
                                  className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  WhatsApp
                                </button>
                                <button
                                  onClick={() => handleDeleteBooking(b.id)}
                                  className="p-1.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all cursor-pointer border border-red-200/45"
                                  title="Delete lead"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
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
                        <th className="p-4">Mobile Number</th>
                        <th className="p-4">Date of Birth</th>
                        <th className="p-4">Password</th>
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
                            <td className="p-4 font-semibold text-slate-800">
                              {u.phone}
                            </td>
                            <td className="p-4 text-slate-600">
                              {u.dob || 'Not provided'}
                            </td>
                            <td className="p-4 font-mono text-slate-700">
                              {u.password || 'N/A (Seed)'}
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

            {/* 3. MANAGE UPDATES POSTS */}
            {activeAdminTab === 'updates' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
                
                {/* Add New Post Form */}
                <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-lg border border-slate-200 space-y-4">
                  <h3 className="text-lg font-extrabold font-cinzel text-[#1E3A8A] border-b border-slate-100 pb-3">
                    Add New Update / Reel
                  </h3>
                  
                  <form onSubmit={handleAddPost} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Post Type
                      </label>
                      <select
                        value={newPost.type}
                        onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="reel">Instagram Video Reel</option>
                        <option value="article">Blog Article / News</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Post Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Favorable Mobile Numbers"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Thumbnail Image
                      </label>
                      <div className="space-y-2">
                        {/* File Upload Input */}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1E3A8A]/10 file:text-[#1E3A8A] hover:file:bg-[#1E3A8A]/20 cursor-pointer"
                        />
                        {/* Text URL Option (fallback) */}
                        <input
                          type="text"
                          placeholder="Or paste image URL (e.g. /logo.jpeg)"
                          value={newPost.thumbnail.startsWith('data:image') ? '' : newPost.thumbnail}
                          onChange={(e) => setNewPost({ ...newPost, thumbnail: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                        />
                        {/* Preview */}
                        {newPost.thumbnail && (
                          <div className="flex items-center gap-2 mt-1 bg-slate-50 p-2 rounded-xl border border-slate-200">
                            <img
                              src={newPost.thumbnail}
                              alt="Preview"
                              className="w-10 h-10 object-cover rounded-lg border border-slate-300 animate-fadeIn"
                            />
                            <span className="text-[10px] text-slate-500 truncate max-w-[120px]">
                              {newPost.thumbnail.startsWith('data:image') ? 'Uploaded Image' : 'URL Image'}
                            </span>
                            <button
                              type="button"
                              onClick={() => setNewPost({ ...newPost, thumbnail: '/logo.jpeg' })}
                              className="text-[10px] text-red-500 font-bold hover:underline ml-auto cursor-pointer"
                            >
                              Reset
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {newPost.type === 'reel' ? (
                      <>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Video Duration
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 0:58"
                            value={newPost.duration}
                            onChange={(e) => setNewPost({ ...newPost, duration: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Instagram URL Link
                          </label>
                          <input
                            type="text"
                            value={newPost.link}
                            onChange={(e) => setNewPost({ ...newPost, link: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Short Description
                          </label>
                          <textarea
                            rows="3"
                            value={newPost.description}
                            onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Blog Category
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Educational, Corporate"
                            value={newPost.category}
                            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Read Time
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 5 Mins Read"
                            value={newPost.readTime}
                            onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Excerpt / Summary
                          </label>
                          <textarea
                            rows="3"
                            value={newPost.excerpt}
                            onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full py-3 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      Add Post
                    </button>
                  </form>
                </div>

                {/* List & Manage Current Posts */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-lg border border-slate-200 space-y-4">
                  <h3 className="text-lg font-extrabold font-cinzel text-[#1E3A8A] border-b border-slate-100 pb-3">
                    Current Posts & Articles ({posts.length})
                  </h3>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                    {posts.length === 0 ? (
                      <p className="text-xs text-slate-400 text-center py-6 font-medium">No posts found.</p>
                    ) : (
                      posts.map((p) => (
                        <div key={p.id} className="p-4 bg-[#F8F6F1] rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.thumbnail || '/logo.jpeg'}
                              alt="Thumbnail"
                              className="w-12 h-12 rounded-xl object-cover border border-slate-300"
                            />
                            <div className="text-left">
                              <span className="text-[9px] font-extrabold uppercase text-[#D4AF37]">
                                {p.type === 'reel' ? '🎥 reel' : '✍️ article'}
                              </span>
                              <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{p.title}</h4>
                              <p className="text-[10px] text-slate-500">{p.date}</p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeletePost(p.id)}
                            className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-all cursor-pointer border border-red-200/50"
                            title="Delete Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
