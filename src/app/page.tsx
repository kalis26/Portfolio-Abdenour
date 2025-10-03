import Image from "next/image";
import Navigation from "@/components/navigation";
import Landing from "@/components/landing";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function Home() {
  return (
      <div>
          <Landing />
          <About />
          <Portfolio />
          <Contact />
      </div>
  );
}
