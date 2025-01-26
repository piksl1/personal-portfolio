import Image from "next/image";
import Heading from "./Heading";
import Achievements from "./Achievements";
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "@/assets";

const About = () => {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text="About me" />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          className="w-[300px] lg:w-[200px] md:hidden"
          src={"/fox.jpg"}
          alt="about me"
          width={400}
          height={400}
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute top-20 -left-5 scale-[2.5] text-zinc-100 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          <a
            className="flex items-center gap-x-2 mt-6 w-max rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
            href="/wassim-cv.pdf"
            download=""
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};
export default About;
