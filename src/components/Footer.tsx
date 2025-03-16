
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nexus-black py-16">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand and newsletter */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-space font-bold">
                <span className="text-nexus-purple">Up</span>-Nexus
              </h2>
              <p className="text-white/70 mt-2 max-w-md">
                A virtual hub connecting the entire entrepreneurial ecosystem in Algeria.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/5 border-white/10 text-white" 
                />
                <Button className="cta-primary shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Platform</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Ecosystem
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Startups
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © 2023 Up-Nexus. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
