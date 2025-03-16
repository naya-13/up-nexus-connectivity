
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Layers, Search, BarChart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Choose Role",
    description: "Create your account and tell us whether you're a startup, investor, incubator, or talent.",
    color: "bg-nexus-purple/20",
    iconColor: "text-nexus-purple"
  },
  {
    icon: Layers,
    title: "Discover Tools",
    description: "Access a custom dashboard with tools tailored to your specific ecosystem role.",
    color: "bg-nexus-teal/20",
    iconColor: "text-nexus-teal"
  },
  {
    icon: Search,
    title: "Connect",
    description: "Find and connect with the right partners, resources, and opportunities for your needs.",
    color: "bg-nexus-purple/20",
    iconColor: "text-nexus-purple"
  },
  {
    icon: BarChart,
    title: "Grow",
    description: "Leverage the network and tools to accelerate your growth and success.",
    color: "bg-nexus-teal/20",
    iconColor: "text-nexus-teal"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="subheadline mb-4">How Up-Nexus Works</h2>
          <p className="text-white/80">
            Our platform makes it easy to navigate Algeria's startup ecosystem with a simple four-step process.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-[84px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-0.5 bg-gradient-to-r from-nexus-purple via-nexus-teal to-nexus-purple"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step number */}
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 z-10`}>
                  <step.icon size={24} className={step.iconColor} />
                </div>
                
                <h3 className="font-medium text-xl mb-2 text-center">{step.title}</h3>
                
                <p className="text-white/70 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="cta-primary group">
              Get Started Now
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
