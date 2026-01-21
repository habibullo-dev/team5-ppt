import React from 'react';

const Slide10_Page10 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">EV Battery (오승민)</h2>
                <p className="text-brand-gray text-lg">BMS 시스템의 소형화를 통한 전비 향상 전략</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-8">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-lg leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-1.5">•</span>
                            <span>하드웨어 설계의 공간적 한계</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-1.5">•</span>
                            <span>조립 공정의 복잡성</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-1.5">•</span>
                            <span>기생 성분으로 인한 센싱 노이즈</span>
                        </li>
                    </ul>
                </div>

                {/* Solution Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-8">해결방안</h3>
                    <div className="text-left w-full px-2 space-y-4">
                        <p className="text-white text-lg font-bold border-b border-white/10 pb-2 mb-4">
                            Toyochem의 시트형 인덕터를 도입
                        </p>
                        <ul className="space-y-4 text-brand-gray text-base md:text-lg leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="text-brand-orange mt-1.5">•</span>
                                <span>기판의 높이(두께)를 낮추어 BMS 보드의 초소형화, 고밀도화</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-orange mt-1.5">•</span>
                                <span>시트형 인덕터의 폭과 길이를 조절(Stretch)하여 주파수 특성을 정밀하게 조정</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-orange mt-1.5">•</span>
                                <span>노이즈 필터링</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center shrink-0">사진</h3>
                    <p className="text-brand-gray text-base mb-4 text-center">• 시트형 인덕터 적용</p>

                    <div className="flex-1 bg-white rounded-xl overflow-hidden relative border border-white/5">
                        <img
                            src="/assets/page10-asset.jpg"
                            alt="Sheet Type Inductor"
                            className="w-full h-full object-contain p-2"
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

export default Slide10_Page10;
