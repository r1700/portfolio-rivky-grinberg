import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { VideoModal } from "@/components/VideoModal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rivky Grinberg - Software Developer" },
      {
        name: "description",
        content:
          "Backend & full-stack developer specializing in REST APIs, ASP.NET Core, Node.js, React.js and AI-integrated features.",
      },
      { property: "og:title", content: "Rivky Grinberg - Software Developer" },
      {
        property: "og:description",
        content:
          "Backend & full-stack developer specializing in REST APIs, ASP.NET Core, Node.js, React.js and AI-integrated features.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rivky Grinberg",
          jobTitle: "Software Developer",
          email: "mailto:rivky.grinberg@gmail.com",
          url: "https://github.com/r1700",
          sameAs: ["https://github.com/r1700", "https://www.linkedin.com/in/rivky-grinberg"],
          knowsLanguage: ["Hebrew", "English"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects onWatchVideo={setVideoSrc} />
        <Skills />
        <Contact />
      </main>
      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />}
      <Footer />
    </div>
  );
}
