"use client";

import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { Timeline } from "@/components/about/timeline";
import { Team } from "@/components/about/team";
import Projects  from "@/components/about/projects";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Timeline />
      <Projects />
      {/* <Team /> */}
    </>
  );
}