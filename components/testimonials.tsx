"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Kenya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "TurkanaTech transformed our digital presence completely. Their innovative solutions and attention to detail are unmatched.",
  },
  {
    name: "David Mwangi",
    role: "Founder, DataFlow Africa",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content:
      "Working with TurkanaTech was a game-changer for our data analysis needs. They delivered beyond our expectations.",
  },
  {
    name: "Amina Hassan",
    role: "Director, Innovation Hub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "The AI solutions provided by TurkanaTech have revolutionized how we approach automation. Exceptional work!",
  },
];

export function Testimonials() {
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
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}