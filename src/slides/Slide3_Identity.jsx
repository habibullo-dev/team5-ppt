import React from 'react';
import { Users, Shield, Palette, Zap, Check } from 'lucide-react';

const Slide3_Identity = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">1-1. Orange 색을 선택한 이유</h2>
                <p className="text-brand-gray text-lg">Team Identity & Electric Vehicle Concept</p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0">

                {/* Card 1: Team Identity */}
                <div className="group bg-[#1E1C1B] border border-white/5 rounded-2xl overflow-hidden hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col">
                    {/* Image Section */}
                    <div className="h-40 md:h-48 overflow-hidden relative shrink-0">
                        <img
                            src="/assets/slide3_1.jpg"
                            alt="Team Identity"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1B] to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6 md:p-8 pt-4 flex-1 flex flex-col relative">
                        <div className="absolute top-4 right-6 text-6xl font-bold text-white/5 group-hover:text-brand-orange/5 transition-colors pointer-events-none">01</div>

                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 text-brand-orange shrink-0">
                                <Users size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">팀 아이덴티티</h3>
                                <span className="text-brand-gray text-xs md:text-sm">Team 5 '5타쿠'</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-4 md:mb-8 flex-1">
                            <h4 className="text-white font-bold text-base md:text-lg border-l-2 border-brand-gray pl-3">"5조"와의 연결고리</h4>
                            <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                                팀명 '5타쿠'와 5조의 정체성을 가장 잘 나타내는 색상입니다.
                            </p>
                        </div>

                        <div className="mt-auto bg-black/20 p-3 md:p-4 rounded-xl border border-white/5 shrink-0">
                            <p className="text-[10px] md:text-xs text-brand-gray mb-2 uppercase tracking-wider">Symbolism</p>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-orange flex items-center justify-center text-black font-bold">
                                    <Zap size={14} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xs md:text-sm">에너지(Energy)</p>
                                    <p className="text-brand-gray text-[10px] md:text-xs">가시성(Visibility)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Safety & Standards */}
                <div className="group bg-[#1E1C1B] border border-white/5 rounded-2xl overflow-hidden hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col">
                    {/* Image Section */}
                    <div className="h-40 md:h-48 overflow-hidden relative shrink-0">
                        <img
                            src="/assets/slide3_2.jpg"
                            alt="Safety Standards"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1B] to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6 md:p-8 pt-4 flex-1 flex flex-col relative">
                        <div className="absolute top-4 right-6 text-6xl font-bold text-white/5 group-hover:text-brand-orange/5 transition-colors pointer-events-none">02</div>

                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 text-brand-orange shrink-0">
                                <Shield size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">안전 및 표준</h3>
                                <span className="text-brand-gray text-xs md:text-sm">EV High Voltage</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-4 md:mb-8 flex-1">
                            <h4 className="text-white font-bold text-base md:text-lg border-l-2 border-brand-gray pl-3">고전압 배선 표준색</h4>
                            <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                                전기차의 고전압(High Voltage) 케이블과 커넥터는 국제 표준상 주황색을 사용합니다.
                            </p>
                        </div>

                        <div className="mt-auto bg-black/20 p-3 md:p-4 rounded-xl border border-white/5 shrink-0">
                            <p className="text-[10px] md:text-xs text-brand-gray mb-2 uppercase tracking-wider">Why Orange?</p>
                            <ul className="space-y-1">
                                {['즉각적인 위험 경고', '긴급 상황 시 식별 용이', '정비 효율성 증대'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs text-brand-gray">
                                        <Check size={10} className="text-brand-orange" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 3: Design & Strategy */}
                <div className="group bg-[#1E1C1B] border border-white/5 rounded-2xl overflow-hidden hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col">
                    {/* Image Section */}
                    <div className="h-40 md:h-48 overflow-hidden relative shrink-0">
                        <img
                            src="/assets/slide3_3.jpg"
                            alt="Design Strategy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1B] to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6 md:p-8 pt-4 flex-1 flex flex-col relative">
                        <div className="absolute top-4 right-6 text-6xl font-bold text-white/5 group-hover:text-brand-orange/5 transition-colors pointer-events-none">03</div>

                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 text-brand-orange shrink-0">
                                <Palette size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">메시지 및 디자인</h3>
                                <span className="text-brand-gray text-xs md:text-sm">Visual Strategy</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-4 md:mb-8 flex-1">
                            <h4 className="text-white font-bold text-base md:text-lg border-l-2 border-brand-gray pl-3">주제와의 일관성</h4>
                            <p className="text-brand-gray text-xs md:text-sm leading-relaxed">
                                '전비 향상'이라는 목표를 향한 속도감과 주의 환기 효과를 시각적으로 전달합니다.
                            </p>
                        </div>

                        <div className="mt-auto bg-black/20 p-3 md:p-4 rounded-xl border border-white/5 shrink-0">
                            <p className="text-[10px] md:text-xs text-brand-gray mb-2 uppercase tracking-wider">Color Palette</p>
                            <div className="flex gap-2">
                                <div className="h-6 md:h-8 flex-1 bg-[#FF6A00] rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-black border border-white/10 shadow-lg">#FF6A00</div>
                                <div className="h-6 md:h-8 flex-1 bg-[#111] rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white border border-white/10">#111</div>
                                <div className="h-6 md:h-8 flex-1 bg-white rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-black border border-white/10">#F5F</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 03</span>
            </div>
        </div>
    );
};

export default Slide3_Identity;
