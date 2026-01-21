import React, { useState } from 'react';
import { Battery, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

const Slide7_Software_BMS = () => {
    const [isBalanced, setIsBalanced] = useState(false);

    // Initial random unbalanced state
    const initialCells = [
        { id: 1, level: 30, color: 'bg-red-500' },
        { id: 2, level: 85, color: 'bg-green-500' },
        { id: 3, level: 40, color: 'bg-red-500' },
        { id: 4, level: 95, color: 'bg-green-500' },
        { id: 5, level: 50, color: 'bg-yellow-500' }
    ];

    const [cells, setCells] = useState(initialCells);

    const runBalancing = () => {
        setIsBalanced(true);
        // Simulate balancing process
        const targetLevel = 70;
        const balancedCells = cells.map(cell => ({
            ...cell,
            level: targetLevel,
            color: 'bg-green-500' // All green when balanced
        }));
        setCells(balancedCells);
    };

    const resetDemo = () => {
        setIsBalanced(false);
        setCells(initialCells);
    };

    return (
        <div className="md:h-full flex flex-col">
            {/* Header */}
            <div className="mb-12 border-l-4 border-brand-orange pl-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">2-1. 배터리 관리 시스템 (BMS)</h2>
                <p className="text-brand-gray text-lg">소프트웨어로 극복하는 "가장 약한 고리"의 한계</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                {/* Left: Content Cards */}
                <div className="space-y-6">
                    {/* Problem Card */}
                    <div className="bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <AlertTriangle size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">문제점: 셀 불균형</h3>
                        </div>
                        <ul className="space-y-2 text-brand-gray text-sm leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span>배터리 팩은 가장 약한 셀이 0%가 되면 시스템이 멈춥니다.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span>강한 셀에 남은 에너지를 사용하지 못하고 낭비하게 됩니다.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-[#1E1C1B] border border-white/5 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">솔루션: 능동형 밸런싱</h3>
                        </div>
                        <ul className="space-y-2 text-brand-gray text-sm leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span><strong>Active Balancing:</strong> 고전압 셀의 에너지를 저전압 셀로 실시간 이송</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-brand-orange mt-1">●</span>
                                <span><strong>Kalman Filter:</strong> 배터리 내부 상태(SoC) 정밀 추정 알고리즘</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Interactive Demo */}
                <div className="bg-black/20 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-20 group-hover:opacity-50 transition-opacity"></div>

                    <h3 className="text-white font-bold mb-8 flex items-center gap-2">
                        <TrendingUp size={18} className="text-brand-orange" />
                        Active Balancing Simulation
                    </h3>

                    {/* Battery Cells Visualization */}
                    <div className="flex items-end gap-4 h-48 mb-8 w-full max-w-md justify-center px-4 py-4 bg-white/5 rounded-xl border border-white/5">
                        {cells.map((cell) => (
                            <div key={cell.id} className="relative w-12 flex flex-col justify-end group/cell">
                                <div
                                    className={`w-full rounded-t-lg transition-all duration-1000 ease-in-out relative ${cell.color} ${isBalanced ? 'shadow-[0_0_15px_rgba(34,197,94,0.4)]' : ''}`}
                                    style={{ height: `${cell.level * 1.5}px` }}
                                >
                                    {/* Balancing Indicator Overlay */}
                                    {isBalanced && (
                                        <div className="absolute inset-x-0 top-0 h-full bg-white/20 animate-pulse rounded-t-lg"></div>
                                    )}
                                </div>
                                <div className="text-center text-xs text-brand-gray mt-2 font-mono">{cell.level}%</div>
                            </div>
                        ))}
                    </div>

                    {/* Status Text */}
                    <div className="mb-6 font-mono text-sm">
                        <span className="text-brand-gray">Status: </span>
                        <span className={`font-bold transition-colors duration-500 ${isBalanced ? 'text-green-400' : 'text-red-400'}`}>
                            {isBalanced
                                ? "PACK BALANCED (Max Energy Unlocked)"
                                : "IMBALANCED (Range Limited)"}
                        </span>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={isBalanced ? resetDemo : runBalancing}
                        className={`
                            px-8 py-3 rounded-full font-bold text-sm tracking-widest transition-all duration-300
                            ${isBalanced
                                ? 'bg-white/10 text-white hover:bg-white/20'
                                : 'bg-brand-orange text-black hover:bg-[#ff802b] hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]'}
                        `}
                    >
                        {isBalanced ? 'RESET SIMULATION' : 'RUN BALANCING ALGORITHM'}
                    </button>

                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end text-brand-gray/30 text-xs font-light tracking-wider">
                <span>Team 5타쿠</span>
                <span className="mx-4">|</span>
                <span>Page 07</span>
            </div>
        </div>
    );
};

export default Slide7_Software_BMS;
