import React from 'react';
import { AlertTriangle, Flame, Radio } from 'lucide-react';

const Slide4_Objects = () => {
    const cards = [
        {
            id: "Object 01",
            image: "/assets/trash_can.jpg",
            tag: "WARNING & VISIBILITY",
            icon: <AlertTriangle size={16} />,
            title: "주황색 쓰레기통",
            quote: '"어디서든 눈에 띄어야 한다."',
            description: "주황색은 위험을 알리거나 위치를 식별하는 강력한 가시성을 가집니다. 이는 전기차의 고전압 배선이 주황색으로 표준화된 이유와 연결됩니다."
        },
        {
            id: "Object 02",
            image: "/assets/brake_disc.jpg",
            tag: "FRICTION & HEAT",
            icon: <Flame size={16} />,
            title: "브레이크 패드",
            quote: '"마찰은 곧 열에너지다."',
            description: "제동 시 빨갛게 달아오르는 마찰재와 분진. 버려지는 열에너지(Heat Loss)를 회수하고 불필요한 기계적 마찰(Drag)을 줄이는 것이 핵심입니다."
        },
        {
            id: "Object 03",
            image: "/assets/turn_signal.jpg",
            tag: "SIGNAL & COMMUNICATION",
            icon: <Radio size={16} />,
            title: "방향 지시등",
            quote: '"명확한 신호가 효율을 만든다."',
            description: "주변 차량과의 명확한 소통은 불필요한 가감속을 줄여줍니다. V2X 통신과 예측 가능한 주행 제어 로직이 에너지 효율을 극대화합니다."
        }
    ];

    return (
        <div className="md:h-full flex flex-col">
            {/* Header */}
            <div className="mb-12 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">1-2. 주황색 사물 포착</h2>
                <p className="text-brand-gray text-lg">일상 속 Orange 색상에서 발견한 전기차 전비 향상의 핵심 인사이트</p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group flex flex-col bg-brand-dark/50 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-mono flex items-center gap-2">
                                <span>📷</span> {card.id}
                            </div>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-8 -mt-12 relative z-10 flex flex-col">
                            {/* Tag */}
                            <div className="self-start px-3 py-1 bg-brand-orange text-black text-[10px] font-bold tracking-widest rounded mb-6 flex items-center gap-2 uppercase">
                                {card.icon}
                                {card.tag}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                                {card.title}
                            </h3>

                            <div className="mb-4">
                                <p className="text-white/80 font-medium italic text-sm border-l-2 border-brand-orange/50 pl-3 py-1">
                                    {card.quote}
                                </p>
                            </div>

                            <p className="text-brand-gray text-sm leading-relaxed flex-1">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer info */}
            <div className="mt-8 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 04</span>
            </div>
        </div>
    );
};

export default Slide4_Objects;
