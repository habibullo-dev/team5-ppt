import React from 'react';

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
            <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">

                {/* Left Side: Text Cards */}
                <div className="flex-[1.8] flex flex-col md:flex-row gap-6">
                    {/* Problem Card */}
                    <div className="flex-1 bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                        <ul className="space-y-3 text-brand-gray text-base md:text-lg leading-relaxed text-left">
                            <li>• 경량화와 NVH 간의 상충 관계</li>
                            <li>• 엔진 소음이 사라져 다른 소음이<br />&nbsp;&nbsp;두드러짐</li>
                            <li>• 고효율을 위한 경량화로 인한<br />&nbsp;&nbsp;차체 강성 감소</li>
                            <li>• 전동모터 특유의 고주파 진동과<br />&nbsp;&nbsp;복합 시스템 설계 어려움</li>
                        </ul>
                    </div>

                    {/* Solution Card */}
                    <div className="flex-1 bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">해결방안</h3>
                        <div className="text-left space-y-4 text-brand-gray text-base md:text-lg">
                            <p>• 경량·고성능 흡차음 소재 적용</p>
                            <p>• 유량 제어 밸브를 통한 펌핑<br />&nbsp;&nbsp;소음 감소</p>
                            <p>• 디지털 시뮬레이션과 시스템<br />&nbsp;&nbsp;수준의 NVH 설계</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Images Grid */}
                <div className="flex-1 bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col relative overflow-hidden">
                    <h3 className="text-xl font-bold text-white mb-4 text-center shrink-0">사진</h3>
                    <div className="flex-1 grid grid-cols-2 gap-4 min-h-0 overflow-hidden">
                        {assets.map((asset) => (
                            <div key={asset.id} className="rounded-xl overflow-hidden border border-white/5 relative group h-full bg-black/20">
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
                <span>Page 09</span>
            </div>
        </div>
    );
};

export default Slide9_Page9;
