
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Layers, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left side graphics */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-nexus-purple/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-nexus-teal/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-nexus-purple/10 to-nexus-teal/10 rounded-2xl p-1 border border-white/10">
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-white/5 border-b border-white/5">
                  <div className="p-6 flex flex-col">
                    <span className="text-4xl font-space font-bold text-nexus-purple">200+</span>
                    <span className="text-white/70">Active Startups</span>
                  </div>
                  <div className="p-6 flex flex-col">
                    <span className="text-4xl font-space font-bold text-nexus-teal">50+</span>
                    <span className="text-white/70">Investors</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/5">
                  <div className="p-6 flex flex-col">
                    <span className="text-4xl font-space font-bold text-nexus-teal">25+</span>
                    <span className="text-white/70">Incubators</span>
                  </div>
                  <div className="p-6 flex flex-col">
                    <span className="text-4xl font-space font-bold text-nexus-purple">1000+</span>
                    <span className="text-white/70">Talented Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="space-y-8">
            <div>
              <h2 className="subheadline mb-4">Uniting Algeria's Entrepreneurial Ecosystem</h2>
              <p className="text-white/80 text-lg">
                Up-Nexus addresses the critical challenges facing Algeria's startup ecosystem by creating a centralized platform where all key players can connect, collaborate, and grow.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-nexus-purple/20 flex items-center justify-center">
                  <Compass className="text-nexus-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Solving Ecosystem Fragmentation</h3>
                  <p className="text-white/70">
                    We connect dispersed resources, organizations, and talent into one accessible hub.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-nexus-teal/20 flex items-center justify-center">
                  <Layers className="text-nexus-teal" />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Making Resources Accessible</h3>
                  <p className="text-white/70">
                    Democratizing access to essential tools, knowledge, funding, and support for all entrepreneurs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-nexus-purple/20 flex items-center justify-center">
                  <Zap className="text-nexus-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Empowering Bottom-Up Innovation</h3>
                  <p className="text-white/70">
                    Creating the conditions for grassroots entrepreneurship to thrive across Algeria.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="cta-secondary group">
              Learn More About Our Mission
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
