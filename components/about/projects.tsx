import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { link } from "fs";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const articles = [
    {
      title: "Bursary Application System",
      excerpt: "The system is addressed the challange of manual applications, which is tiresome and time consuming.",
      image: "/school.jpg",
      link: "https://bursary-app.onrender.com/"
    },
    {
      title: "Innobid",
      excerpt: "A transformative application for the Procurement Process with Automation and AI",
      image: "/Picture 1.png",
      link: "https://innobid.vercel.app/"
    },
    {
      title: "Dr. John Ariko Campgain Website",
      excerpt: "A website for Dr. John Ariko, a renowned surgeon politician in Turkana, currently the MP for Turkana South",
      image: "/ariko.jpg",
      link: "https://johnariko.vercel.app/"
    },
    {
      title: "Hospeed",
      excerpt: "Hospeed is a web application that provides real-time information on hospital traffic to help users make informed decisions about which hospital to visit.",
      image: "/hospeed.jpg",
      link: "https://hospeed.onrender.com/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl mx-auto font-bold mb-8">Notable Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
              </div>
              <CardTitle className="text-xl">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link
                href={article.link}
                className="text-primary hover:underline font-medium"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}