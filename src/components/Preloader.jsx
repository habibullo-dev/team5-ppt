import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random increment for realistic feel
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        // Dynamic text updates
        const textTimeout1 = setTimeout(() => setText("LOADING ASSETS..."), 1000);
        const textTimeout2 = setTimeout(() => setText("CONFIGURING V2X MODULES..."), 2000);
        const textTimeout3 = setTimeout(() => setText("SYSTEM READY"), 3200);

        const finishTimeout = setTimeout(() => {
            if (onFinish) onFinish();
        }, 3800); // Total visual duration

        return () => {
            clearInterval(interval);
            clearTimeout(textTimeout1);
            clearTimeout(textTimeout2);
            clearTimeout(textTimeout3);
            clearTimeout(finishTimeout);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
            {/* Logo / Brand */}
            <div className="mb-12 animate-pulse">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-600 opacity-90">
                    5타쿠
                </h1>
                <p className="text-center text-brand-gray text-xs tracking-[0.5em] mt-2 uppercase">
                    Future Vehicle Leadership
                </p>
            </div>

            {/* Progress Container */}
            <div className="w-64 md:w-96 relative">
                {/* Progress Bar Background */}
                <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                    {/* Active Progress */}
                    <div
                        className="h-full bg-brand-orange shadow-[0_0_15px_rgba(255,100,0,0.5)] transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Status Text & Percentage */}
                <div className="flex justify-between items-center mt-3 font-mono text-[10px] text-brand-orange/80">
                    <span>{text}</span>
                    <span>{Math.round(progress)}%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
