"use client";

import { firstpIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const myImageOne = "/test.jpg";

const Hero = () => {
  const [windowsOffset, setWindowsOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(e.clientX);
    y.set(e.clientY);

    console.log(clientX, clientY, x, y);
  };

  const handleMouseEnter = () => {
    setWindowsOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);

    console.log(innerWidth, innerHeight);
  };

  const { innerWidth, innerHeight } = windowsOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      className="flex flex-col items-center justify-center gap-y-3 font-light capitalize h-screen"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          className="flex items-center justify-center"
          style={{
            rotateX: mouseMove ? rotateX : 0,
            rotateY: mouseMove ? rotateY : 0,
            transition: "0.1s",
          }}
        >
          <Image
            src={myImageOne}
            alt="Person Image"
            width={400}
            height={400}
            priority
            className="h-auto w-[150px]"
          />
          <motion.span
            className="absolute text-3xl font-semibold text-white"
            initial={{ scale: 0 }}
            animate={{
              scale: buttonHover ? 2 : 0,
              opacity: buttonHover ? 0 : 1,
              y: buttonHover ? -40 : 0,
            }}
            transition={{ opacity: { duration: 0.4 } }}
          >
            Hi
          </motion.span>
        </motion.div>
        <h1 className="text-3xl font-bold text-center tracking-wider text-gray-500 sm:text-2xl">
          My name is Wassim Zaoui &
        </h1>
        <p className="text-lg tracking-wider text-gray-500">
          I focus on front-end development for websites and web applications. 🧐
        </p>
      </div>
      <div className="flex text-3xl justify-center gap-x-10 mt-8 text-yellow-600 sm:text-2xl">
        {firstpIcons.map((icon, index) => (
          <a
            href="#"
            key={index}
            className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
      <a
        href="#"
        className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        Reach out
      </a>
    </div>
  );
};

export default Hero;
