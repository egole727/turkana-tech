"use client";

import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { Timeline } from "@/components/about/timeline";
import { Team } from "@/components/about/team";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Timeline />
      <Team />
    </>
  );
}