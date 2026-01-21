import React from 'react';

const Slide12_Page12 = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Embedded Control Software (이승우)</h2>
                <p className="text-brand-gray text-lg">V2X Data 기반 전비향상을 위한 EMS/TMS 통합제어</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">

                {/* Problem Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-8">문제상황</h3>
                    <ul className="space-y-6 text-brand-gray text-lg leading-relaxed text-left w-full px-4">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-1.5">•</span>
                            <span>EMS와 TMS가 분리된 제어 구조</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-1.5">•</span>
                            <span>주행 조건 변화에 대한 선제적 에너지 관리 한계</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-orange mt-1.5">•</span>
                            <span>제어 로직의 실차 적용 전(MILS/HILS)부족으로 신뢰성 확보 어려움</span>
                        </li>
                    </ul>
                </div>

                {/* Solution Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center text-center group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-8">해결방안</h3>
                    <div className="text-left w-full px-2 space-y-6">
                        <div className="flex items-start gap-2 text-brand-gray text-lg leading-relaxed">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>
                                <strong className="text-white">V2X 데이터 기반 통합 제어:</strong> 신호 정보와 교통 흐름을 EMS·TMS에 실시간 연동 {'->'} <strong className="text-white">선제적 통합 제어</strong>
                            </span>
                        </div>
                        <div className="flex items-start gap-2 text-brand-gray text-lg leading-relaxed">
                            <span className="text-brand-orange mt-1.5 shrink-0">•</span>
                            <span>실제 도로에서 재현하기 어려운 복잡한 V2X 시나리오를 가상 환경에서 철저히 검증</span>
                        </div>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="bg-[#1E1C1B] rounded-3xl border border-white/10 p-6 flex flex-col group hover:border-brand-orange/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center shrink-0">사진</h3>
                    <p className="text-brand-gray text-base mb-4 text-center">• HILS / MILS</p>

                    <div className="flex-1 bg-[#2A2A2A] rounded-xl overflow-hidden relative border border-white/5">
                        <img
                            src="/assets/page12-asset.jpg"
                            alt="HILS MILS Setup"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 12</span>
            </div>
        </div>
    );
};

export default Slide12_Page12;
