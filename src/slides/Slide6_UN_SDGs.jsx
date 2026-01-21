import React from 'react';
import { Zap, Factory, Building2, Recycle, Globe, Briefcase } from 'lucide-react';

const Slide6_UN_SDGs = () => {
    const cards = [
        {
            id: "07",
            icon: <Zap className="w-6 h-6" />,
            title: "적정 가격의\n깨끗한 에너지",
            desc: "에너지 효율을 2배 개선하는 글로벌 목표에 직접 기여합니다. 전비 향상은 동일 배터리로 더 멀리 이동하게 하여 전력 수요를 최적화합니다.",
            footer: "에너지 효율(Efficiency) 극대화",
            color: "text-yellow-400",
            borderColor: "border-yellow-400"
        },
        {
            id: "09",
            icon: <Factory className="w-6 h-6" />,
            title: "산업, 혁신 및\n사회기반시설",
            desc: "지속 가능한 산업화를 위해 청정 기술 및 환경 친화적 공정 도입을 촉진합니다. 열관리 및 공력 제어 기술 혁신을 포함합니다.",
            footer: "모빌리티 기술 혁신",
            color: "text-orange-500",
            borderColor: "border-orange-500"
        },
        {
            id: "11",
            icon: <Building2 className="w-6 h-6" />,
            title: "지속 가능한\n도시와 공동체",
            desc: "대기 오염을 줄여 도시의 환경 영향을 감소시킵니다. 전비가 높은 전기차는 충전 인프라 부하를 줄여 도시 에너지 망에 기여합니다.",
            footer: "도심 대기질 개선",
            color: "text-blue-400",
            borderColor: "border-blue-400"
        },
        {
            id: "12",
            icon: <Recycle className="w-6 h-6" />,
            title: "지속 가능한\n소비와 생산",
            desc: "천연 자원의 효율적 관리를 목표로 합니다. 전비 향상은 배터리 수명을 연장하고 자원 소모를 줄이는 책임 있는 소비 방식입니다.",
            footer: "자원 효율성(LCA) 증대",
            color: "text-yellow-200",
            borderColor: "border-yellow-200"
        },
        {
            id: "13",
            icon: <Globe className="w-6 h-6" />,
            title: "기후변화\n대응",
            desc: "기후 변화와 그 영향에 맞서는 긴급 대책입니다. 주행 단계의 탄소 배출 Zero를 넘어, 전력 생산 단계의 탄소까지 고려한 효율화입니다.",
            footer: "탄소 배출 저감 가속화",
            color: "text-green-500",
            borderColor: "border-green-500"
        },
        {
            id: "08",
            icon: <Briefcase className="w-6 h-6" />,
            title: "양질의 일자리와\n경제성장",
            desc: "고부가가치 친환경 모빌리티 산업을 육성하여, 미래차 분야의 엔지니어링 역량을 갖춘 양질의 청년 일자리를 창출합니다.",
            footer: "미래차 전문 인재 육성",
            color: "text-rose-500",
            borderColor: "border-rose-500"
        }
    ];

    return (
        <div className="md:h-full flex flex-col animate-fade-in-up">
            {/* Header */}
            <div className="mb-8 border-l-4 border-brand-orange pl-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">UN SDGs 연계: EV 전비 향상과 지속가능성</h2>
                <p className="text-brand-gray text-lg">전기차 효율 극대화 프로젝트가 기여하는 6가지 글로벌 목표</p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`group relative bg-[#1E1C1B] border-t-4 ${card.borderColor} rounded-xl p-6 hover:bg-[#252220] transition-colors duration-300 flex flex-col`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Watermark Number */}
                        <div className="absolute top-4 right-6 text-5xl font-bold text-white/5 pointer-events-none">
                            {card.id}
                        </div>

                        {/* Icon & Title */}
                        <div className={`mb-4 ${card.color}`}>
                            <div className="p-3 bg-white/5 rounded-lg w-fit mb-3">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white whitespace-pre-line leading-tight">
                                {card.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-1">
                            {card.desc}
                        </p>

                        {/* Footer */}
                        <div className={`mt-auto flex items-center gap-2 text-xs font-bold ${card.color}`}>
                            <div className={`w-4 h-4 rounded-full border ${card.borderColor} flex items-center justify-center`}>
                                <div className={`w-2 h-2 rounded-full bg-current`}></div>
                            </div>
                            {card.footer}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer info */}
            <div className="mt-6 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 06</span>
            </div>
        </div>
    );
};

export default Slide6_UN_SDGs;
