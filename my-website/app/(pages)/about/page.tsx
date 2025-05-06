import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ToolsCarousel from "@/components/ui/tool-carousel";
import Footer from "@/components/ui/footer";
const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col mx-6 md:mx-40 min-h-[calc(100vh-148px)] justify-center">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl bg-black/50 p-4 md:p-6 text-center font-bold text-foreground text-shadow-xl rounded-2xl mb-10">
          About me?
        </h1>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full bg-primary/80 text-foreground rounded-2xl p-2 shadow-lg mb-10"
        >
          <AccordionItem value="item-1" className="p-2">
            <AccordionTrigger className="text-xl md:text-2xl">
              Who am I?
            </AccordionTrigger>
            <AccordionContent className="text-lg md:text-xl">
              I’m Shoeb — a full-stack developer, designer, and curious learner
              based in Mumbai. I love building apps that solve real problems and
              look great doing it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="p-2">
            <AccordionTrigger className="text-xl md:text-2xl">
              What do I do?
            </AccordionTrigger>
            <AccordionContent className="text-lg md:text-xl">
              I specialize in creating modern web and mobile applications using
              React, Next.js, Node.js, React Native and Expo. I focus on clean code,
              performance, and user experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="p-2">
            <AccordionTrigger className="text-xl md:text-2xl">
              What else do I love?
            </AccordionTrigger>
            <AccordionContent className="text-lg md:text-xl">
              Besides coding, I&apos;m into Aviation, Gaming, Houseplants, Video
              Editing, and learning new tech.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Tools */}
        <h1 className="text-2xl md:text-5xl bg-black/50 p-4 md:p-6 text-center font-bold text-foreground text-shadow-xl rounded-2xl mb-10">
          What tools do I use?
        </h1>

        <ToolsCarousel />
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
