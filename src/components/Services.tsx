import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Gauge, 
  Battery, 
  Zap, 
  Car, 
  Shield,
  CheckCircle,
  Settings
} from "lucide-react";

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: CheckCircle,
      title: "State Inspection",
      description: "Official Massachusetts vehicle inspection stickers for compliance and safety certification.",
      features: ["Safety Inspection", "Emissions Testing", "Compliance Check", "Inspection Sticker"],
      price: "From $35"
    },
    {
      icon: Gauge,
      title: "Brake Service",
      description: "Complete brake system maintenance and repair for optimal stopping power and safety.",
      features: ["Brake Pads", "Rotor Service", "Fluid Replacement", "System Check"],
      price: "From $149"
    },
    {
      icon: Settings,
      title: "Oil Changes",
      description: "Regular oil changes using premium oils to extend engine life and maintain performance.",
      features: ["Premium Oil", "Filter Change", "Fluid Top-off", "Multi-point Check"],
      price: "From $39"
    },
    {
      icon: Car,
      title: "Tire Services",
      description: "Complete tire care including rotation, balancing, and replacement for safe driving.",
      features: ["Tire Rotation", "Wheel Balancing", "Alignment", "New Tires"],
      price: "From $59"
    },
    {
      icon: Battery,
      title: "Battery Service",
      description: "Battery testing, maintenance, and replacement to ensure reliable vehicle starting.",
      features: ["Battery Test", "Terminal Cleaning", "Replacement", "Charging System"],
      price: "From $79"
    },
    {
      icon: Zap,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and resolve engine performance issues.",
      features: ["Computer Scan", "Error Codes", "Performance Test", "Repair Solutions"],
      price: "From $119"
    },
    {
      icon: Wrench,
      title: "Collision Repair",
      description: "Professional bodywork and collision damage repair to restore your vehicle.",
      features: ["Body Work", "Paint Matching", "Frame Repair", "Insurance Claims"],
      price: "Call for Quote"
    },
    {
      icon: Car,
      title: "Towing Service",
      description: "24/7 towing assistance for disabled vehicles throughout Worcester area.",
      features: ["Emergency Towing", "Roadside Assistance", "Local Service", "Quick Response"],
      price: "From $75"
    }
  ];

  return (
    <section id="services" className="section-padding bg-subtle">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional Auto Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to complex repairs, our certified technicians 
            provide reliable service to keep your vehicle running at its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{service.price}</span>
                  <Button 
                    onClick={scrollToBooking}
                    className="btn-primary"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Don't See What You Need?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We offer a wide range of additional automotive services. 
            Contact us to discuss your specific vehicle needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              Contact Us
            </Button>
            <Button 
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-3"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;