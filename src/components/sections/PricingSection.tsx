
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Essential tools for startups and ecosystem members",
    features: [
      "Basic ecosystem search",
      "Limited profile visibility",
      "Weekly newsletter",
      "Public announcements & opportunities",
      "Community forum access"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Growth",
    price: "15",
    description: "Enhanced tools for serious entrepreneurs",
    features: [
      "Advanced ecosystem search",
      "Enhanced profile visibility",
      "Personalized opportunity alerts",
      "Basic market research reports",
      "Direct messaging (10/month)",
      "SEO visibility boost"
    ],
    cta: "Upgrade to Growth",
    highlighted: true
  },
  {
    name: "Pro",
    price: "39",
    description: "Complete toolkit for established startups",
    features: [
      "Full ecosystem search access",
      "Priority profile placement",
      "Custom notification settings",
      "Complete market research access",
      "Unlimited direct messaging",
      "SEO optimization & analytics",
      "Dedicated support"
    ],
    cta: "Upgrade to Pro",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-nexus-black to-transparent"></div>
      
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="subheadline mb-4">Simple, Transparent Pricing</h2>
          <p className="text-white/80">
            Start for free and upgrade as your needs grow. No hidden fees or complicated pricing structures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${
                plan.highlighted 
                  ? 'border-nexus-purple bg-gradient-to-b from-nexus-purple/20 to-transparent' 
                  : 'border-white/10 bg-card'
              } p-8 flex flex-col h-full`}
            >
              {plan.highlighted && (
                <div className="py-1 px-4 bg-nexus-purple text-white text-sm rounded-full self-start mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-space font-medium mb-2">{plan.name}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-space font-bold">${plan.price}</span>
                <span className="text-white/70">/month</span>
              </div>
              
              <p className="text-white/80 mb-6">{plan.description}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check size={18} className="text-nexus-teal shrink-0 mt-0.5 mr-3" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={plan.highlighted ? "cta-primary w-full" : "bg-white/10 hover:bg-white/20 text-white w-full"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-white/70">
          <p>Need a custom plan for your organization? <a href="#" className="text-nexus-teal hover:underline">Contact us</a> for enterprise pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
