import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPanel from './pages/AdminPanel';
import FreeCalculators from './components/FreeCalculators';
import PoliciesPage from './pages/PoliciesPage';
import UpdatesPage from './pages/UpdatesPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('tejendra_current_user_v1');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [bookingParams, setBookingParams] = useState(null);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('tejendra_current_user_v1', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('tejendra_current_user_v1');
      }
    } catch (e) {}
  }, [currentUser]);

  const handleOpenConsultation = (params) => {
    setBookingParams(params || null);
    setIsConsultationOpen(true);
  };
  
  const handleCloseConsultation = () => {
    setBookingParams(null);
    setIsConsultationOpen(false);
  };

  const handleRequireLogin = () => {
    setIsConsultationOpen(false);
    setActiveTab('signup');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-w-[320px] min-h-screen bg-[#F8F6F1] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#1E3A8A] selection:text-white relative">
      
      {/* Universal Header */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={handleOpenConsultation}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      {/* Main Page View Controller with Smooth Page Switch Animation */}
      <main key={activeTab} className="animate-page-entrance flex-grow">
        {activeTab === 'home' && (
          <HomePage 
            onOpenConsultation={handleOpenConsultation}
            setActiveTab={setActiveTab}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage 
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage 
            onOpenConsultation={handleOpenConsultation}
          />
        )}



        {activeTab === 'testimonials' && (
          <HomePage 
            onOpenConsultation={handleOpenConsultation}
            setActiveTab={setActiveTab}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}

        {activeTab === 'calculator' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <FreeCalculators 
              onBookConsultation={handleOpenConsultation} 
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </div>
        )}

        {activeTab === 'updates' && (
          <UpdatesPage />
        )}

        {activeTab === 'signup' && (
          <RegisterPage 
            onOpenConsultation={handleOpenConsultation}
            setActiveTab={setActiveTab}
            setCurrentUser={setCurrentUser}
          />
        )}

        {activeTab === 'login' && (
          <LoginPage 
            setActiveTab={setActiveTab}
            onOpenConsultation={handleOpenConsultation}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}

        {activeTab === 'admin' && (
          <AdminPanel 
            setActiveTab={setActiveTab} 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}

        {activeTab === 'policies' && (
          <PoliciesPage 
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activeTab === 'contact' && (
          <AboutPage 
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Booking Popup Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        currentUser={currentUser}
        onRequireLogin={handleRequireLogin}
        bookingParams={bookingParams}
      />

      {/* Mobile Floating Action Buttons */}
      <FloatingCTA 
        onOpenConsultation={handleOpenConsultation}
      />

    </div>
  );
}
