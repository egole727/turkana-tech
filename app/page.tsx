import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { HowWeWork } from "@/components/HowWeWork";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <Testimonials />
      <CallToAction />
    </>
  );
}