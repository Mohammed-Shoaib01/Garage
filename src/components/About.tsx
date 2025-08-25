import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Users, 
  Star,
  CheckCircle,
  TrendingUp 
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Award, label: "ASE Certified", value: "50+ Years" },
    { icon: Users, label: "Satisfied Customers", value: "2,5000+" },
    { icon: Shield, label: "Service Warranty", value: "15 Dayss" },
    { icon: Star, label: "Average Rating", value: "4.8/5" }
  ];

  const certifications = [
    "ASE Master Technician Certified",
    "EPA Section 609 Certified", 
    "Manufacturer Training Completed",
    "Emissions Inspector Licensed",
    "Better Business Bureau A+ Rating"
  ];

  const teamMembers = [
    {
      name: "Bruce Hoffner",
      role: "Owner & Lead Technician", 
      experience: "40+ years",
      specialties: ["Customer Service", "State Inspections", "Diagnostics"]
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Mechanic",
      experience: "12 years", 
      specialties: ["Engine Repair", "Brake Systems", "Collision Repair"]
    },
    {
      name: "Sarah Johnson", 
      role: "Service Advisor",
      experience: "8 years",
      specialties: ["Customer Relations", "Scheduling", "Parts Ordering"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      rating: 5,
      text: "Bruce and his team are fantastic! They diagnosed my car's issue quickly and fixed it at a fair price. Honest service you can trust."
    },
    {
      name: "Robert Kim", 
      rating: 5,
      text: "Best mechanic shop in Worcester! Bruce is knowledgeable and gives honest advice. Fast work for inspections and they never oversell services."
    },
    {
      name: "Lisa Martinez",
      rating: 5, 
      text: "Friendly, helpful service with a welcoming atmosphere. The team at Lincoln Auto and Truck always takes great care of my family's vehicles."
    }
  ];

  return (
    <section id="about" className="section-padding bg-subtle">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Lincoln Auto and Truck
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Locally owned and operated in Worcester, MA. We specialize in honest, reliable 
            automotive service with a focus on building lasting relationships with our community.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow">
              <CardContent className="pt-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lincoln Auto and Truck is a locally owned mechanic and auto repair shop 
                located at 590 Lincoln St in Worcester, MA. Under the leadership of owner 
                Bruce Hoffner, we've built a reputation for honest service and knowledgeable staff.
              </p>
              <p>
                Our commitment to transparent pricing and quality workmanship has earned us 
                over 4.5+ stars on local review sites. We believe in providing honest advice, 
                fast service for routine checks, and maintaining a welcoming, trustworthy atmosphere.
              </p>
              <p>
                Whether you need a state inspection, brake repair, or collision work, every 
                vehicle receives our full attention. We're not just a repair shop – we're 
                your neighbors, dedicated to keeping Worcester's drivers safe on the road.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Certifications & Awards</h3>
            <div className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-primary rounded-xl text-primary-foreground">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="w-6 h-6" />
                <span className="font-bold text-lg">Continuous Education</span>
              </div>
              <p className="text-sm opacity-90">
                Our team regularly attends training sessions and workshops to stay current 
                with the latest automotive technologies and repair techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow">
                <CardContent className="pt-0">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{member.name}</h4>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience} Experience</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-medium text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;