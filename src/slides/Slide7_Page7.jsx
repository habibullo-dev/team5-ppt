import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const Slide7_Page7 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Shing Shing Long (Habibullo)</h2>
                <p className="text-brand-gray text-lg">드라이브샤프트·CV 조인트/부츠 내구·진동 관리</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-xl leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span><strong className="text-white">EV 고토크</strong> → 피로/응력 부담 증가</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span><strong className="text-white">경량화와 내구/강성</strong> 동시 만족 필요</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span><strong className="text-white">밸런스·각도·치수 민감</strong> → 진동(NVH)</span>
                        </li>
                    </ul>
                </div>

                {/* Solution Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">해결방안</h3>
                    <div className="text-left w-full px-2 space-y-4">
                        <ul className="space-y-6 text-brand-gray text-xl leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>steel 또는 carbon fiber tube 옵션(경량/강도)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>길이·직경·작동각 최적화로 진동/내구 개선</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>밸런싱으로 진동 저감 및 주행품질 향상</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col gap-4 group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center shrink-0">사진</h3>

                    {/* Top Image */}
                    <div className="flex-[1.5] w-full bg-[#1E1C1B] rounded-xl overflow-hidden border border-white/10 relative">
                        <img
                            src="/assets/page7-asset.jpg"
                            alt="Shing Shing Long Booth"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Image */}
                    <div className="flex-1 w-full bg-[#1E1C1B] rounded-xl overflow-hidden border border-white/10 relative">
                        <img
                            src="/assets/page7-asset-2.jpg"
                            alt="CV Joint Parts"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 07</span>
            </div>
        </div>
    );
};

export default Slide7_Page7;
