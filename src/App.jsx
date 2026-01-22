import React, { useState, useEffect } from 'react';
import SlideLayout from './components/SlideLayout';
import Navigation from './components/Navigation';

// Slides
import Slide1_Intro from './slides/Slide1_Intro';
import Slide2_Agenda from './slides/Slide2_Agenda';
import Slide3_Identity from './slides/Slide3_Identity';
import Slide4_Objects from './slides/Slide4_Objects';
import Slide5_TopicExploration from './slides/Slide5_TopicExploration';
import Slide6_UN_SDGs from './slides/Slide6_UN_SDGs';
import Slide7_Page7 from './slides/Slide7_Page7';
import Slide8_Page8 from './slides/Slide8_Page8';
import Slide9_Page9 from './slides/Slide9_Page9';
import Slide10_Page10 from './slides/Slide10_Page10';
import Slide11_Page11 from './slides/Slide11_Page11';
import Slide12_PowerControl from './slides/Slide12_PowerControl';
import Slide13_Page13 from './slides/Slide13_Page13';

import Slide14_TeamResumes from './slides/Slide14_TeamResumes';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload critical images
  useEffect(() => {
    const imagesToPreload = [
      "/assets/group_photo.jpg"
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const slides = [
    <Slide1_Intro />,
    <Slide2_Agenda />,
    <Slide3_Identity />,
    <Slide4_Objects />,
    <Slide5_TopicExploration />,
    <Slide7_Page7 />,
    <Slide8_Page8 />,
    <Slide9_Page9 />,
    <Slide10_Page10 />,
    <Slide11_Page11 />,
    <Slide12_PowerControl />,
    <Slide13_Page13 />,
    <Slide6_UN_SDGs />,
    <Slide14_TeamResumes />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLoading) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isLoading]);

  if (isLoading) {
    return <Preloader onFinish={() => setIsLoading(false)} />;
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <SlideLayout>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />

      {/* Slide Content with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
          transition={{
            x: { type: "spring", stiffness: 250, damping: 25 },
            opacity: { duration: 0.2 }
          }}
          className="h-full w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </SlideLayout>
  );
}

export default App;
