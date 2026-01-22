import React from 'react';
import { Cpu, Zap } from 'lucide-react';

const Slide11_Page11 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Embedded Control Software (이승우)</h2>
                <p className="text-brand-gray text-lg">V2X Data 기반 전비향상을 위한 EMS/TMS 통합제어</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Cpu className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-xl leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>EMS와 TMS가 분리된 제어 구조</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>주행 조건 변화에 대한 <strong className="text-white border-b border-white/30">선제적</strong> 에너지 관리 한계</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>제어 로직의 <strong className="text-white border-b border-white/30">실차</strong> 적용 전(MILS/HILS)부족으로 신뢰성 확보 어려움</span>
                        </li>
                    </ul>
                </div>

                {/* Solution Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">해결방안</h3>
                    <div className="text-left w-full px-2 space-y-4">
                        <ul className="space-y-6 text-brand-gray text-xl leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span><strong className="text-white">V2X 데이터 기반 통합 제어</strong>: 신호 정보와 교통 흐름을 EMS/TMS에 실시간 연동 -&gt; <strong className="text-white border-b border-white/30">선제적 통합 제어</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>실제 도로에서 재현하기 어려운 복잡한 V2X 시나리오를 가상 환경에서 철저히 검증</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col gap-4 group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center shrink-0">사진</h3>

                    <div className="px-4 text-left">
                        <p className="text-brand-gray text-xl flex items-center gap-2">
                            <span className="text-brand-orange">•</span>
                            HILS / MILS
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full bg-[#1E1C1B] rounded-xl overflow-hidden border border-white/10 relative">
                        <img
                            src="/assets/page11-asset-2.jpg"
                            alt="HILS MILS Simulation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 10</span>
            </div>
        </div>
    );
};

export default Slide11_Page11;
