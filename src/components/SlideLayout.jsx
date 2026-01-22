import React from 'react';

const SlideLayout = ({ children }) => {
    return (
        <div className="slide-container selection:bg-brand-orange selection:text-white">
            <div className="flex-1 flex flex-col relative z-10 max-w-7xl mx-auto w-full">
                {children}
            </div>
            {/* Background decoration (optional subtle noise or overlay) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay will-change-transform"></div>

            {/* Credits */}
            <a
                href="https://github.com/habibullo-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-6 z-50 text-[10px] text-brand-gray/30 hover:text-brand-orange/50 transition-colors font-mono tracking-widest uppercase"
            >
                Built by @habibullo-dev
            </a>
        </div>
    );
};

export default SlideLayout;
