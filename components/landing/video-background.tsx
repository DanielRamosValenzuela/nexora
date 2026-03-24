"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";
import { CelestialSphere } from "@/components/ui/celestial-sphere";

const ScrollyVideo = dynamic(
  () => import("scrolly-video/dist/ScrollyVideo.esm.jsx"),
  { ssr: false }
);

export function VideoBackground() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  const handleReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setScrollPercent(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Loading spinner — visible until video is ready */}
      <div
        className={`absolute inset-0 z-10 hidden md:flex items-center justify-center bg-deep transition-opacity duration-700 ${
          videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <LoadingSpinner />
      </div>

      {/* ScrollyVideo — desktop */}
      <div className="hidden md:block h-full w-full">
        <ScrollyVideo
          src="/video/background.mp4"
          cover
          sticky={false}
          full={false}
          trackScroll={false}
          transitionSpeed={8}
          useWebCodecs
          videoPercentage={scrollPercent}
          onReady={handleReady}
        />
      </div>

      {/* Static image — mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/img/hero.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 0px"
          className="object-cover"
          priority
        />
      </div>

      {/* Celestial shader overlay */}
      <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
        <CelestialSphere
          hue={187}
          speed={0.15}
          zoom={1.8}
          particleSize={2.0}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
