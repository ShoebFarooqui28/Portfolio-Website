import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiExpo,
  SiGit
} from "react-icons/si";

const tools = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} /> },
  { name: "React", icon: <SiReact className="text-sky-400" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Express", icon: <SiExpress className="text-gray-200" size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
  { name: "React Native", icon: <SiReact className="text-blue-400" size={40} /> },
  { name: "Expo", icon: <SiExpo className="text-black" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} /> },
  { name: "Git", icon: <SiGit className="text-foreground" size={40} /> },
];

const ToolsCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 px:md-4">
      <Carousel>
        <CarouselContent>
          {tools.map((tool, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center"
            >
              <Card className="p-6 flex flex-col items-center justify-center shadow-xl w-full bg-primary/80 rounded-xl">
                {tool.icon}
                <p className="font-medium text-center">{tool.name}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-foreground text-background" />
        <CarouselNext className="bg-foreground text-background" />
      </Carousel>
    </div>
  );
};

export default ToolsCarousel;
