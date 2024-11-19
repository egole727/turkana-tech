"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LineChart,
  Cpu,
  Palette,
  Database,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web solutions built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights with our advanced analytics services.",
  },
  {
    icon: Cpu,
    title: "Generative AI",
    description:
      "Harness the power of AI to automate processes and create innovative solutions for your business.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Create a compelling brand identity with our expert design services.",
  },
  {
    icon: Database,
    title: "Software Development",
    description:
      "Robust and scalable software solutions tailored to your specific needs.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategies to help your business thrive in the digital age.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive
            growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}