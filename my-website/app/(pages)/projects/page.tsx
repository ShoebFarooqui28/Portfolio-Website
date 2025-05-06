import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/ui/footer";

const projects = [
  {
    title: "UmrahMate",
    description:
      "A React Native app for Umrah pilgrims — features include Duas, prayer times, trip planner, maps & more.",
    tech: ["React Native", "Expo", "Clerk", "AsyncStorage", "Google Maps API", "NativeWind"],
  },
  {
    title: "Portfolio Website",
    description:
      "My own developer portfolio built with Next.js, Tailwind, and ShadCN UI — clean, responsive, and minimal.",
    tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "TypeScript", "Next API"],
  },
  {
    title: "Pomodoro App",
    description:
      "A productivity app that uses the Pomodoro technique to help you manage your time effectively.",
    tech: ["React", "Express", "Node.js", "Tailwind"],
  },
  {
    title:"FreshForcast",
    description:
      "A weather app that provides real-time weather updates and forecasts for any location.",
    tech: ["Java", "OpenWeather API"]
  }
];

const ProjectsPage = () => {
  return (
    <>
      <div className="flex flex-col mx-6 md:mx-40 min-h-[calc(100vh-148px)] justify-center">
        <h1 className="text-2xl md:text-5xl bg-black/50 p-4 md:p-6 text-center font-bold text-foreground text-shadow-xl rounded-2xl mb-10 mt-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="bg-primary/80 text-foreground shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-muted">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-background text-primary border border-primary px-2 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsPage;
