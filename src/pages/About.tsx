import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import GridBackground from "@/components/GridBackground";
const About = () => {
  const values = [{
    title: "Our Mission",
    description: "To empower businesses with innovative digital solutions that drive growth and deliver exceptional user experiences.",
    icon: <Target className="h-8 w-8 text-primary" />
  }, {
    title: "Our Vision",
    description: "To become the leading digital agency that transforms how businesses connect with their customers in the digital age.",
    icon: <Globe className="h-8 w-8 text-primary" />
  }, {
    title: "Our Values",
    description: "We believe in transparency, quality, innovation, and building long-lasting partnerships with our clients.",
    icon: <Award className="h-8 w-8 text-primary" />
  }];
  const team = [{
    name: "Alex Thompson",
    role: "Chief Executive Officer",
    bio: "15 years of tech leadership experience",
    image: "AT"
  }, {
    name: "Sarah Chen",
    role: "Creative Director",
    bio: "Expert in digital marketing and brand strategy",
    image: "SC"
  }, {
    name: "Marcus Rodriguez",
    role: "Technical Director",
    bio: "Full-stack development and system architecture",
    image: "MR"
  }];
  const stats = [{
    number: "50+",
    label: "Projects Completed"
  }, {
    number: "25+",
    label: "Happy Clients"
  }, {
    number: "5+",
    label: "Years Experience"
  }, {
    number: "3",
    label: "Team Members"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <GridBackground size="lg" />
        <div className="absolute inset-0 bg-background/95 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"></div>
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              About Our Journey
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Discover the story behind our passion for innovation and 
              commitment to excellence. We're on a mission to transform the 
              digital landscape, one project at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full w-full sm:w-auto">
                <Link to="#mission">Our Mission</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-black/20 text-black hover:bg-black/5 rounded-full">
                <Link to="#team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">We Put People First</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our story began with a simple belief: great digital experiences should be accessible to everyone.
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2019, Zemenay started as a small team of passionate developers and designers who believed that every business deserves exceptional digital presence. We've grown from strength to strength, helping organizations of all sizes achieve their digital goals.
              </p>
              <Button asChild variant="outline" className="border-border hover:bg-secondary">
                <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-card/50 border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                    <Users className="h-24 w-24 text-primary/50" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values drive everything we do, from the way we work with clients to how we approach each project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => <Card key={index} className="bg-card/50 border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                  <Button variant="ghost" className="mt-4 text-primary hover:text-primary-glow p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team brings together diverse skills and experiences to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => <Card key={index} className="bg-card/50 border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary/50 border border-border flex items-center justify-center">
                <Logo variant="primary" size="sm" />
              </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>;
};
export default About;