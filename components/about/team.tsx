"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Amoni Kevin",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "Tech visionary with massive years of experience in digital transformation.",
  },
  {
    name: "Sarah Odhiambo",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Expert in AI and software architecture with a passion for innovation.",
  },
  {
    name: "Michael Ekiru",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "Award-winning designer specializing in user experience and branding.",
  },
];

export function Team() {
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
          <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the visionaries driving innovation at TurkanaTech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}