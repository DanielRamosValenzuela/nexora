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

        {/*
          Transition overlay — starts INSIDE the hero (overlaps last 300px)
          and extends into the content. This creates one seamless gradient
          with no hard edge between hero and sections.
        */}
        <div
          className="relative -mt-[300px] pt-[300px]"
          aria-hidden="true"
          style={{
            pointerEvents: "none",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(6,11,24,0.15) 100px, rgba(6,11,24,0.35) 200px, rgba(6,11,24,0.55) 350px, rgba(6,11,24,0.7) 500px, rgba(6,11,24,0.8) 700px)",
            }}
          />
        </div>

        {/* Content sections — solid backdrop, no blur needed */}
        <div className="relative bg-[#060b18]/80">
          <main>
            <Services />
            <Process />
            <Features />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
