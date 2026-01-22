import React from 'react';
import { Cable, Zap } from 'lucide-react';

const Slide11_Page11 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Power Control (안승한)</h2>
                <p className="text-brand-gray text-lg">전력 제어 및 배선 최적화를 통한 효율 증대</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Cable className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-xl leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>EV는 ICV보다 연료효율에 민감</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>가볍고 단순할수록 효율 상승</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>하네스(배선)의 무게는 경량화를 방해하는 주요 요인 중 하나</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>EV는 ICV보다 더 많은 하네스가 필요</span>
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
                                <span>e-fuse를 통한 Zonal-Architecture 구현</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>e-fuse 및 CAN통신을 이용한 ECU 피드백</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>굵은 배선의 개수 감소</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Images Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col gap-6 group hover:border-brand-orange/30 transition-colors">

                    {/* Top Image (Chip) */}
                    <div className="flex-1 bg-white rounded-xl overflow-hidden relative flex items-center justify-center">
                        <img
                            src="/assets/page11-asset.png"
                            alt="e-fuse Chip"
                            className="w-full h-full object-contain p-4"
                        />
                    </div>

                    {/* Bottom Image (Booth) */}
                    <div className="flex-[1.5] w-full bg-[#1E1C1B] rounded-xl overflow-hidden border border-white/10 relative">
                        <img
                            src="/assets/page11-asset-2.jpg"
                            alt="ST Microelectronics Booth"
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
