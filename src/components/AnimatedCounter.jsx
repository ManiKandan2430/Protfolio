import React, { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";


const AnimatedCounter = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle}`);
  };

  const handleMouseEnter = (index) => {
    const card = cardRefs.current[index];
    if (card) card.classList.add("show-border");
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) card.classList.remove("show-border");
  };

  return (
    <div id="counter" className="padding-x-lg xl:mt-20 mt-64">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {counterItems.map((item, index) => (
          <div
            key={item.label}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card p-10 rounded-lg flex flex-col justify-center bg-[#111] text-white"
            onMouseMove={handleMouseMove(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="counter-number text-5xl font-bold">
              <CountUp suffix={item?.suffix} end={item?.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
