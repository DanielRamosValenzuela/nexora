import { VideoBackground } from "@/components/landing/video-background";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Process } from "@/components/landing/process";
import { Features } from "@/components/landing/features";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Navbar />

      <div className="relative z-10">
        {/* Hero — transparent, video fully visible */}
        <Hero />

        {/* Smooth gradient transition from hero into content */}
        <div className="relative">
          <div className="absolute -top-40 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#060b18]/80 pointer-events-none" />

          {/* Single continuous backdrop for all sections — no hard edges */}
          <div className="bg-[#060b18]/80 backdrop-blur-[3px]">
            <main>
              <Services />
              <Process />
              <Features />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
