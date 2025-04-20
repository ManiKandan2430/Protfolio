import React, { useEffect } from "react";
import gsap from "gsap";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import "../index.css";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/gradientbg.jpg" alt="background" />
      </div>
      <div className="hero-layout">
        {/* LEFT : Hero contents */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Welcome
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word,index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-8 size-5 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Hi, I'm</h1>
              <h1>Manikandan</h1>
            </div>
            <p className="text-white-50 md:text-lg relative z-20 pointer-events-none flex-nowrap">
              Full-Stack MERN Developer, with a strong focus on web development
            </p>
            <Button
              className="md:w-80 md:h-16 w-[150px] h-0 text-[12px]"
              id="button"
              text="See My Work"
            />
          </div>
        </header>
        {/* RIGHT : 3D model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <div className="absolute bg-gradient-to-b from-transparent to-black lg:top-[200px] z-10 w-full h-full pointer-events-none" />
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
