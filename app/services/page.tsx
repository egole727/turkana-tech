import { Services } from "@/components/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ServicesPage() {
  const additionalServices = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs and challenges.",
      icon: "💻"
    },
    // {
    //   title: "Cloud Solutions",
    //   description: "Comprehensive cloud services including migration, hosting, and management.",
    //   icon: "☁️"
    // },
    {
      title: "AI Automations",
      description: "Leverage the power of artificial intelligence to automate processes and drive efficiency.",
      icon: "🤖"
    },
    {
      title: "IT Consulting",
      description: "Expert guidance on technology strategy, digital transformation, and IT infrastructure.",
      icon: "📊"
    }
  ];

  return (
    <div>
      {/* Main Services Section */}
      <Services />

      {/* Additional Services Section */}
      <div className="container mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Specialized Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our advanced technology solutions designed for enterprise needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss how we can help transform your business
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
