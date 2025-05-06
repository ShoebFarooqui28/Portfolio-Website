import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // assuming you're using ShadCN
import { createAvatar } from "@dicebear/core";
import { notionists } from "@dicebear/collection";
import Footer from "@/components/ui/footer";

const avatar = createAvatar(notionists, {
  seed: "Easton", 
});

const svg = avatar.toString();

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-20 items-center justify-center min-h-[calc(100vh-148px)] text-center mx-6">

        {/* Main content */}
        <h1 className="text-5xl/snug md:text-7xl lg:text-9xl md:text-start text-foreground">
          Hello,
          <br /> I&apos;m <span className="font-bold text-primary">Shoeb</span>.
        </h1>

        <div className="flex flex-col items-center justify-center">

          {/* Avatar Section */}
          <div className="w-50 h-50 md:w-60 md:h-60 overflow-hidden">
            <div
              className="w-full h-full shadow-md"
              dangerouslySetInnerHTML={{ __html: svg }} // Injecting the generated SVG
            />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-4 max-w-xl text-shadow-sm">
            I&apos;m a full-stack developer who builds modern web and mobile
            apps using React, Next.js, Node.js, and React Native. I love turning
            ideas into clean, scalable solutions.
          </p>

          {/* Button */}
          <Link href="/contact">
            <Button className="my-8 px-8 py-4 text-lg rounded-full shadow-md transition-all duration-300 hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
