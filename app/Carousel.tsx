"use client";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const texts = [
    {
      text: `Ben zeer tevreden over de traprenovatie. Alles is volgens afspraak verlopen en uitgevoerd en voor en zeer concurrerende prijs. Roy werkt net en snel. Ook de aftersales is prima geregeld. Ik beveel ze dan ook aan.`,
      name: "Cornelis uit Amsterdam",
    },
    {
      text: `Zijn zeer tevreden over de nieuwe trappen is een heel mooi eindresultaat geworden.

Goede kwaliteit werkt netjes en zeer goede service.

Raden deze ook zeker aan.`,
      name: "Marion uit Purmerend",
    },
  ];

  const handleNextSlide = () => {
    let newSlide = currentSlide === texts.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? texts.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[180px] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {texts.map((text: any, index: any) => {
            if (index === currentSlide) {
              return (
                <>
                  <p className="text-black pt-8 text-center px-48">
                    {text.text}
                  </p>
                  <br />
                  <p className="text-black pt-8 text-center px-48">
                    {text.name}
                  </p>
                </>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl bottom-[10.4rem] cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {texts.map((_: any, index: any) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
