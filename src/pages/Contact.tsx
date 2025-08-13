import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import GridBackground from "@/components/GridBackground";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    setIsSubmitting(false);
  };
  const contactInfo = [{
    icon: <MapPin className="h-6 w-6" />,
    title: "Our Location",
    details: ["Addis Ababa, Ethiopia"]
  }, {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Number",
    details: ["+251 911 123 456"]
  }, {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Address",
    details: ["zemenay.tech.solutions@gmail.com"]
  }, {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday - Sunday: 10:00 AM - 3:00 PM"]
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <GridBackground size="lg" />
        <div className="absolute inset-0 bg-background/95 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Have questions or want to discuss a project?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We'd love to hear from you. Our team is ready to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input id="firstName" placeholder="Alex" required className="bg-input border-border focus:ring-primary" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" required className="bg-input border-border focus:ring-primary" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="alex@example.com" required className="bg-input border-border focus:ring-primary" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-border focus:ring-primary">
                        <SelectValue placeholder="What are you like to talk?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={6} required className="bg-input border-border focus:ring-primary resize-none" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow">
                    {isSubmitting ? "Sending..." : <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => <div key={index} className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => <p key={idx} className="text-muted-foreground text-sm">{detail}</p>)}
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="bg-card/50 border-border overflow-hidden">
                <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground/70">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      
    </div>;
};
export default Contact;