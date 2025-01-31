"use client";

import Image from "next/image";
import Heading from "./Heading";
import { arrowLeftIcon, experienceData } from "@/assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end start"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });
  return (
    <div className="relative py-20 px-96">
      <Heading text={"Experience & Education"} />
      <Image src={"/education.jpg"} alt={"about me"} width={400} height={400} />
    </div>
  );
};
export default Experience;
