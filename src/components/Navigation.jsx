import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ currentSlide, totalSlides, onNext, onPrev }) => {
    return (
        <>
            {/* Background slide indicator/watermark or simple progress (optional, kept simple for now) */}

            {/* Navigation Buttons */}
            <div className="fixed bottom-12 right-12 flex gap-4 z-50">
                <button
                    onClick={onPrev}
                    disabled={currentSlide === 0}
                    className={`
            p-4 rounded-full backdrop-blur-md border border-white/10 text-white transition-all duration-300
            ${currentSlide === 0
                            ? 'opacity-30 cursor-not-allowed bg-black/20'
                            : 'opacity-80 hover:opacity-100 hover:bg-brand-orange hover:border-brand-orange hover:scale-110 shadow-lg shadow-black/50'}
          `}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={onNext}
                    disabled={currentSlide === totalSlides - 1}
                    className={`
            p-4 rounded-full backdrop-blur-md border border-white/10 text-white transition-all duration-300
            ${currentSlide === totalSlides - 1
                            ? 'opacity-30 cursor-not-allowed bg-black/20'
                            : 'opacity-80 hover:opacity-100 hover:bg-brand-orange hover:border-brand-orange hover:scale-110 shadow-lg shadow-black/50'}
          `}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Page number indicator */}
            <div className="fixed bottom-12 right-48 text-brand-gray/50 font-light tracking-widest text-sm z-40 hidden md:block">
                Page {String(currentSlide + 1).padStart(2, '0')}
            </div>
        </>
    );
};

export default Navigation;
