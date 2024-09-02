import React, { useState } from 'react';
import './App.css';
import noraVideo from './Nora.mp4';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      text: [
        "I once met a beautiful butterfly! 🦋",
      ],
      firstSlide: true 
    },
    {
      text: [
        "Yes.. Obviously.. I have been meaning to tell you something.",
        "I don’t know if there ever will be a right time.",
        "So, here I go."
      ],
    },
    {
      text: [
        "Do you remember the first time we both spoke to each other?", 
        "It was in March, at my place.",
        "Oka fluttering 🦋 laga vachav, introduce cheskunav, matladav, vellipoyav.",
        "I just couldn't stop smiling."
      ],
    },
    {
      text: [
        "I liked your presence around me. I liked it even when we were not talking. Just having you around felt good.",
        "(Like a 🦋)",
        "We got to know each other a little with whatever moments we managed to have. But, I always wanted more.",
      ],
    },
    {
      text: [
        "If you've ever felt the way I do,",
        "Let's talk Vaishnavi, neetho chaala matladali.",
        "Also, I know.. A lott happened since the last time we spoke.",
        "Just give it a chance. I will be waiting for your reply.",
        "(And trust me, I did not intend to leave things hanging previously.)",
        "There's one last slide."
      ],
    },
    {
      text: [
        "Am I too late to express myself? Idk.",
        "But, my favorite character on a show once said:"
      ],
      video: noraVideo
    }
  ];

  const nextSlide = () => {
    setTransitioning(true);
    document.querySelector('.content-wrapper').classList.add('hidden');

    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      document.querySelector('.content-wrapper').classList.remove('hidden');
      document.querySelector('.content-wrapper').classList.add('visible');

      setTimeout(() => {
        document.querySelector('.content-wrapper').classList.remove('visible');
      }, 500);

      setTransitioning(false);
    }, 500); // Match this to the CSS transition duration
  };

  const resetSlides = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="card">
      <div className={`content-wrapper ${transitioning ? 'hidden' : 'visible'}`}>
        <div className="content">
          {slides[currentSlide].text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {slides[currentSlide].video && (
            <video controls className="content-video">
              <source src={slides[currentSlide].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
      {currentSlide < slides.length - 1 ? (
        slides[currentSlide].firstSlide ? (
          <div className="arrow" onClick={nextSlide}>
            Click to know more. ➡️
          </div>
        ) : (
          <div className="arrow" onClick={nextSlide}>
            ➡️
          </div>
        )
      ) : (
        <div className="reset" onClick={resetSlides}>
          Want to read again?
        </div>
      )}
    </div>
  );
}

export default App;
