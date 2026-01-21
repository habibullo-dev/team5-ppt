import React from 'react';

const Slide8_Page8 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">TOPIA (이준명)</h2>
                <p className="text-brand-gray text-lg">EV 프레임/새시 경량화 “양산 검증형” 파트너</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">

                {/* Left Side: Text Cards */}
                <div className="flex-[2] flex flex-col md:flex-row gap-6">
                    {/* Problem Card */}
                    <div className="flex-1 bg-[#1E1C1B] rounded-3xl border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">문제상황</h3>
                        <ul className="space-y-4 text-brand-gray text-lg leading-relaxed">
                            <li>• 강성/충돌/NVH 유지하며<br />경량화 난이도↑</li>
                            <li>• 핫포밍 공정 변동 →<br />물성·치수 편차</li>
                            <li>• 이종소재 접합/조립<br />공정창 확보 필요</li>
                        </ul>
                    </div>

                    {/* Solution Card */}
                    <div className="flex-1 bg-[#1E1C1B] rounded-3xl border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">해결방안</h3>
                        <div className="text-left space-y-4 text-brand-gray text-base md:text-lg">
                            <p>• 핫포밍·대형프레스 기반<br />&nbsp;&nbsp;제조성 확보</p>
                            <p>• Tailored tempering/<br />&nbsp;&nbsp;patchwork로 부위별 최적화</p>
                            <p>• SPR/FDS/TOX + 3D/<br />&nbsp;&nbsp;광학측정으로 양산 검증</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Images */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* Top Image (Asset 1) */}
                    <div className="flex-[1.2] w-full bg-[#1E1C1B] rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/assets/page8-asset.jpg"
                            alt="TOPIA Booth"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Row Images (Asset 2 & 3) */}
                    <div className="flex-1 flex gap-4 min-h-0">
                        <div className="flex-1 bg-[#1E1C1B] rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="/assets/page8-asset-2.jpg"
                                alt="Frame Part 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 bg-[#1E1C1B] rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="/assets/page8-asset-3.jpg"
                                alt="Frame Part 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
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

export default Slide8_Page8;
