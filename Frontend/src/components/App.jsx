import React, { useState } from 'react';

// import './App.css';
import CardComponent from './CardComponent';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function HeadsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelayed, setIsDelayed] = useState(false);

  const domains = [
    {
      text: "Technical Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:example1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Technical Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:example2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Technical info"
        }
      ]
    },
    {
      text: "Event Operations and Management",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Event Operations member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Event Operations info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Event Operations3 info"
        }
      ]
    },
    {
      text: "Graphic Arts and Design",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Graphic Arts and Design member details"
        }
      ]
    },
    {
      text: "Social Media and Promotions",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Social Media and Promotions member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Social Media and Promotions info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Social Media and Promotions3 info"
        }
      ]
    },
    {
      text: "Editorial Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Editorial Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Editorial Team info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Editorial Team3 info"
        }
      ]
    },
    {
      text: "Finance Team Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Finance Team Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Finance Team Team info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Finance Team Team3 info"
        }
      ]
    },
    {
      text: "Sponsorship Team Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Sponsorship Team Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Sponsorship Team Team info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Sponsorship Team Team3 info"
        }
      ]
    }
  ];

  const handleClick1 = () => {
    if (!isDelayed) {
      setIsDelayed(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % domains.length);
        setIsDelayed(false);
      }, 1000);
    }
  };
  const handleClick2 = () => {
    if (!isDelayed) {
      setIsDelayed(true);
      setTimeout(() => {
        const newIndex = (currentIndex - 1 + domains.length) % domains.length;
        setCurrentIndex(newIndex);
        // setCurrentIndex((currentIndex - 1) % domains.length);
        setIsDelayed(false);
      }, 1000); // 1 second delay
    }
  };

  return (
    <div className="h-screen bg-gradient-radial from-[#8236C8] to-[#0B0047] flex flex-col items-center">
      
     

      <div className="mt-[100px] flex items-center justify-center gap-7 text-white text-3xl">
        <p className="text-left">Know Your Domain</p>

          <RiArrowRightSLine />
          
        <p>{domains[currentIndex].text}</p>
      </div>

      <FaArrowAltCircleRight
        className="w-[35px] h-[35px] text-white absolute right-5 mt-[379px] transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer" 
        onClick={handleClick1} 
      />
      <FaArrowAltCircleLeft
        className="w-[35px] h-[35px] text-white absolute left-5 mt-[379px] transform -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer" 
        onClick={handleClick2} 
      />

      <div className={`fade-enter ${isDelayed ? 'fade-exit-active' : 'fade-enter-active'} mt-8`}>
        <CardComponent cardsData={domains[currentIndex].cards} />
      </div>

      {/* Fade In/Out Transitions */}
      <style>
        {`
          .fade-enter {
            opacity: 0;
            transform: translateY(-10px);
          }
          .fade-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 500ms, transform 500ms;
          }
          .fade-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}
      </style>
    </div>
  );
}

export default HeadsCard;
