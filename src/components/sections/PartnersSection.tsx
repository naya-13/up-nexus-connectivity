
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-nexus-dark to-nexus-black">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="subheadline mb-4">Trusted By Ecosystem Leaders</h2>
          <p className="text-white/80">
            Join the growing network of organizations and individuals shaping Algeria's entrepreneurial future.
          </p>
        </div>
        
        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center justify-center h-24">
              <div className="font-space font-medium text-white/50 text-lg">Partner {index + 1}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-white/10">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-nexus-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-white/80 italic mb-6 flex-grow">
                  "Up-Nexus has completely transformed how we connect with investors and other startups. It's the missing link in Algeria's entrepreneurial ecosystem."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-nexus-purple/20 flex items-center justify-center mr-3">
                    <span className="text-nexus-purple font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">Founder {index + 1}</div>
                    <div className="text-white/60 text-sm">Startup {index + 1}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-nexus-purple/20 to-nexus-teal/20 rounded-2xl p-8 md:p-12 border border-white/10 text-center">
          <h2 className="text-2xl md:text-3xl font-space font-medium mb-4">
            Be Part of the Next Startup Wave
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join hundreds of founders, investors, and ecosystem supporters already transforming Algeria's entrepreneurial landscape.
          </p>
          <Button size="lg" className="cta-primary group">
            Get Started Now
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
