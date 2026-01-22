import React from 'react';

const Slide13_Page13 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Integrated Energy Optimization Process</h2>
                <p className="text-brand-gray text-lg">EV 전비 향상을 위한 구조-NVH-전력-배터리-제어 통합 최적화</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 rounded-3xl border border-white/10 relative group min-h-0 flex items-center justify-center bg-[#1E1C1B]/60 md:bg-[#1E1C1B] overflow-hidden">

                {/* Central Diagram Container - Using grid/flex for stability but layout similar to image */}
                <div className="relative w-full h-full mx-auto p-6 flex flex-col items-center justify-center">

                    {/* Top Row Text */}
                    <div className="w-full flex justify-between absolute top-[15%] px-6 md:px-12">
                        <span className="text-white text-xl md:text-2xl font-bold">NVH & 진동 억제</span>
                        <span className="text-white text-xl md:text-2xl font-bold">구조적 경량화 & 내구 확보</span>
                    </div>

                    {/* Center Image & Main Text */}
                    <div className="relative flex flex-col items-center z-10 w-full max-w-5xl">
                        <img
                            src="/assets/page13-asset.png"
                            alt="Integrated Optimization Diagram"
                            className="hidden md:block w-full h-auto object-contain max-h-[50vh] drop-shadow-2xl"
                        />
                        <h3 className="text-3xl md:text-4xl font-bold text-white mt-8 tracking-wide">주행품질 유지 및 시스템 단순화</h3>
                    </div>

                    {/* Bottom Row Text */}
                    <div className="w-full flex justify-between items-end absolute bottom-[15%] px-6 md:px-12">
                        <span className="text-white text-xl md:text-2xl font-bold">BMS 소형화 및 노이즈 개선</span>
                        <span className="text-white text-xl md:text-2xl font-bold mb-[-2rem]">전력 분배 구조 단순화</span>
                        <span className="text-white text-xl md:text-2xl font-bold">V2X 기반 EMS-TMS 통합제어</span>
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 12</span>
            </div>
        </div>
    );
};

export default Slide13_Page13;
