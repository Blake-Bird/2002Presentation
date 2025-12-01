import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './slides.jsx';

export default function Presentation() {
  const [slideIndex, setSlideIndex] = useState(0); // 0-based
  const [step, setStep] = useState(0); // per-slide step

  const currentSlide = slides[slideIndex];

  const goNext = useCallback(() => {
    if (step < currentSlide.maxStep) {
      setStep(step + 1);
    } else if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
      setStep(0);
    }
  }, [step, slideIndex, currentSlide.maxStep]);

  const goPrev = useCallback(() => {
    if (step > 0) {
      setStep(step - 1);
    } else if (slideIndex > 0) {
      const prevSlide = slides[slideIndex - 1];
      setSlideIndex(slideIndex - 1);
      setStep(prevSlide.maxStep);
    }
  }, [step, slideIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  return (
    <div className="presentation" onClick={goNext}>
      <div className="slide">
        <div className="slide-inner">{currentSlide.render(step)}</div>
        <div className="bottom-timeline" />
        <div className="debug-hud">
          <span>
            Slide {slideIndex + 1} / {slides.length}
          </span>
          <span>
            Step {step} / {currentSlide.maxStep}
          </span>
        </div>
      </div>
    </div>
  );
}
