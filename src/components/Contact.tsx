import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Upload,
  Navigation,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 2 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setSelectedFile(null);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(508) 853-3304", "Main Service Line"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@lincolnautoandtruck.com", "service@lincolnautoandtruck.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["590 Lincoln St", "Worcester, MA 01605"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Daily: 7:00 AM - 9:00 PM", "Same hours every day"],
      action: "View Calendar"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our services or need help with your vehicle? 
            We're here to help! Reach out to us and we'll respond quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6" />
                  <span>Send Us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Describe your question or concern in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Attach Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Label 
                        htmlFor="file-upload" 
                        className="cursor-pointer flex flex-col items-center space-y-2"
                      >
                        <Upload className="w-8 h-8 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {selectedFile ? selectedFile.name : "Click to upload photos of your vehicle"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          JPG, PNG up to 10MB
                        </span>
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-accent hover:text-accent-light mt-2"
                      >
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="shadow-soft bg-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">24/7 Emergency Service</h3>
                <p className="text-sm mb-4 opacity-90">
                  Vehicle breakdown or urgent repairs? We're here to help.
                </p>
                <div className="text-2xl font-bold mb-2">(508) 853-3304</div>
                <Button 
                  className="bg-white text-accent hover:bg-white/90 w-full"
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card className="shadow-soft">
            <CardContent className="p-0">
              <div className="h-72 rounded-lg overflow-hidden">
                <iframe
                  title="Interactive Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.131640719241!2d-71.77159972360754!3d42.297056439079256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e407dc3a4349ed%3A0xfa44b059ab8b55c6!2sLincoln%20Auto%20and%20Truck%20LLC!5e0!3m2!1sen!2sus!4v1753046237726!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;