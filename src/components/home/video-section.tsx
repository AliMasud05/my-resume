"use client";

import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          videoRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
          "-=0.4"
        );

      gsap.to(videoRef.current?.querySelector(".play-button"), {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8"
        >
          <span className="text-pink-400 text-sm font-medium">
            Video Explanation Section
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 text-balance"
        >
          MEET ME IN 2 MINUTES
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto text-pretty"
        >
          Sometimes text isn't enough. Here's a quick video where I introduce
          myself, share my journey as a{" "}
          <span className="text-white font-semibold italic">developer</span>,
          and explain how I help clients turn ideas into reality.
        </p>

        {/* Video Player */}
        <div ref={videoRef} className="relative max-w-2xl mx-auto">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer">
            <Image
              src="/developer-presenting-in-modern-office.jpg"
              alt="Video thumbnail showing developer presentation"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="play-button flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <Play className="w-6 h-6 text-white fill-white" />
                <span className="text-white font-medium text-lg">
                  Play Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
