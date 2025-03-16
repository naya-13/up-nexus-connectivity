
import { Button } from "@/components/ui/button";
import ParticleBackground from "../ParticleBackground";
import { ArrowRight, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <ParticleBackground />
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/10">
            <Rocket size={16} className="text-nexus-purple mr-2" />
            <span className="text-sm">Revolutionizing Algeria's startup ecosystem</span>
          </div>
          
          <h1 className="headline animate-fade-in mb-6">
            <span className="text-nexus-purple">Up-Nexus:</span> Gravity for Innovation
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            A virtual hub connecting the entire entrepreneurial ecosystem in Algeria.
            Uniting startups, investors, incubators, and talent through AI-powered tools.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="cta-primary group">
              Join the Movement
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
              Explore the Ecosystem
            </Button>
          </div>
          
          <div className="relative">
            {/* Placeholder for orbit animation */}
            <div className="relative w-full aspect-[16/9] max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-nexus-purple/20 to-nexus-teal/20 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center h-full">
                  <div className="relative">
                    {/* Center hub */}
                    <div className="w-16 h-16 rounded-full bg-nexus-purple/80 flex items-center justify-center z-20 relative animate-pulse-slow">
                      <span className="font-space font-bold text-sm">Up-Nexus</span>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
                      {/* Orbit paths */}
                      <div className="absolute inset-0 rounded-full border border-white/10"></div>
                      
                      {/* Orbiting items */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-nexus-teal flex items-center justify-center animate-orbit">
                        <span className="text-xs">Startups</span>
                      </div>
                      
                      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-nexus-purple flex items-center justify-center animate-orbit" style={{ animationDelay: '-5s' }}>
                        <span className="text-xs">Investors</span>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-nexus-teal flex items-center justify-center animate-orbit" style={{ animationDelay: '-10s' }}>
                        <span className="text-xs">Talent</span>
                      </div>
                      
                      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-nexus-purple flex items-center justify-center animate-orbit" style={{ animationDelay: '-15s' }}>
                        <span className="text-xs">Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nexus-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
