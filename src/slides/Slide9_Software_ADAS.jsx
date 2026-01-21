import React, { useState } from 'react';
import { Map, Zap, Cpu, ArrowRight } from 'lucide-react';

const Slide9_Software_ADAS = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    const inputs = [
        { label: "3D 지형 지도", icon: "🗺️" },
        { label: "실시간 교통", icon: "🚦" },
        { label: "목적지 정보", icon: "📍" }
    ];

    const outputs = [
        { label: "에코 경로 선택", icon: "🛣️" },
        { label: "속도 최적화", icon: "⚡" },
    ];

    const processData = () => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 3000);
    };

    return (
        <div className="md:h-full flex flex-col">
            {/* Header */}
            <div className="mb-12 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">2-3. 예측 제어 (ADAS)</h2>
                <p className="text-brand-gray text-lg">보이지 않는 도로 정보를 미리 읽어 에너지 소비를 최적화</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                {/* Left: Content Cards */}
                <div className="space-y-6">
                    {/* Problem Card */}
                    <div className="bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <Map size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">문제점: 시야의 한계</h3>
                        </div>
                        <p className="text-brand-gray text-sm leading-relaxed">
                            운전자는 언덕이나 교통 체증을 늦게 인지하여 불필요한 가감속을 반복합니다.<br />
                            <strong>공기 저항</strong>은 속도의 제곱에 비례하여 에너지를 소모합니다.
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                <Cpu size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">솔루션: 예측 제어</h3>
                        </div>
                        <ul className="space-y-2 text-brand-gray text-sm leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span><strong>Eco-Routing:</strong> 최단 거리가 아닌 '최소 에너지' 경로 탐색</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span><strong>Predictive Control:</strong> 내리막길 진입 전 미리 가속을 멈춰(Coasting) 운동 에너지 활용</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Data Flow Visualizer */}
                <div className="bg-black/20 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                    <h3 className="text-white font-bold mb-8 flex items-center gap-2">
                        Predictive Data Flow
                    </h3>

                    <div className="flex items-center justify-between w-full relative">

                        {/* Inputs */}
                        <div className="flex flex-col gap-4">
                            <p className="text-[10px] text-brand-gray uppercase tracking-widest text-center mb-1">Inputs</p>
                            {inputs.map((item, i) => (
                                <div key={i} className={`
                                    px-4 py-3 bg-[#1E1C1B] border border-white/10 rounded-lg text-xs md:text-sm text-white flex items-center gap-2 transition-all duration-500
                                    ${isProcessing ? 'translate-x-4 opacity-50' : ''}
                                `}>
                                    <span>{item.icon}</span> {item.label}
                                </div>
                            ))}
                        </div>

                        {/* Processing Core */}
                        <div className="relative z-10 mx-4">
                            <div className={`
                                w-24 h-24 rounded-full border-2 border-brand-orange flex flex-col items-center justify-center bg-black transition-all duration-300
                                ${isProcessing ? 'scale-110 shadow-[0_0_30px_rgba(255,106,0,0.4)] border-white' : ''}
                            `}>
                                <Cpu size={32} className={`text-white transition-all duration-1000 ${isProcessing ? 'animate-spin' : ''}`} />
                                <span className="text-[8px] text-brand-orange mt-1 font-bold">A* Algorithm</span>
                            </div>

                            {/* Particles */}
                            {isProcessing && (
                                <>
                                    <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-orange/50 animate-ping"></div>
                                </>
                            )}
                        </div>

                        {/* Outputs */}
                        <div className="flex flex-col gap-4">
                            <p className="text-[10px] text-brand-gray uppercase tracking-widest text-center mb-1">Actions</p>
                            {outputs.map((item, i) => (
                                <div key={i} className={`
                                    px-4 py-3 border border-brand-orange/30 bg-brand-orange/10 rounded-lg text-xs md:text-sm text-brand-orange font-bold flex items-center gap-2 transition-all duration-500
                                    ${isProcessing ? 'scale-105 shadow-[0_0_10px_rgba(255,106,0,0.2)]' : 'opacity-50'}
                                `}>
                                    <span>{item.icon}</span> {item.label}
                                </div>
                            ))}
                        </div>

                    </div>

                    <button
                        onClick={processData}
                        disabled={isProcessing}
                        className={`
                            mt-12 px-8 py-3 rounded-full font-bold text-sm tracking-widest transition-all duration-300
                            ${isProcessing
                                ? 'bg-white/10 text-white cursor-wait'
                                : 'bg-brand-orange text-black hover:bg-[#ff802b] hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]'}
                        `}
                    >
                        {isProcessing ? 'CALCULATING...' : 'OPTIMIZE ENERGY'}
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 09</span>
            </div>
        </div>
    );
};

export default Slide9_Software_ADAS;
