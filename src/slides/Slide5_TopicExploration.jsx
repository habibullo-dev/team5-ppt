import React from 'react';
import { Search, Users, ClipboardCheck, ArrowRight } from 'lucide-react';

const Slide5_TopicExploration = () => {
    const cards = [
        {
            id: "step1",
            icon: <Search className="w-6 h-6 text-brand-orange" />,
            title: "탐색 방향 및 후보 영역",
            items: [
                { label: "공력(Aerodynamics)", desc: "항력 계수(Cd) 개선을 통한 주행 저항 최소화" },
                { label: "경량화 및 타이어", desc: "차체 무게 절감 및 구름 저항(Rolling Resistance) 개선" },
                { label: "에너지 관리", desc: "열관리(TMS) 및 배터리(BMS) 효율 최적화" },
                { label: "제어 전략", desc: "회생제동 효율 극대화 및 에코 주행 모드" }
            ]
        },
        {
            id: "step2",
            icon: <Users className="w-6 h-6 text-brand-orange" />,
            title: "팀원별 탐색 분야",
            items: [
                { label: "공력/차량외장", desc: "휠 에어커튼, 언더커버 등 외장 부품 최적화" },
                { label: "구동/제동제어", desc: "회생제동 로직 및 모터 효율 제어 전략" },
                { label: "배터리/TMS", desc: "배터리 온도 관리 및 폐열 회수 시스템" },
                { label: "HMI 및 기타", desc: "운전자 에코 코칭 및 제조 원가 분석" }
            ]
        },
        {
            id: "step3",
            icon: <ClipboardCheck className="w-6 h-6 text-brand-orange" />,
            title: "아이디어 평가 기준",
            items: [
                { label: "에너지 절감량", desc: "실제 주행 거리(AER)에 미치는 정량적 효과" },
                { label: "구현 난이도/원가", desc: "기술적 실현 가능성 및 경제성 검토" },
                { label: "안전 및 법규", desc: "차량 안전 기준 및 법규 준수 여부" },
                { label: "사용자 수용성", desc: "운전 편의성 및 승차감 저해 요소 확인" }
            ]
        }
    ];

    return (
        <div className="md:h-full flex flex-col animate-fade-in-up">
            {/* Header */}
            <div className="mb-12 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">1-3. 전기차 전비 향상 주제 탐색</h2>
                <p className="text-brand-gray text-lg">각자 관심 분야에서 전비(Efficiency) 향상 기여 요인 발굴 및 평가</p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 relative">
                {cards.map((card, index) => (
                    <div key={index} className="relative flex flex-col">
                        {/* Card Content */}
                        <div
                            className="flex-1 bg-[#1E1C1B] border border-white/5 rounded-2xl p-8 hover:bg-[#252220] hover:border-brand-orange/30 transition-all duration-300 flex flex-col"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                                    {card.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                {card.title}
                            </h3>

                            {/* List */}
                            <ul className="space-y-6 flex-1">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex flex-col gap-1">
                                        <span className="text-brand-orange text-sm font-bold flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                                            {item.label}
                                        </span>
                                        <span className="text-brand-gray text-sm pl-3.5 leading-relaxed">
                                            {item.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connecting Arrow (Hidden on mobile, visible on desktop between cards) */}
                        {index < cards.length - 1 && (
                            <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/10 justify-center items-center w-6 h-6">
                                <ArrowRight />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer info */}
            <div className="mt-8 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 05</span>
            </div>
        </div>
    );
};

export default Slide5_TopicExploration;
