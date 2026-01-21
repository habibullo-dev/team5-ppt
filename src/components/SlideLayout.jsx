import React from 'react';

const SlideLayout = ({ children }) => {
    return (
        <div className="slide-container selection:bg-brand-orange selection:text-white">
            <div className="flex-1 flex flex-col relative z-10 max-w-7xl mx-auto w-full">
                {children}
            </div>
            {/* Background decoration (optional subtle noise or overlay) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </div>
    );
};

export default SlideLayout;
