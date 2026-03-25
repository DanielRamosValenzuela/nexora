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
        {/* Hero stays pinned — video visible while scrolling */}
        <div className="sticky top-0 z-0 h-screen">
          <Hero />
        </div>

        {/* Content slides over the hero */}
        <div className="relative z-10">
          <div
            className="h-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(6,11,24,0.7))",
            }}
          />

          <div className="bg-[#060b18]/70">
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
