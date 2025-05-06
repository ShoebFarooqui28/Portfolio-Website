import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 text-center py-6 mt-10 md:mt-0">
      <div className="text-sm md:text-lg text-foreground">
        <p>&copy; {new Date().getFullYear()} Shoeb Farooqui. All rights reserved.</p>
      </div>

      <div className="mt-4 space-x-6 flex justify-center">
        <Link href="https://www.instagram.com/shoebbbsss" target="_blank">
          <Instagram className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
        </Link>

        <Link href="mailto:farooquishoeb2@gmail.com" target="_blank">
          <Mail className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
        </Link>

        <Link href="https://github.com/ShoebFarooqui28" target="_blank">
          <Github className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
        </Link>

        <Link href="https://www.linkedin.com/in/shoeb-farooqui" target="_blank">
          <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-all duration-300" />
        </Link>
      </div>

      <div className="mt-4">
        <p className="text-muted-foreground text-sm">
          Designed and developed by Shoeb Farooqui.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
