import React, { useState } from 'react';
import { Activity, Disc, BatteryCharging, ArrowDown } from 'lucide-react';

const Slide8_Software_Powertrain = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { id: 1, text: "운전자 브레이크 입력", sub: "Driver Input", type: "start" },
        { id: 2, text: "속도 > 5km/h 확인", sub: "Software Check", type: "decision" },
        { id: 3, text: "배터리 여유 공간 확인", sub: "Software Check", type: "decision" },
        { id: 4, text: "모터 발전기 모드 전환", sub: "Regen Active", type: "action" }
    ];

    const simulateFlow = () => {
        let step = 0;
        setActiveStep(0);
        const interval = setInterval(() => {
            step++;
            if (step > 4) {
                clearInterval(interval);
                setTimeout(() => setActiveStep(0), 3000); // Reset after delay
            } else {
                setActiveStep(step);
            }
        }, 800);
    };

    return (
        <div className="md:h-full flex flex-col">
            {/* Header */}
            <div className="mb-12 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">2-2. 파워트레인 및 회생 제동</h2>
                <p className="text-brand-gray text-lg">버려지는 열에너지를 다시 전기로 회수하는 소프트웨어 로직</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                {/* Left: Content Cards */}
                <div className="space-y-6">
                    {/* Problem Card */}
                    <div className="bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <Disc size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">문제점: 마찰 낭비</h3>
                        </div>
                        <p className="text-brand-gray text-sm leading-relaxed">
                            기존 브레이크는 운동 에너지를 <strong>열과 분진</strong>으로 날려버립니다.<br />
                            가다 서다를 반복하는 도심 주행에서 막대한 에너지가 손실됩니다.
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                <Activity size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">솔루션: 지능형 회생 제동</h3>
                        </div>
                        <ul className="space-y-2 text-brand-gray text-sm leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span><strong>Regen Blending:</strong> 모터 제동 vs 마찰 제동 비율 최적 제어</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span><strong>Efficiency:</strong> 도심 주행 시 에너지 회수율 70% 이상 달성</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Logic Visualizer */}
                <div className="bg-black/20 border border-white/10 rounded-2xl p-6 flex flex-col items-center relative overflow-hidden h-full justify-between">
                    <h3 className="text-white font-bold mb-4 w-full text-center border-b border-white/5 pb-2 text-lg">
                        Regeneration Logic Flow
                    </h3>

                    <div className="flex flex-col items-center gap-2 w-full max-w-sm relative z-10 flex-1 justify-center">
                        {steps.map((step) => {
                            const isActive = activeStep >= step.id;
                            const isCurrent = activeStep === step.id;

                            return (
                                <React.Fragment key={step.id}>
                                    {/* Arrow */}
                                    {step.id > 1 && (
                                        <ArrowDown
                                            size={16}
                                            className={`transition-colors duration-500 ${isActive ? 'text-brand-orange' : 'text-white/10'}`}
                                        />
                                    )}

                                    {/* Flow Box */}
                                    <div
                                        className={`
                                            w-full p-3 rounded-xl border-2 text-center transition-all duration-500 relative
                                            ${isActive
                                                ? 'bg-brand-orange/10 border-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.2)]'
                                                : 'bg-[#1E1C1B] border-white/10 text-white/30'}
                                            ${isCurrent ? 'scale-105 shadow-[0_0_20px_rgba(255,106,0,0.5)]' : ''}
                                        `}
                                    >
                                        <p className={`font-bold transition-colors text-sm ${isActive ? 'text-white' : 'text-white/30'}`}>
                                            {step.text}
                                        </p>
                                        <p className="text-[10px] uppercase tracking-widest opacity-60">
                                            {step.sub}
                                        </p>

                                        {/* Status Dot */}
                                        {isCurrent && (
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                                            </span>
                                        )}
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>

                    {/* Trigger Button */}
                    <button
                        onClick={simulateFlow}
                        disabled={activeStep !== 0}
                        className={`
                            mt-4 px-6 py-2 rounded-full border border-brand-orange text-brand-orange text-xs font-bold tracking-widest hover:bg-brand-orange hover:text-black transition-all duration-300
                            ${activeStep !== 0 ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        {activeStep === 0 ? 'SIMULATE BRAKING' : 'PROCESSING LOGIC...'}
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 08</span>
            </div>
        </div>
    );
};

export default Slide8_Software_Powertrain;
