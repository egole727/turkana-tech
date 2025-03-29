"use client";

import { motion } from "framer-motion";

interface WorkStep {
  number: string;
  title: string;
  description: string;
}

const steps: WorkStep[] = [
  {
    number: "01",
    title: "Consultation and Discovery",
    description:
      "Schedule a consultation with our team to discuss your goals, challenges, and vision. We'll assess your needs and identify the best solutions tailored to your requirements. We start by learning about your business, goals, and challenges to ensure every solution is tailored to your unique needs.",
  },
  {
    number: "02",
    title: "Proposal and Planning",
    description:
      "Receive a customized proposal outlining our recommendations and project roadmap. Once approved, we create a detailed plan with clear timelines and deliverables.",
  },
  {
    number: "03",
    title: "Implementation and Testing",
    description:
      "Our experts bring your project to life using cutting-edge technologies. We rigorously test every aspect to ensure functionality, quality, and reliability. Our team transforms ideas into reality, crafting visually stunning and functional solutions that align with your goals.",
  },
  {
    number: "04",
    title: "Delivery and Support",
    description:
      "Experience seamless delivery of your solution with optional training to maximize its value. We also provide ongoing support and maintenance to keep your systems running smoothly. We deliver your project with precision and provide ongoing support to ensure long-term success and scalability.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This is how we turn ideas into impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <span className="absolute -top-6 left-8 text-7xl font-bold text-blue-600/10 dark:text-blue-400/10">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}