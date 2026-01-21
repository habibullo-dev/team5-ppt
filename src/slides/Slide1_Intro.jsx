import React from 'react';

const Slide1_Intro = () => {
    return (
        <>
            {/* Main Content Area (Header + Photo) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 animate-fade-in-up">

                {/* Left: Text Content */}
                <div className="flex flex-col items-start gap-4 flex-1">
                    <div className="px-4 py-1.5 rounded-full border border-brand-orange text-brand-orange text-sm font-semibold tracking-wide flex items-center gap-2">
                        <span className="text-xs">⚡</span> FVGLP 2025
                    </div>

                    <div className="mt-8 space-y-2">
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            2025 Future Vehicle<br />
                            Global <span className="text-brand-orange">Leadership</span> Program
                        </h1>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-brand-gray text-lg tracking-wide font-medium">
                        <span>📅</span>
                        <span>2026.01.19 ~ 2026.01.24</span>
                    </div>
                </div>

                {/* Right: Group Photo - Portrait Mode Integration */}
                <div className="relative group shrink-0 mr-8">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out">
                        <img
                            src="/assets/group_photo.jpg"
                            alt="Team 5 Group Photo"
                            loading="lazy"
                            className="w-full h-full object-cover filter sepia-[20%] group-hover:sepia-0 transition-all duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        <span className="absolute bottom-4 left-0 w-full text-center text-sm text-white/90 font-light tracking-widest uppercase">Team 5</span>
                    </div>
                </div>

            </div>

            {/* Spacer to push footer down */}
            <div className="flex-1"></div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-12"></div>

            {/* Footer / Team Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 animate-fade-in-up delay-200">

                {/* Left: Logo/Team Name */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-5xl font-bold text-brand-orange">5타쿠</h2>
                    <span className="text-brand-gray text-sm tracking-[0.2em] font-light">TEAM PROJECT</span>
                </div>

                {/* Right: Members Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">

                    {/* Advisor */}
                    <div>
                        <h3 className="text-brand-orange text-xs font-bold tracking-widest mb-2 uppercase">Advisor</h3>
                        <p className="text-white font-medium text-lg">
                            함성훈 교수님 <span className="text-brand-gray text-base font-normal">(대림대)</span>
                        </p>
                    </div>

                    {/* Team Leader */}
                    <div>
                        <h3 className="text-brand-orange text-xs font-bold tracking-widest mb-2 uppercase">Team Leader</h3>
                        <p className="text-white font-medium text-lg">
                            이승우 <span className="text-brand-gray text-base font-normal">(인하대)</span>
                        </p>
                    </div>

                    {/* Team Members */}
                    <div className="md:col-span-2">
                        <h3 className="text-brand-orange text-xs font-bold tracking-widest mb-2 uppercase">Team Members</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-white font-medium text-lg">
                            <p>안승한 <span className="text-brand-gray text-base font-normal">(인하대)</span></p>
                            <p>하비불러 <span className="text-brand-gray text-base font-normal">(인하대)</span></p>
                            <p>이준명 <span className="text-brand-gray text-base font-normal">(계명대)</span></p>
                            <p>왕우진 <span className="text-brand-gray text-base font-normal">(아주대)</span></p>
                            <p>오승민 <span className="text-brand-gray text-base font-normal">(충북대)</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide1_Intro;
