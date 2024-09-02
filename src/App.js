import React, { useState } from 'react';
import './App.css';
import noraVideo from './Nora.mp4';
//import waiting from './waitingSmall.jpeg' 

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      text: [
        "I once met a beautiful butterfly! 🦋",
      ],
      firstSlide: true // Indicate that this is the first slide
    },
    /*{
      text: [
        "I will be honest with you. I know I left things hanging the last time we spoke. Trust me, I did not want to.","I have been waiting for the right time to talk to you.",
        "I don’t know if there ever will be a right time.",
        "So, here I go."
      ],
    },*/
    {
      text: [
        "Do you remember the first time we both actually spoke?", "It was in March, at my place.",
        "Oka fluttering 🦋 laga vachav, introduce cheskunav, matladav, vellipoyav.",
        "I just couldn't stop smiling."
      ],
    },
    {
      text: [
        "I liked your presence around me. I liked it even when we were not talking. Just having you around felt good.",
        "We got to know each other a little with whatever moments we managed to have. But, I always wanted more.",
      ],
    },
    {
      text: [
        "If you've ever felt the way I do,",
        "Let's talk Vaishnavi, neetho chaala matladali.",
        "Just give it a chance. I will be waiting. Lmk.",
        "(Trust me, I did not want to leave things hanging.)",
        "Am I too late to express myself? Idk.",
        "My favorite character on a show once said:"
      ],
      video: noraVideo
    }];
   // {
    //  text: [
    //    "Waiting for your response like 🙈😂: "
    //  ],
    //  image: waiting
   // }
  //];

  const nextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setTransitioning(false);
    }, 500); // Adjust timing to match CSS transition
  };

  const resetSlides = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="card">
      <div className={`content-wrapper ${transitioning ? 'slide' : ''}`}>
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
          {slides[currentSlide].image && (
            <img src={slides[currentSlide].image} alt="Waiting" className="content-image" />
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
