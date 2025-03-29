"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ServiceModal } from "./ServiceModal";
import {
  Code2,
  LineChart,
  Cpu,
  Palette,
  Database,
  Globe,
} from "lucide-react";

interface ServiceDetails {
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
}

const services: ServiceDetails[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web solutions built with cutting-edge technologies for optimal performance and user experience.",
    longDescription:
      "We create modern, responsive web applications that deliver exceptional user experiences. Our development team uses cutting-edge technologies and best practices to build scalable, secure, and high-performance web solutions tailored to your business needs.",
    features: [
      "Responsive website development",
      "Progressive Web Applications (PWA)",
      "Custom web application development",
      "E-commerce solutions",
      "Content Management Systems (CMS)",
      "API development and integration",
    ],
    benefits: [
      "Increased online visibility",
      "Improved user engagement",
      "Better conversion rates",
      "Mobile-first experience",
      "Fast loading speeds",
      "Secure and scalable infrastructure",
    ],
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights with our advanced analytics services.",
    longDescription:
      "Our data analysis services help businesses make informed decisions by uncovering patterns, trends, and correlations in their data. We use advanced statistical methods and modern visualization techniques to present complex information in an understandable format.",
    features: [
      "Advanced data mining and processing",
      "Statistical analysis and modeling",
      "Interactive dashboards and visualizations",
      "Predictive analytics",
      "Real-time data monitoring",
      "Custom reporting solutions",
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Identification of market trends",
      "Better customer understanding",
      "Risk mitigation through predictive insights",
    ],
  },
  {
    icon: Cpu,
    title: "Generative AI",
    description:
      "Harness the power of AI to automate processes and create innovative solutions for your business.",
    longDescription:
      "We leverage cutting-edge AI technologies to develop intelligent solutions that automate tasks, enhance creativity, and improve decision-making processes. Our AI solutions are tailored to your specific business needs and industry requirements.",
    features: [
      "Custom AI model development",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "AI-powered automation",
      "Machine Learning integration",
      "Intelligent chatbots and virtual assistants",
    ],
    benefits: [
      "Increased operational efficiency",
      "Reduced manual workload",
      "Enhanced customer experience",
      "Innovative product development",
      "Competitive advantage through AI adoption",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Create a compelling brand identity with our expert design services.",
    longDescription:
      "Our design team combines creativity with strategic thinking to build memorable brand identities. We focus on creating cohesive visual experiences that resonate with your target audience and effectively communicate your brand's values.",
    features: [
      "Brand identity development",
      "Logo design and visual assets",
      "UI/UX design",
      "Marketing materials design",
      "Social media graphics",
      "Brand guidelines creation",
    ],
    benefits: [
      "Strong brand recognition",
      "Consistent brand messaging",
      "Improved user engagement",
      "Professional market presence",
      "Enhanced visual communication",
    ],
  },
  {
    icon: Database,
    title: "Software Development",
    description:
      "Robust and scalable software solutions tailored to your specific needs.",
    longDescription:
      "We deliver custom software solutions that streamline operations and drive business growth. Our development process emphasizes scalability, security, and performance to ensure your software stands the test of time.",
    features: [
      "Custom software development",
      "Mobile app development",
      "Cloud-native solutions",
      "Legacy system modernization",
      "Database design and optimization",
      "Quality assurance and testing",
    ],
    benefits: [
      "Improved business efficiency",
      "Reduced operational costs",
      "Enhanced data security",
      "Seamless system integration",
      "Scalable infrastructure",
    ],
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategies to help your business thrive in the digital age.",
    longDescription:
      "We help businesses navigate the digital landscape with strategic planning and implementation. Our approach combines market analysis, technology assessment, and business objectives to create effective digital transformation strategies.",
    features: [
      "Digital transformation consulting",
      "Market research and analysis",
      "Technology stack optimization",
      "Digital marketing strategy",
      "Competition analysis",
      "ROI measurement frameworks",
    ],
    benefits: [
      "Clear digital roadmap",
      "Improved market positioning",
      "Increased digital presence",
      "Better resource allocation",
      "Measured business outcomes",
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: ServiceDetails) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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
              onClick={() => openModal(service)}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <ServiceModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          service={selectedService}
        />
      </div>
    </section>
  );
}