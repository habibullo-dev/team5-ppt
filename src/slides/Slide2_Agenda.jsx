import React from 'react';
import { Lightbulb, Globe, Route } from 'lucide-react';

const Slide2_Agenda = () => {
    const cards = [
        {
            id: "01",
            icon: <Lightbulb className="w-6 h-6 text-brand-orange" />,
            title: "아이디어 Thinking 과정",
            items: [
                "팀 아이덴티티: Orange 색 선정 배경과 의미",
                "사물 포착: 주변의 주황색 사물에서 얻은 영감",
                "주제 탐색: 전기차 전비 향상을 위한 브레인스토밍",
                "탐색 과정: 문제 정의 → 해결책 모색 → 계획 수립",
                "아이디어 융합: 5타쿠 팀만의 솔루션 구체화"
            ]
        },
        {
            id: "02",
            icon: <Globe className="w-6 h-6 text-brand-orange" />,
            title: "UN 지속가능발전목표",
            items: [
                "SDGs 연계성: 전기차 전비 향상과 글로벌 목표",
                "SDG 7: 적정 가격의 깨끗한 에너지",
                "SDG 9: 산업, 혁신 및 사회기반시설",
                "SDG 13: 기후변화 대응과 탄소 배출 저감"
            ]
        },
        {
            id: "03",
            icon: <Route className="w-6 h-6 text-brand-orange" />,
            title: "진로 계획 및 비전",
            items: [
                "팀원별 로드맵: 개인별 역량 및 목표 설정",
                "핵심 역량: Future Vehicle 리더를 위한 준비",
                "액션 플랜: 단기/중기/장기 성장 계획",
                "비전 공유: 지속 가능한 미래 모빌리티 인재"
            ]
        }
    ];

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-8 border-l-4 border-brand-orange pl-6 shrink-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">발표 아젠다</h2>
                <p className="text-brand-gray text-lg">2025 Future Vehicle Global Leadership Program</p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="group relative bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Watermark Number */}
                        <div className="absolute top-4 right-6 text-6xl md:text-8xl font-bold text-white/5 group-hover:text-brand-orange/10 transition-colors pointer-events-none select-none">
                            {card.id}
                        </div>

                        <div>
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                                {card.title}
                            </h3>

                            {/* List */}
                            <ul className="space-y-3 relative z-10">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-brand-gray text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0 opacity-70"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Arrow decor */}
                        {index < cards.length - 1 && (
                            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/10 z-20">
                                →
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider shrink-0">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 02</span>
            </div>
        </div>
    );
};

export default Slide2_Agenda;
