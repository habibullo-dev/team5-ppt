import React from 'react';
import { Users, Shield, Palette, Zap, Check } from 'lucide-react';

const Slide3_Identity = () => {
    return (
        <div className="md:h-full flex flex-col animate-fade-in-up">
            {/* Header */}
            <div className="mb-12 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">1-1. Orange 색을 선택한 이유</h2>
                <p className="text-brand-gray text-lg">Team Identity & Electric Vehicle Concept</p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">

                {/* Card 1: Team Identity */}
                <div className="group relative bg-[#1E1C1B] border border-white/5 rounded-2xl p-8 hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col">
                    <div className="absolute top-4 right-6 text-6xl md:text-8xl font-bold text-white/5 group-hover:text-brand-orange/10 transition-colors pointer-events-none select-none">01</div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                            <Users className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">팀 아이덴티티</h3>
                            <p className="text-brand-gray text-sm">Team 5 '5타쿠'</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2">"5조"와의 연결고리</h4>
                        <p className="text-brand-gray text-sm leading-relaxed">
                            팀명 '5타쿠'와 5조의 정체성을 가장 잘 나타내는 색상입니다.
                        </p>
                    </div>

                    <div className="mt-8 bg-black/20 rounded-xl p-4 border border-white/5">
                        <p className="text-brand-gray text-xs font-semibold mb-3">Symbolism</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white">
                                <Zap size={16} fill="currentColor" />
                            </div>
                            <div className="text-sm text-white">
                                <p>에너지(Energy)</p>
                                <p className="text-brand-gray/70">가시성(Visibility)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Safety & Standards */}
                <div className="group relative bg-[#1E1C1B] border border-white/5 rounded-2xl p-8 hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col delay-[150ms]">
                    <div className="absolute top-4 right-6 text-6xl md:text-8xl font-bold text-white/5 group-hover:text-brand-orange/10 transition-colors pointer-events-none select-none">02</div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                            <Shield className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">안전 및 표준</h3>
                            <p className="text-brand-gray text-sm">EV High Voltage</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2">고전압 배선 표준색</h4>
                        <p className="text-brand-gray text-sm leading-relaxed">
                            전기차의 고전압(High Voltage) 케이블과 커넥터는 국제 표준상 주황색을 사용합니다.
                        </p>
                    </div>

                    <div className="mt-8 bg-black/20 rounded-xl p-4 border border-white/5">
                        <p className="text-brand-gray text-xs font-semibold mb-3">Why Orange?</p>
                        <ul className="space-y-1">
                            {[
                                "즉각적인 위험 경고",
                                "긴급 상황 시 식별 용이",
                                "정비 효율성 증대"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-brand-gray">
                                    <Check size={12} className="text-brand-orange" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card 3: Message & Design */}
                <div className="group relative bg-[#1E1C1B] border border-white/5 rounded-2xl p-8 hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col delay-[300ms]">
                    <div className="absolute top-4 right-6 text-6xl md:text-8xl font-bold text-white/5 group-hover:text-brand-orange/10 transition-colors pointer-events-none select-none">03</div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                            <Palette className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">메시지 및 디자인</h3>
                            <p className="text-brand-gray text-sm">Visual Strategy</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2">주제와의 일관성</h4>
                        <p className="text-brand-gray text-sm leading-relaxed">
                            '전비 향상'이라는 목표를 향한 속도감과 주의 환기 효과를 시각적으로 전달합니다.
                        </p>
                    </div>

                    <div className="mt-8 bg-black/20 rounded-xl p-4 border border-white/5">
                        <p className="text-brand-gray text-xs font-semibold mb-3">Color Palette</p>
                        <div className="flex gap-2">
                            <div className="flex-1 bg-[#FF6A00] h-8 rounded flex items-center justify-center text-[10px] font-bold text-black border border-white/10">#FF6A00</div>
                            <div className="flex-1 bg-[#111] h-8 rounded flex items-center justify-center text-[10px] font-bold text-white border border-white/10">#111</div>
                            <div className="flex-1 bg-[#F5F5F5] h-8 rounded flex items-center justify-center text-[10px] font-bold text-black border border-white/10">#F5F</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer info */}
            <div className="mt-8 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 03</span>
            </div>
        </div>
    );
};

export default Slide3_Identity;
