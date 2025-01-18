import { firstpIcons } from "@/assets";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center">
            <Image
              src={"/myImage.jpg"}
              alt="Person Image"
              width={400}
              height={400}
              priority
              className="h-auto w-[150px]"
            />
            <span className="absolute text-3xl font-semibold text-white">
              Hi
            </span>
          </div>
          <h1 className="text-3xl font-bold text-center tracking-wider text-gray-500">
            My name is Wassim Zaoui &
          </h1>
          <p className="text-lg tracking-wider text-gray-500">
            I like animations 🧐
          </p>
        </div>
        <div className="flex text-3xl justify-center gap-x-10 mt-8 text-yellow-600">
          {firstpIcons.map((icon, index) => (
            <a href="#" key={index} className="rounded-lg hover:bg-red-400 hover:text-white transition-colors">
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className=" mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};
