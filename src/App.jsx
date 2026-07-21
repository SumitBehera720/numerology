import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ReportsPage from './pages/ReportsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPanel from './pages/AdminPanel';
import FreeCalculators from './components/FreeCalculators';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

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

        {activeTab === 'reports' && (
          <ReportsPage 
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activeTab === 'testimonials' && (
          <HomePage 
            onOpenConsultation={handleOpenConsultation}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'calculator' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <FreeCalculators onBookConsultation={handleOpenConsultation} />
          </div>
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
      />

      {/* Mobile Floating Action Buttons */}
      <FloatingCTA 
        onOpenConsultation={handleOpenConsultation}
      />

    </div>
  );
}
