import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Code, Calendar, Quote } from 'lucide-react';

const Slide10_TeamResumes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const team = [
        {
            id: "habibullo",
            name: "Habibullo",
            role: "풀스택 엔지니어 / 임베디드 시스템 엔지니어",
            image: "/assets/habibullo.jpg",
            domains: ["인간-로봇 상호작용 (HRI)", "확장 가능한 SaaS 아키텍처", "실시간 데이터 시각화"],
            skills: ["React.js, Next.js, Tailwind CSS", "Python, Node.js, ROS/ROS2", "Docker, Linux, AWS, Git"],
            shortPlan: "WFEO 2026 해커톤을 위한 자율 주행 내비게이션 스택 완성 및 Innovative Execution SaaS 플랫폼 MVP 배포.",
            longPlan: "고수준 웹 인터페이스와 저수준 로봇 제어를 연결하여 사이버-물리 시스템(CPS) 분야에서 독보적인 입지 구축."
        },

        {
            id: "leader",
            name: "이승우",
            role: "Team Leader / 인하대학교 스마트모빌리티공학과",
            image: "/assets/seungwoo.png",
            domains: ["Control Theory", "Electric Vehicle Control", "Control Verification & Validation"],
            skills: ["Matlab & Simulink", "C++", "Excel / VBA"],
            shortPlan: "2026년 인턴(EV 전동화 제어기 검증 직무) 및 IFAC 2026 Challenge 수상.",
            longPlan: "차량 전동화 제어기 검증 분야에서 가장 철저하고, 유명한 Test Engineer."
        },
        {
            id: "seungmin",
            name: "오승민",
            role: "Team Member / 충북대학교 전기공학부",
            image: "/assets/seungmin.png",
            domains: ["Electrical Vehicle", "Battery Management System"],
            skills: ["MATLAB", "Python"],
            shortPlan: "BMS 알고리즘 구현하기",
            longPlan: "배터리 제작 기업에 입사"
        },
        {
            id: "junmyung",
            name: "이준명",
            role: "Team Member / 계명대학교 기계공학과",
            image: "/assets/junmyung.png",
            domains: ["EV Chassis", "Vehicle Bodyframe"],
            skills: ["CATIA", "Ansys", "Solidworks"],
            shortPlan: "자동차관련 중견기업에서 4~5년간 설계 역량 기르기",
            longPlan: "국내외 완성차 제조사의 EV 차량 프레임 전문가로 활동"
        },
        {
            id: "woojin",
            name: "왕우진",
            role: "Team Member / 아주대학교 기계공학과",
            image: "/assets/woojin.png",
            domains: ["NVH", "Acoustic Black Hole", "Acoustic Metamaterials"],
            skills: ["SOLIDWORKS, CATIA", "MATLAB, COMSOL", "Python"],
            shortPlan: "KAIST 기계공학과 WAVE LAB에서 6년 동안 석박 과정 수료",
            longPlan: "사회에 기여할 수 있는 자격과 역량을 가진 기계공학 전문가가 되어, 학계(교수)에 진출"
        },
        {
            id: "seunghan",
            name: "안승한",
            role: "Team Member / 인하대학교 스마트모빌리티공학과",
            image: "/assets/seunghan.png",
            domains: ["Motor Control", "Power Conversion"],
            skills: ["Simulink & MATLAB", "PSIM", "Python, C, C++"],
            shortPlan: "자작자동차 제작 완수 및 2026 KSAE 대회 입상, 파워블로거가 되어 수입원 확보 및 신차출시회 초청받기",
            longPlan: "현대자동차 전동화 개발부서에 입사하여 도로에 내가 기여한 자동차가 돌아다니는 모습 보기"
        }
    ];

    const nextMember = () => {
        setCurrentIndex((prev) => (prev + 1) % team.length);
    };

    const prevMember = () => {
        setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
    };

    const member = team[currentIndex];

    return (
        <div className="md:h-full flex flex-col relative">
            {/* Header */}
            <div className="mb-8 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Team Resume</h2>
                <p className="text-brand-gray text-lg">Team 5 '5타쿠' 멤버 소개 및 비전</p>
            </div>

            {/* Resume Card Container - Centered */}
            <div className="flex-1 flex items-center justify-center relative px-4 md:px-12">

                {/* Navigation Buttons */}
                <button onClick={prevMember} className="absolute left-0 md:left-4 z-20 p-2 text-white/20 hover:text-brand-orange transition-colors">
                    <ChevronLeft size={48} />
                </button>
                <button onClick={nextMember} className="absolute right-0 md:right-4 z-20 p-2 text-white/20 hover:text-brand-orange transition-colors">
                    <ChevronRight size={48} />
                </button>

                {/* The Resume Card */}
                <div className="w-full max-w-2xl bg-[#333] shadow-[0_0_40px_rgba(0,0,0,0.5)] border-r-4 border-brand-orange relative overflow-hidden animate-fade-in-up">

                    {/* Card Header */}
                    <div className="bg-brand-orange px-8 py-5 border-b-4 border-[#1a1a1a]">
                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Resume / CV</h1>
                    </div>

                    <div className="p-8 flex flex-col gap-8">

                        {/* Profile Section */}
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Photo & Name */}
                            <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-40">
                                <div className="w-32 h-40 bg-[#ddd] mb-4 rounded border-2 border-white object-cover overflow-hidden bg-cover bg-center"
                                    style={{ backgroundImage: member.image ? `url(${member.image})` : 'none', backgroundColor: member.image ? 'transparent' : '#555' }}
                                >
                                    {!member.image && <User className="w-full h-full text-white/20 p-8" />}
                                </div>
                                <div className="text-xl font-bold text-white leading-tight">{member.name}</div>
                                <div className="text-xs text-[#ccc] mt-1 leading-snug">{member.role}</div>
                            </div>

                            {/* Details */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h2 className="text-lg text-white mb-3 pl-3 border-l-4 border-white font-bold flex items-center gap-2">
                                        Specialized Domains
                                    </h2>
                                    <ul className="space-y-1">
                                        {member.domains.map((item, i) => (
                                            <li key={i} className="text-[#ccc] text-sm flex items-start gap-2">
                                                <span className="text-brand-orange font-bold">-</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-lg text-white mb-3 pl-3 border-l-4 border-white font-bold flex items-center gap-2">
                                        Technical Skills
                                    </h2>
                                    <ul className="space-y-1">
                                        {member.skills.map((item, i) => (
                                            <li key={i} className="text-[#ccc] text-sm flex items-start gap-2">
                                                <span className="text-brand-orange font-bold">-</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-white/10"></div>

                        {/* Plans Section */}
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h2 className="text-lg text-white mb-2 font-bold flex items-center gap-2">
                                    <Calendar size={18} className="text-brand-orange" /> Short-term Plan
                                </h2>
                                <p className="text-[#ccc] text-sm leading-relaxed pl-4 border-l border-white/10">
                                    {member.shortPlan}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg text-white mb-2 font-bold flex items-center gap-2">
                                    <Quote size={18} className="text-brand-orange" /> Long-term Plan
                                </h2>
                                <p className="text-[#ccc] text-sm leading-relaxed pl-4 border-l border-white/10">
                                    {member.longPlan}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-8 flex justify-center gap-2">
                {team.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-brand-orange w-6' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>

            {/* Footer info */}
            <div className="mt-4 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 10</span>
            </div>
        </div>
    );
};

export default Slide10_TeamResumes;
