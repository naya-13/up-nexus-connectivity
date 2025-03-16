
import { 
  Bell, 
  Search, 
  BarChart, 
  Megaphone, 
  Mail, 
  Globe,
  ArrowUpRight
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Personalized Notifications",
    description: "Get customized alerts about opportunities and resources relevant to your specific startup journey.",
    color: "text-nexus-purple"
  },
  {
    icon: Search,
    title: "Ecosystem Search Engine",
    description: "Easily find and connect with the right investors, mentors, incubators, and talent for your needs.",
    color: "text-nexus-teal"
  },
  {
    icon: BarChart,
    title: "Freemium Market Research",
    description: "Access essential market insights and data to make informed business decisions and attract investors.",
    color: "text-nexus-purple"
  },
  {
    icon: Megaphone,
    title: "AI-powered Announcements",
    description: "Discover relevant opportunities through our smart matching system. Never miss a grant or competition again.",
    color: "text-nexus-teal"
  },
  {
    icon: Mail,
    title: "Weekly Startup Newsletter",
    description: "Stay updated with curated news about Algeria's startup ecosystem, success stories, and upcoming events.",
    color: "text-nexus-purple"
  },
  {
    icon: Globe,
    title: "SEO Visibility Boost",
    description: "Enhance your online presence and get discovered by potential partners, customers, and investors.",
    color: "text-nexus-teal"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative bg-nexus-black">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent_50%)]"></div>
      
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="subheadline mb-4">Powerful Features to Support Your Growth</h2>
          <p className="text-white/80">
            Our comprehensive toolkit helps founders, investors, and ecosystem supporters connect and thrive in Algeria's entrepreneurial landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="features-card group">
              <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors ${feature.color}`}>
                <feature.icon size={20} />
              </div>
              
              <h3 className="font-medium text-xl mb-2 flex items-center">
                {feature.title}
                <ArrowUpRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
