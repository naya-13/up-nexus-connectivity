
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Map, Building, Users, Lightbulb, Briefcase, Laptop } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Map, count: 234 },
  { id: "startups", label: "Startups", icon: Lightbulb, count: 98 },
  { id: "investors", label: "Investors", icon: Briefcase, count: 45 },
  { id: "incubators", label: "Incubators", icon: Building, count: 27 },
  { id: "support", label: "Support Orgs", icon: Users, count: 36 },
  { id: "talent", label: "Talent", icon: Laptop, count: 28 }
];

const EcosystemSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="ecosystem" className="py-20">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="mb-12">
          <h2 className="subheadline mb-4">Ecosystem Map</h2>
          <p className="text-nexus-light/80 max-w-2xl">
            Explore the vibrant network of startups, investors, incubators, and support organizations across Algeria.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`
                rounded-full flex items-center gap-2 
                ${activeCategory === category.id 
                  ? 'bg-nexus-purple text-nexus-dark border-nexus-purple' 
                  : 'border-nexus-light/20 text-nexus-light/70 hover:bg-nexus-light/5'
                }
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon size={14} />
              {category.label}
              <span className="ml-1 bg-nexus-dark/20 px-2 py-0.5 rounded-full text-xs">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
        
        <div className="bg-nexus-light/5 border border-nexus-light/10 rounded-xl overflow-hidden">
          <div className="relative w-full aspect-[16/9]">
            {/* This would be a real map in a production app */}
            <div className="absolute inset-0 bg-nexus-dark flex items-center justify-center">
              <div className="text-center">
                <Map size={60} className="mx-auto mb-4 text-nexus-teal opacity-50" />
                <p className="text-nexus-light/70 max-w-md mx-auto mb-4">
                  Interactive ecosystem map would be implemented here, showing the geographical distribution of ecosystem actors across Algeria.
                </p>
                <Button className="cta-secondary">
                  Explore Full Ecosystem Map
                </Button>
              </div>
            </div>
            
            {/* Sample map elements */}
            <div className="absolute inset-0">
              {/* These would be generated dynamically in a real app */}
              <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-nexus-purple rounded-full animate-pulse"></div>
              <div className="absolute top-[50%] left-[60%] w-4 h-4 bg-nexus-teal rounded-full animate-pulse"></div>
              <div className="absolute top-[20%] left-[70%] w-2 h-2 bg-nexus-purple rounded-full animate-pulse"></div>
              <div className="absolute top-[70%] left-[30%] w-3 h-3 bg-nexus-teal rounded-full animate-pulse"></div>
              <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-nexus-purple rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-nexus-light/60 mb-4">
            Want to be featured on the ecosystem map?
          </p>
          <Button className="cta-primary">
            Register Your Organization
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
