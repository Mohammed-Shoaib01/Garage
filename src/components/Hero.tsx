import { Button } from "@/components/ui/button";
import { Star, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-garage.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Users, label: "Happy Customers", value: "2,5000+" },
    { icon: Clock, label: "Years Experience", value: "50+" },
    { icon: Shield, label: "Warranty", value: "15 Days" },
    { icon: Star, label: "Rating", value: "4.8/5" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional auto garage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Lincoln Auto and Truck
              <span className="block text-accent">Worcester's Trusted Shop</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Locally owned mechanic shop serving Worcester, MA with honest, reliable 
              automotive service. From state inspections to collision repair, 
              we handle cars and trucks with care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection("booking")}
                className="btn-hero text-lg px-8 py-4"
              >
                Book Appointment
              </Button>
              <Button 
                onClick={() => scrollToSection("services")}
                className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-2">
                    <stat.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Service Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white rounded-2xl p-8 shadow-strong max-w-md">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Need Immediate Service?
              </h3>
              <p className="text-muted-foreground mb-6">
                Call us now for emergency repairs or same-day service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Call Us Today</span>
                  <span className="text-accent font-bold">(508) 853-3304</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Business Hours</span>
                  <span className="text-primary font-bold">7AM-9PM Daily</span>
                </div>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary w-full"
                >
                  Get Quick Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;