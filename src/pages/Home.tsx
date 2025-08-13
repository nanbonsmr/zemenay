import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import GridBackground from "@/components/GridBackground";
const Home = () => {
  const services = [{
    icon: <Users className="h-6 w-6" />,
    title: "UX and Minimalist Interfaces",
    description: "Creating user-centered design that speak to users needs and simple all digital engagement."
  }, {
    icon: <Zap className="h-6 w-6" />,
    title: "Scalable, High-Performance",
    description: "Robust and fast web experiences that scale with your business needs and growth."
  }, {
    icon: <Shield className="h-6 w-6" />,
    title: "Reliable Support & Maintenance",
    description: "Complete post-launch support that ensures your digital platforms run at their optimum."
  }];
  const clients = [{
    name: "Client 1",
    image: "/lovable-uploads/5a4a98e1-59f5-410e-846f-33ca828a58b2.png"
  }, {
    name: "Goethe Institut",
    image: "/lovable-uploads/f2cbdc6e-9705-4bb2-94a1-78c29048bfb1.png"
  }, {
    name: "Chewata Awaqi",
    image: "/lovable-uploads/cfb416bf-30df-403b-ae51-6b036304a3b9.png"
  }, {
    name: "Client 1",
    image: "/lovable-uploads/5a4a98e1-59f5-410e-846f-33ca828a58b2.png"
  }, {
    name: "Goethe Institut",
    image: "/lovable-uploads/f2cbdc6e-9705-4bb2-94a1-78c29048bfb1.png"
  }, {
    name: "Chewata Awaqi",
    image: "/lovable-uploads/cfb416bf-30df-403b-ae51-6b036304a3b9.png"
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "Working with the team has been exceptional. They have guided us through every complex requirement and helped us execute our vision effectively.",
    rating: 5
  }, {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    content: "I have worked with development teams before. This group certainly stands out by combining technical excellence with business understanding.",
    rating: 5
  }, {
    name: "Emma Rodriguez",
    role: "Product Manager, DigitalFlow",
    content: "The custom platform they built has significantly improved our operations. Our team is able to work more efficiently and effectively.",
    rating: 5
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <GridBackground size="lg" />
        <div className="absolute inset-0 bg-background/95 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Revolutionize Your{" "}
                <br className="hidden sm:block" />
                <span className="text-foreground">Digital Experience</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                At Zemenay, we build clean, scalable, and elegant digital 
                experiences for forward-thinking businesses.
              </p>
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full w-full sm:w-auto">
                <Link to="/services">Let's Build Together</Link>
              </Button>
            </div>

            {/* Right Content - Glowing Black Circle */}
            <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-black dark:bg-white relative overflow-hidden">
                  {/* Multiple white glow layers for enhanced effect */}
                  <div className="absolute -inset-16 rounded-full bg-white/20 dark:bg-black/20 blur-3xl"></div>
                  <div className="absolute -inset-12 rounded-full bg-white/30 dark:bg-black/30 blur-2xl"></div>
                  <div className="absolute -inset-8 rounded-full bg-white/40 dark:bg-black/40 blur-xl"></div>
                  <div className="absolute -inset-4 rounded-full bg-white/20 dark:bg-black/20 blur-lg"></div>
                  
                  {/* Inner subtle border */}
                  <div className="absolute inset-2 rounded-full border border-white/10 dark:border-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Why Zemenay</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We help your business leverage the latest technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference when you choose to level up and build online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => <Card key={index} className="bg-card/50 border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary-glow p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Clients We've Had the Pleasure to Work With
            </h2>
            <p className="text-muted-foreground">
              Trusted by leading companies across various industries.
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {clients.map((client, index) => <div key={index} className="inline-flex items-center justify-center mx-8 min-w-32 h-24">
                  <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Real feedback from businesses that trusted us with their digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default Home;