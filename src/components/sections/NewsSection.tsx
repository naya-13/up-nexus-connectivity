
import { ArrowRight, Calendar, User } from "lucide-react";

const newsItems = [
  {
    title: "Algerian Fintech Startup Raises $2M in Seed Funding",
    excerpt: "PayDZ, a local fintech startup focused on digital payments, has successfully raised $2 million in seed funding led by Africa Venture Capital.",
    author: "Ahmed Benali",
    date: "October 12, 2023",
    category: "Funding",
    image: "https://placehold.co/800x400/b4d8e1/3e3032?text=Fintech+News"
  },
  {
    title: "Government Launches New Initiative to Support Entrepreneurs",
    excerpt: "The Algerian government has announced a new program aimed at supporting young entrepreneurs with mentorship, funding, and resources.",
    author: "Leila Hadj",
    date: "September 28, 2023",
    category: "Policy",
    image: "https://placehold.co/800x400/fbd852/3e3032?text=Government+Initiative"
  },
  {
    title: "Tech Talent Showcase: Connecting Developers with Startups",
    excerpt: "A recent event in Algiers brought together over 200 developers and 50 startups, creating new opportunities for collaboration and hiring.",
    author: "Karim Mesbah",
    date: "September 15, 2023",
    category: "Events",
    image: "https://placehold.co/800x400/f8f4f5/3e3032?text=Tech+Talent"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-nexus-teal/10">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="mb-12">
          <h2 className="subheadline text-nexus-light mb-4">Latest News</h2>
          <p className="text-nexus-light/80 max-w-2xl">
            Stay informed about the latest developments, success stories, and trends in Algeria's startup ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-nexus-purple/20 text-nexus-purple">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="font-medium text-xl mb-3 text-nexus-light">
                  {item.title}
                </h3>
                
                <p className="text-nexus-light/70 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-nexus-light/60 text-sm mt-auto">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-border/30 bg-nexus-dark/50">
                <a 
                  href="#" 
                  className="inline-flex items-center text-nexus-purple font-medium hover:text-nexus-teal transition-colors"
                >
                  Read full article
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-nexus-dark/50 hover:bg-nexus-dark border border-nexus-light/10 rounded-full text-nexus-light font-medium transition-all"
          >
            View All News
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
