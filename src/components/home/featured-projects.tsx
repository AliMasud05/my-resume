"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "SmartShop (E-commerce Platform)",
    description: "React, Node.js, Express, MongoDB, Stripe",
    image: "/modern-e-commerce-interface-with-blue-sky-and-buil.jpg",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "SmartShop (E-commerce Platform)",
    description: "React, Node.js, Express, MongoDB, Stripe",
    image: "/clean-product-design-interface-with-geometric-shap.jpg",
    color: "from-gray-400 to-gray-500",
  },
  {
    id: 3,
    title: "SmartShop (E-commerce Platform)",
    description: "React, Node.js, Express, MongoDB, Stripe",
    image: "/sunset-beach-landscape-with-peaceful-waves.jpg",
    color: "from-orange-400 to-pink-500",
  },
  {
    id: 4,
    title: "SmartShop (E-commerce Platform)",
    description: "React, Node.js, Express, MongoDB, Stripe",
    image: "/cute-cartoon-character-with-glasses-in-space-suit.jpg",
    color: "from-green-400 to-teal-500",
  },
];

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
        headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      const projectCards =
        projectsRef.current?.querySelectorAll(".project-card");
      if (projectCards) {
        tl.fromTo(
          projectCards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
      }

      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8">
            <span className="text-pink-400 text-sm font-medium">
              Featured Projects
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            DESIGN BRANDS THAT SPEAK TO AUDIENCES
          </h2>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/3]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div ref={buttonRef} className="text-center">
          <Button
            variant="outline"
            className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent"
          >
            LOAD MORE
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
