import React from 'react';

const Slide7_Page7 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Shing Shing Long (Habibullo)</h2>
                <p className="text-brand-gray text-lg">드라이브샤프트·CV 조인트/부츠 내구·진동 관리</p>
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
                            <p>• steel 또는 carbon fiber tube<br />&nbsp;&nbsp;옵션(경량/강도)</p>
                            <p>• 길이·직경·작동각 최적화로<br />&nbsp;&nbsp;진동/내구 개선</p>
                            <p>• 밸런싱으로 진동 저감 및<br />&nbsp;&nbsp;주행품질 향상</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Images */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Top Image */}
                    <div className="flex-[1.5] w-full bg-[#1E1C1B] rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/assets/page7-asset.jpg"
                            alt="Shing Shing Long Booth"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Image */}
                    <div className="flex-1 w-full bg-[#1E1C1B] rounded-2xl overflow-hidden border border-white/10">
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
