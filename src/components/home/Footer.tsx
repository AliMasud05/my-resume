import React from 'react'
import {
  ArrowRight,
  Facebook,
  Instagram,
  MessageCircle,
  Github,
  Mail,
} from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CTA Content */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build
            <br />
            Something <span className="italic text-gray-300">Amazing</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have a project, idea, or collaboration in mind? I'd love to hear
            from you. Let's create something impactful together.
          </p>

          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg">
            Let's Talk
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Logo/Brand */}
            <div>
              <h3 className="text-4xl font-bold">VA</h3>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Contact & Question */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 mb-2">
                Is there a fascinating <span className="italic">project</span>{" "}
                brewing in your mind?
              </p>
              <div className="flex items-center justify-center lg:justify-end gap-2 text-white">
                <Mail className="w-4 h-4" />
                <span>example@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
            {/* Social Links */}
            <div className="flex gap-4 mb-4 md:mb-0">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">Designed By Zehirul</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer