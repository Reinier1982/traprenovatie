"use client";

import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import Step from "../Step";
import steps from "./stairs.json";
import boards from "./boards.json";
import colors from "./colors.json";
import boardColors from "./boardColors.json";
import { useState } from "react";
import Board from "../Board";

const configurator = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedBoard, setSelectedBoard] = useState(1);
  const [hoverStep, setHoverStep] = useState("Beuken");
  const [hoverBoard, setHoverBoard] = useState("Beuken");
  const [hoverStepExit, setHoverStepExit] = useState(false);
  const [hoverBoardExit, setHoverBoardExit] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("step");

  // Step
  const handleStepClick = (event: any, key: number) => {
    setSelectedStep(key);
  };
  const stepSetter = () => {
    const step = steps.find((step) => step.id === selectedStep);
    if (step) {
      return step;
    } else
      return { id: 1, src: "/trede/trap-trede-beuken.png", name: "Beuken" };
  };

  const onStepHover = (id: number) => {
    const step = steps.find((step) => step.id === id);
    if (step) {
      setHoverStepExit(false);
      setHoverStep(step.name);
    }
  };

  const onStepLeave = () => {
    const step = steps.find((step) => step.id === selectedStep);
    if (step) setHoverStep(step.name);
  };

  // Board
  const handleBoardClick = (event: any, key: number) => {
    setSelectedBoard(key);
  };
  const boardSetter = () => {
    const board = boards.find((board) => board.id === selectedBoard);
    if (board) {
      return board;
    } else
      return { id: 1, src: "/stootbord/trap-stoot-beuken.png", name: "Beuken" };
  };

  const onBoardHover = (id: number) => {
    const board = boards.find((board) => board.id === id);
    if (board) {
      setHoverBoardExit(false);
      setHoverBoard(board.name);
    }
  };

  const onBoardLeave = () => {
    const board = boards.find((board) => board.id === selectedBoard);
    if (board) setHoverBoard(board.name);
  };

  const onButtonClick = (button: string) => {
    if (button === "step") {
      setButtonClicked("step");
    } else if (button === "board") {
      setButtonClicked("board");
    } else if (button === "cheek") {
      setButtonClicked("cheek");
    }
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
              <div className="relative col-span-5 transition-opacity">
                <Image
                  src="/trap-kaal2.png"
                  alt="trap kaal"
                  width={1000}
                  height={1000}
                  className=" w-full max-h-[800px]"
                />
                <Step data={stepSetter()} />
                <Board data={boardSetter()} />
              </div>
              <div className="col-span-2 bg-slate-200">
                <div className="grid grid-cols-3 w-full">
                  <button
                    onClick={() => onButtonClick("step")}
                    className={`${
                      buttonClicked === "step"
                        ? "bg-slate-200 text-black"
                        : "bg-black"
                    } h-12 border-b-2`}
                  >
                    Trede
                  </button>
                  <button
                    onClick={() => onButtonClick("board")}
                    className={`${
                      buttonClicked === "board"
                        ? "bg-slate-200 text-black"
                        : "bg-black"
                    } h-12 border-b-2`}
                  >
                    Stootbord
                  </button>
                  <button
                    onClick={() => onButtonClick("cheek")}
                    className={`${
                      buttonClicked === "cheek"
                        ? "bg-slate-200 text-black"
                        : "bg-black"
                    } h-12 border-b-2`}
                  >
                    Wang
                  </button>
                </div>
                <div className={`${buttonClicked === "step" ? "" : "hidden"}`}>
                  <div className="text-center text-lg font-bold text-black py-4">
                    Kies de trede van uw trap
                  </div>
                  <div
                    className={`text-center text-base text-black pb-4 ${
                      hoverStepExit && "invisible"
                    }`}
                  >
                    {hoverStep}
                  </div>
                  <div className="grid grid-cols-5 mx-8 pb-4 gap-2">
                    {colors.map((color) => (
                      <div
                        onClick={(event) => handleStepClick(event, color.id)}
                        onMouseEnter={() => onStepHover(color.id)}
                        onMouseLeave={() => onStepLeave()}
                        key={color.id}
                        className={`flex items-center justify-center border-2 ${
                          color.id == selectedStep
                            ? "rounded-full border-gray-500"
                            : "hover:rounded-full hover:border-gray-500"
                        } `}
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
                <div className={`${buttonClicked === "board" ? "" : "hidden"}`}>
                  <div className="text-center text-lg font-bold text-black py-4">
                    Kies het stootbord van uw trap
                  </div>
                  <div
                    className={`text-center text-base text-black pb-4 ${
                      hoverBoardExit && "invisible"
                    }`}
                  >
                    {hoverBoard}
                  </div>
                  <div className="grid grid-cols-5 gap-2 mx-8">
                    {boardColors.map((color) => (
                      <div
                        onClick={(event) => handleBoardClick(event, color.id)}
                        onMouseEnter={() => onBoardHover(color.id)}
                        onMouseLeave={() => onBoardLeave()}
                        key={color.id}
                        className={`flex items-center justify-center border-2 ${
                          color.id == selectedBoard
                            ? "rounded-full border-gray-500"
                            : "hover:rounded-full hover:border-gray-500"
                        } `}
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
            <p className="text-black text-xs pt-1">
              Alle kleuren zijn bij benadering. De configurator geeft u een
              impressie van welke kleur combinaties mogelijk zijn.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default configurator;
