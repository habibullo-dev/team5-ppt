import React from 'react';
import { ServerCrash, Server } from 'lucide-react';

const Slide12_Page12 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Cloud Computing (이지원)</h2>
                <p className="text-brand-gray text-lg">SDV 시대를 위한 클라우드 인프라 전략</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ServerCrash className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-xl leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>SDV 전환으로 인한 데이터 처리량 급증</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>차량 내 컴퓨팅 리소스 한계</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>실시간성 확보와 보안 이슈</span>
                        </li>
                    </ul>
                </div>

                {/* Solution Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Server className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">해결방안</h3>
                    <div className="text-left w-full px-2 space-y-4">
                        <ul className="space-y-6 text-brand-gray text-xl leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>Hybrid Cloud Architecture 도입 (AWS + On-premise)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>Edge Computing을 통한 지연(Latency) 최소화</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>OTA Updates 관리 및 데이터 파이프라인 최적화</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center shrink-0">사진</h3>
                    <p className="text-brand-gray text-base mb-4 text-center">• AWS for Automotive Demo</p>

                    <div className="flex-1 bg-white rounded-xl overflow-hidden relative border border-white/5">
                        <img
                            src="/assets/page12-asset.jpg"
                            alt="AWS Cloud Architecture"
                            className="w-full h-full object-contain p-2"
                        />
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 11</span>
            </div>
        </div>
    );
};

export default Slide12_Page12;
