"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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
        contentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      ).fromTo(
        networkRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      const techNodes = networkRef.current?.querySelectorAll(".tech-node");
      if (techNodes) {
        techNodes.forEach((node, index) => {
          gsap.to(node, {
            y: -15,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.2,
          });
        });
      }

      const lines = svgRef.current?.querySelectorAll("line");
      if (lines) {
        lines.forEach((line, index) => {
          // Create animated gradient for flowing light effect
          const gradient = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "linearGradient"
          );
          gradient.id = `flowingLight${index}`;
          gradient.setAttribute("gradientUnits", "userSpaceOnUse");

          const stop1 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop1.setAttribute("offset", "0%");
          stop1.setAttribute("stop-color", "#ec4899");
          stop1.setAttribute("stop-opacity", "0");

          const stop2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop2.setAttribute("offset", "50%");
          stop2.setAttribute("stop-color", "#ec4899");
          stop2.setAttribute("stop-opacity", "1");

          const stop3 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "stop"
          );
          stop3.setAttribute("offset", "100%");
          stop3.setAttribute("stop-color", "#ec4899");
          stop3.setAttribute("stop-opacity", "0");

          gradient.appendChild(stop1);
          gradient.appendChild(stop2);
          gradient.appendChild(stop3);

          const defs =
            svgRef.current?.querySelector("defs") ||
            document.createElementNS("http://www.w3.org/2000/svg", "defs");
          if (!svgRef.current?.querySelector("defs")) {
            svgRef.current?.appendChild(defs);
          }
          defs.appendChild(gradient);

          line.setAttribute("stroke", `url(#flowingLight${index})`);

          // Animate the gradient position for flowing effect
          gsap.to(gradient, {
            attr: { x1: "100%", x2: "200%" },
            duration: 3,
            repeat: -1,
            ease: "none",
            delay: index * 0.5,
          });
        });
      }

      const centralNode = networkRef.current?.querySelector(".central-node");
      if (centralNode) {
        gsap.to(centralNode, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8">
              <span className="text-pink-400 text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              EVERYTHING ABOUT
              <br />
              <span className="italic text-gray-300">MORSHED</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Hi, <span className="text-white font-semibold">Morshed</span>.{" "}
                <span className="text-white font-semibold">Hi Masud</span> a
                passionate{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                who loves crafting modern web applications that are both
                beautiful on the surface and powerful under the hood.
              </p>

              <p>
                With expertise in{" "}
                <span className="text-pink-400 font-semibold">
                  React, Next.js, Node.js, Express
                </span>
                , and{" "}
                <span className="text-pink-400 font-semibold">PostgreSQL</span>,
                I bring together intuitive design and efficient functionality.
                My experience with authentication systems, payment gateways, and
                cloud deployment makes me confident in delivering
                production-ready solutions for real-world clients.
              </p>
            </div>

            <Button className="mt-8 bg-white text-black hover:bg-gray-200">
              MORE ABOUT ME
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Content - Tech Network Visualization */}
          <div ref={networkRef} className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central Node */}
              <div className="central-node absolute z-10 w-16 h-16 bg-gray-800 border-2 border-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>

              {/* Surrounding Tech Nodes */}
              <div className="tech-node absolute top-8 right-16 w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">N</span>
              </div>

              <div className="tech-node absolute top-8 left-16 w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">JS</span>
              </div>

              <div className="tech-node absolute bottom-20 left-8 w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">🔧</span>
              </div>

              <div className="tech-node absolute bottom-20 right-8 w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">EX</span>
              </div>

              {/* Connection Lines with Flowing Light Effect */}
              <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="25%"
                  y2="25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
