"use client";

import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import Step from "../Step";
import steps from "./stairs.json";
import colors from "./colors.json";
import { useState } from "react";

const configurator = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const handleClick = (event: any, key: number) => {
    setSelectedStep(key);
    console.log(event, key);
  };
  const stepSetter = () => {
    const step = steps.find((step) => step.id === selectedStep);
    if (step) {
      return step;
    } else
      return { id: 1, src: "/trede/trap-trede-beuken.png", name: "Beuken" };
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header option="other" />
      <section className="flex-grow">
        <div className="bg-white w-full">
          <div className="container mx-auto py-8">
            <h2 className="text-4xl text-center text-black font-bold py-8">
              Configureer uw droom trap
            </h2>
            <div className="grid grid-cols-7 border-2 border-slate-300 w-full h-[800px]">
              <div className="relative col-span-5">
                <Image
                  src="/trap-kaal2.png"
                  alt="trap kaal"
                  width={1000}
                  height={1000}
                  className=" w-full max-h-[800px]"
                />
                <Step data={stepSetter()} />
              </div>
              <div className="col-span-2 bg-slate-200">
                <div className="text-center text-lg font-bold text-black py-4">
                  Kies de trede van uw trap
                </div>
                <div className="grid grid-cols-5 gap-3 mx-8">
                  {colors.map((color) => (
                    <div
                      onClick={(event) => handleClick(event, color.id)}
                      key={color.id}
                      className={`flex items-center justify-center border-transparent border-2 ${
                        color.id === selectedStep
                          ? "rounded-full border-gray-500"
                          : ""
                      } hover:rounded-full hover:border-gray-500`}
                    >
                      <Image
                        src={color.src}
                        alt={color.name}
                        width={60}
                        height={60}
                        className="rounded-full overflow-hidden w-12 h-12 m-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default configurator;
