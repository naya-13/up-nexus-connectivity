
import { Button } from "@/components/ui/button";
import { BellRing, ArrowRight } from "lucide-react";

const announcements = [
  {
    title: "Apply for Algeria Startup Challenge 2023",
    date: "Oct 15, 2023",
    description: "Applications are open for the largest startup competition in Algeria. Win up to $20,000 in funding.",
    link: "#"
  },
  {
    title: "New Government Grant for Tech Startups",
    date: "Sep 28, 2023",
    description: "The Ministry of Startups has launched a new program to support tech startups with up to $10,000 in grants.",
    link: "#"
  },
  {
    title: "Algeria Tech Connect Conference",
    date: "Nov 5-7, 2023",
    description: "Join the largest tech conference in North Africa with speakers from Google, Microsoft, and local success stories.",
    link: "#"
  }
];

const AnnouncementsSection = () => {
  return (
    <section id="announcements" className="py-20 bg-nexus-light">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="mb-12">
          <h2 className="subheadline text-nexus-dark mb-4">Latest Announcements</h2>
          <p className="text-nexus-dark/80 max-w-2xl">
            Stay updated with the latest opportunities, events, and news from the Algerian startup ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-nexus-teal/20 hover:border-nexus-teal transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-nexus-teal/10 flex items-center justify-center mr-3">
                  <BellRing size={18} className="text-nexus-teal" />
                </div>
                <span className="text-nexus-dark/60 text-sm">{announcement.date}</span>
              </div>
              
              <h3 className="text-xl font-medium text-nexus-dark mb-3">{announcement.title}</h3>
              
              <p className="text-nexus-dark/70 mb-4">
                {announcement.description}
              </p>
              
              <a 
                href={announcement.link} 
                className="inline-flex items-center text-nexus-teal font-medium hover:text-nexus-purple transition-colors"
              >
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-nexus-dark text-nexus-light hover:bg-nexus-dark/80">
            View All Announcements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
