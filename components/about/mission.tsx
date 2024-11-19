"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses in Turkana and beyond through innovative digital solutions that drive growth and success.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description:
      "To be the leading tech company in East Africa, known for excellence in digital transformation and innovation.",
  },
  {
    icon: Users,
    title: "Values",
    description:
      "Innovation, integrity, collaboration, and commitment to delivering exceptional results for our clients.",
  },
];

export function Mission() {
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
          <h2 className="text-4xl font-bold mb-4">Our Purpose</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Driving digital transformation with purpose and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-gray-50 dark:bg-gray-900"
            >
              <value.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}