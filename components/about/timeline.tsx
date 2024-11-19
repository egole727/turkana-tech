"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "TurkanaTech was established in Lodwar with a vision to transform the digital landscape.",
  },
  {
    year: "2021",
    title: "First Major Project",
    description:
      "Successfully delivered a comprehensive digital solution for a leading Kenyan corporation.",
  },
  {
    year: "2022",
    title: "Regional Expansion",
    description:
      "Expanded operations to cover the entire East African region, serving clients across borders.",
  },
  {
    year: "2023",
    title: "Innovation Hub Launch",
    description:
      "Launched Turkana's first tech innovation hub, fostering local talent and startups.",
  },
];

export function Timeline() {
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
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Milestones that mark our path of innovation and growth
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-8 mb-12"
            >
              <div className="w-32 text-right">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {milestone.year}
                </span>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}