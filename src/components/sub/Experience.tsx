import Image from "next/image";
import Heading from "./Heading";

const Experience = () => {
  return (
    <div className="relative py-20 px-96">
      <Heading text={"Experience & Education"} />
      <Image src={"/education.jpg"} alt={"about me"} width={400} height={400} />
    </div>
  );
};
export default Experience;
