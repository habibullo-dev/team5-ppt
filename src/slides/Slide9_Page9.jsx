import React from 'react';
import { CloudLightning, Sliders } from 'lucide-react';

const Slide9_Page9 = () => {
    const assets = [
        { id: 1, src: "/assets/page9-asset.jpg", title: "Asset 01" },
        { id: 2, src: "/assets/page9-asset-2.jpg", title: "Asset 02" },
        { id: 3, src: "/assets/page9-asset-3.jpg", title: "Asset 03" },
        { id: 4, src: "/assets/page9-asset-4.jpg", title: "Asset 04" },
    ];

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">NVH (왕우진)</h2>
                <p className="text-brand-gray text-lg">전비 향상 관점에서의 NVH 도전과제</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CloudLightning className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-xl leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>경량화와 NVH 간의 상충 관계</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>엔진 소음이 사라져 다른 소음이 두드러짐</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>고효율을 위한 경량화로 인한 차체 강성 감소</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>전동모터 특유의 고주파 진동과 복합 시스템 설계 어려움</span>
                        </li>
                    </ul>
                </div>

                {/* Solution Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Sliders className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">해결방안</h3>
                    <div className="text-left w-full px-2 space-y-4">
                        <ul className="space-y-6 text-brand-gray text-xl leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>경량·고성능 흡차음 소재 적용</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>유량 제어 밸브를 통한 펌핑 소음 감소</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                                <span>디지털 시뮬레이션과 시스템 수준의 NVH 설계</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col relative overflow-hidden group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center shrink-0">사진</h3>
                    <div className="flex-1 grid grid-cols-2 gap-4 min-h-0 overflow-hidden">
                        {assets.map((asset) => (
                            <div key={asset.id} className="rounded-xl overflow-hidden border border-white/5 relative h-full bg-black/20">
                                <img
                                    src={asset.src}
                                    alt={`NVH Reference ${asset.id}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 08</span>
            </div>
        </div>
    );
};

export default Slide9_Page9;
