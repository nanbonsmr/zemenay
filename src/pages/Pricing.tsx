import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Zap, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import GridBackground from "@/components/GridBackground";

const Pricing = () => {
  const plans = [
    {
      name: "Community",
      description: "Perfect for small projects and startups",
      price: "Free",
      period: "",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Basic website consultation",
        "Simple landing page",
        "Responsive design",
        "Basic SEO setup",
        "Email support"
      ],
      limitations: [
        "Limited customization",
        "No advanced features", 
        "Community support only"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "WordPress Solution",
      description: "Professional websites with custom development",  
      price: "Custom Pricing",
      period: "per project",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Custom design & branding",
        "Professional development",
        "Content management system", 
        "SEO optimization",
        "Mobile responsive",
        "Contact development system"
      ],
      cta: "Get Quote",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Large-scale solutions and applications",
      price: "Let's Talk",
      period: "custom quote", 
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Custom web applications",
        "Advanced integrations",
        "Dedicated project team",
        "Custom development",
        "Ongoing maintenance",
        "Priority support",
        "Training & documentation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const comparison = [
    { feature: "Website Features", community: true, wordpress: true, enterprise: true },
    { feature: "Basic web responsiveness", community: true, wordpress: true, enterprise: true },
    { feature: "SEO Optimization", community: "Basic", wordpress: true, enterprise: true },
    { feature: "Custom design & branding", community: false, wordpress: true, enterprise: true },
    { feature: "Content management system", community: false, wordpress: true, enterprise: true },
    { feature: "E-commerce functionality", community: false, wordpress: "Add-on", enterprise: true },
    { feature: "Advanced integrations", community: false, wordpress: "Limited", enterprise: true },
    { feature: "Custom web applications", community: false, wordpress: false, enterprise: true },
    { feature: "Database design & optimization", community: false, wordpress: "Basic", enterprise: true },
    { feature: "API development", community: false, wordpress: false, enterprise: true },
    { feature: "Advanced security features", community: false, wordpress: "Basic", enterprise: true },
    { feature: "Performance optimization", community: "Basic", wordpress: true, enterprise: true },
    { feature: "Ongoing maintenance", community: false, wordpress: "Optional", enterprise: true },
    { feature: "Priority support", community: false, wordpress: false, enterprise: true }
  ];

  const faqs = [
    {
      question: "What's included in the WordPress solution?",
      answer: "Our WordPress solution includes custom design, professional development, content management system, SEO optimization, mobile responsiveness, and our custom contact development system."
    },
    {
      question: "What is the WordPress Solution price?",
      answer: "Pricing for WordPress solutions varies based on complexity, features required, and timeline. Contact us for a detailed quote tailored to your specific needs."
    },
    {
      question: "What's the timeline of our work?",
      answer: "Project timelines depend on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications may take 8-16 weeks. We'll provide a detailed timeline during consultation."
    },
    {
      question: "How about pricing outside the WordPress space and non-typical projects?",
      answer: "For custom applications, e-commerce platforms, or specialized projects outside WordPress, we provide custom quotes based on requirements, technology stack, and development time needed."
    },
    {
      question: "How should you hire?",
      answer: "Start with a consultation to discuss your needs. We'll provide a detailed proposal with timeline and pricing. Once approved, we begin with a discovery phase followed by design and development."
    },
    {
      question: "Do I need to pay anything to try to hire?",
      answer: "Initial consultations are free. We only start charging once you approve our proposal and we begin active development work on your project."
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) return <Check className="h-5 w-5 text-primary" />;
    if (value === false) return <span className="text-muted-foreground">—</span>;
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <GridBackground size="lg" />
        <div className="absolute inset-0 bg-background/95 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Simple, Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Choose the perfect plan for your needs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From startups and small business, reach out with your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card/50 border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4 text-primary">{plan.icon}</div>
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                    {plan.period && (
                      <div className="text-sm text-muted-foreground">{plan.period}</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    
                    {plan.limitations && plan.limitations.map((limitation, idx) => (
                      <li key={`limit-${idx}`} className="flex items-start opacity-60">
                        <span className="text-muted-foreground mr-3 mt-0.5">—</span>
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Compare Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed comparison of features across all our service tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Card className="bg-card/50 border-border">
              <div className="min-w-full">
                <div className="grid grid-cols-4 gap-4 p-6 border-b border-border">
                  <div className="font-semibold text-foreground">Features</div>
                  <div className="text-center font-semibold text-foreground">Community</div>
                  <div className="text-center font-semibold text-foreground">WordPress</div>
                  <div className="text-center font-semibold text-foreground">Enterprise</div>
                </div>
                
                {comparison.map((row, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <div className="text-muted-foreground">{row.feature}</div>
                    <div className="text-center">{renderFeatureValue(row.community)}</div>
                    <div className="text-center">{renderFeatureValue(row.wordpress)}</div>
                    <div className="text-center">{renderFeatureValue(row.enterprise)}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about our services and pricing.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6"
          >
            <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;