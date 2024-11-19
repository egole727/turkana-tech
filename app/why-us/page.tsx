"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description:
      "Successfully delivered over 100+ projects with 98% client satisfaction rate.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Agile methodology ensuring quick turnaround without compromising quality.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Deep understanding of the East African market with global tech standards.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "International best practices with localized solutions for optimal results.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Why Choose TurkanaTech?</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We combine local insights with global expertise to deliver
              exceptional digital solutions that drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gray-50 dark:bg-gray-900 shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}