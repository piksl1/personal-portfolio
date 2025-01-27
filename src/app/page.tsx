import About from "@/components/sub/About";
import Experience from "@/components/sub/Experience";
import Hero from "@/components/sub/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
