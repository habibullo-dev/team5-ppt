import React, { useState } from 'react';
import SlideLayout from './components/SlideLayout';
import Navigation from './components/Navigation';

// Slides
import Slide1_Intro from './slides/Slide1_Intro';
import Slide2_Agenda from './slides/Slide2_Agenda';
import Slide3_Identity from './slides/Slide3_Identity';
import Slide4_Objects from './slides/Slide4_Objects';
import Slide5_TopicExploration from './slides/Slide5_TopicExploration';
import Slide6_UN_SDGs from './slides/Slide6_UN_SDGs';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide1_Intro />,
    <Slide2_Agenda />,
    <Slide3_Identity />,
    <Slide4_Objects />,
    <Slide5_TopicExploration />,
    <Slide6_UN_SDGs />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <SlideLayout>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />

      {/* Slide Content with Animation Key */}
      <div key={currentSlide} className="h-full w-full">
        {slides[currentSlide]}
      </div>
    </SlideLayout>
  );
}

export default App;
