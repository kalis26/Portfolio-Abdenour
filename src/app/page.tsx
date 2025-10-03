import Image from "next/image";
import Navigation from "@/components/navigation";
import Landing from "@/components/landing";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
      <div>
          <Navigation />
          <Landing />
          <About />
          <Portfolio />
      </div>
  );
}
