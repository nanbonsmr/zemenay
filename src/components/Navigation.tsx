import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop/Tablet Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Logo variant="black" size="md" className="dark:hidden" />
                <Logo variant="white" size="md" className="hidden dark:block" />
                <span className="text-xl font-bold text-foreground">Zemenay</span>
              </Link>
              
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary lowercase ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name.toLowerCase()}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Theme Toggle and Contact */}
            <div className="flex items-center space-x-4">
              <ThemeToggle data-theme-toggle />
              <Button asChild variant="default" size="sm" className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Button - Mobile only */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] text-foreground hover:bg-secondary transition-all duration-200 hover:scale-110 bg-background/80 backdrop-blur-sm border border-border md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Right Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Sidebar Content */}
          <div className="fixed right-0 top-0 h-full w-80 bg-background border-l border-border shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
                  <Logo variant="black" size="md" className="dark:hidden" />
                  <Logo variant="white" size="md" className="hidden dark:block" />
                  <span className="text-xl font-bold text-foreground">Zemenay</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:bg-secondary transition-all duration-200 hover:scale-110"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg font-medium transition-all duration-300 hover:text-primary relative group animate-fade-in hover:translate-x-1 py-2 ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <div className="absolute -bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom section */}
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle data-theme-toggle />
              </div>
              <Button 
                asChild 
                variant="default" 
                size="sm" 
                className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;