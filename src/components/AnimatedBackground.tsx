import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Fixed Background Image with Subtle Animation */}
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop")',
          animation: 'subtle-zoom 30s ease-in-out infinite alternate'
        }}
      />
      
      {/* Dark Overlay (65%) */}
      <div className="fixed inset-0 z-[-1] bg-[#050a10]/65 backdrop-blur-[1px]" />

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </>
  );
};
