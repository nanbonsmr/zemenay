import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Smartphone, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import GridBackground from "@/components/GridBackground";
const Services = () => {
  const services = [{
    icon: <Code className="h-8 w-8" />,
    title: "UI and Web Design",
    description: "Creating stunning user interfaces and web designs that captivate your audience and deliver exceptional user experiences.",
    features: ["Responsive Design", "User Experience (UX)", "Interface Design", "Prototyping"]
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description: "Building robust, scalable web applications using the latest technologies and best practices in modern development.",
    features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration"]
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: "E-Commerce Solutions",
    description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
    features: ["Shopping Cart", "Payment Integration", "Inventory Management", "Order Processing"]
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to increase your online presence and drive qualified traffic to your business.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
  }];
  const portfolio = [{
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js, featuring advanced product filtering, secure payments, and real-time inventory management.",
    tags: ["E-commerce", "React", "Node.js"],
    image: "EC"
  }, {
    title: "Corporate Website",
    description: "Professional corporate website with custom CMS, featuring responsive design, SEO optimization, and integrated contact forms for lead generation.",
    tags: ["Corporate", "CMS", "SEO"],
    image: "CW"
  }, {
    title: "Mobile App Interface",
    description: "User-friendly mobile application interface design with intuitive navigation, modern aesthetics, and seamless user experience across all devices.",
    tags: ["Mobile", "UI/UX", "Design"],
    image: "MA"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <GridBackground size="lg" />
        <div className="absolute inset-0 bg-background/95 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"></div>
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Our Expertise, Your Solutions.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Innovative software, web development, AI, and more to help your business thrive.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full w-full sm:w-auto">
              <Link to="#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => <Card key={index} className="bg-card/50 border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>)}
                  </ul>
                  <Button variant="ghost" className="text-primary hover:text-primary-glow p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="space-y-8">
            {/* Project 1 - Free Developer Training */}
            <Card className="bg-black text-white overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-white/10 text-white text-xs px-3 py-1 rounded-full mb-4">
                      Comprehensive Course
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Free Developer Training</h3>
                  <p className="text-gray-300 mb-6">
                    Explore the vast ecosystem of developers through comprehensive, hands-on learning programs. We offer free courses to help developers enhance their skills and advance their careers.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      React Development
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      Node.js Backend
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      100% Hands-on Projects
                    </li>
                  </ul>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 self-start">
                    Read Case Study
                  </Button>
                </CardContent>
                <div className="aspect-video bg-gray-800 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm bg-gray-900 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-700 rounded"></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="mt-4 h-20 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 2 - Chevrolet Averyl */}
            <Card className="bg-white border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video bg-gray-100 flex items-center justify-center p-8 lg:order-1">
                  <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 border">
                    <div className="h-4 bg-green-500 rounded mb-4"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Used Car Deals</h4>
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="h-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full mb-4">
                      Automotive Platform
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chevrolet Averyl</h3>
                  <p className="text-gray-600 mb-6">
                    A cutting-edge platform that lets you build dynamic, responsive web applications. Built with React for seamless user experiences and maximum performance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      API Development
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      Responsive Design
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      Search Integration
                    </li>
                  </ul>
                  <Button variant="default" className="bg-black text-white hover:bg-black/90 self-start">
                    Read Case Study
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Project 3 - Berhanu Integrated Farm */}
            <Card className="bg-black text-white overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-white/10 text-white text-xs px-3 py-1 rounded-full mb-4">
                      Agricultural Technology
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Berhanu Integrated Farm</h3>
                  <p className="text-gray-300 mb-6">
                    A complete e-commerce platform for modern farming supplies, featuring real-time inventory management, integrated payment solutions, and advanced analytics dashboard.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      Inventory Management
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      Payment Integration
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      Analytics Dashboard
                    </li>
                  </ul>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 self-start">
                    Read Case Study
                  </Button>
                </CardContent>
                <div className="aspect-video bg-gray-800 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm bg-green-600 rounded-lg p-6 text-white">
                    <h4 className="font-semibold mb-4">Farm Management</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Crop Yield</span>
                        <span className="text-sm font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-green-700 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{
                        width: '85%'
                      }}></div>
                      </div>
                    </div>
                    <div className="mt-4 h-16 bg-green-700 rounded"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and explore how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6">
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border hover:bg-secondary">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;