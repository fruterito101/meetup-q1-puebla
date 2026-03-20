import { DoorOpen, GraduationCap, Coins, Bot, Pizza, Globe, Wrench, BookOpen, Award } from "lucide-react";

const ExperienceSection = () => {
  const timeline = [
    {
      title: "Track 1: Onboarding & Fundamentals",
      icon: <GraduationCap className="w-5 h-5" />,
      content: "Ethereum Onboarding: Core concepts and initial network setup",
    },
    {
      title: "Track 2: Introduction to DeFi",
      icon: <Coins className="w-5 h-5" />,
      content: "Liquidity mechanics and emerging financial tools",
    },
    {
      title: "Track 3: AI as Learning Assistant",
      icon: <Bot className="w-5 h-5" />,
      content: "Tools for on-chain analysis and coding optimization",
    },
    {
      title: "Networking: Community Building",
      icon: <Pizza className="w-5 h-5" />,
      content: "The networking space featured golden tacos, potato wedges, fries, popcorn, and snacks. Beer, soft drinks, and water were available to keep conversations flowing. The vibe encouraged attendees to exchange contacts and ask technical questions after the talks.",
    },
  ];

  return (
    <section id="experiencia" className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.3)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center text-brand-red">
          <Award className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-red" />
          <span>Event Narrative</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Qualitative Analysis</p>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Event Narrative</h3>
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card-frutal ml-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand-light-blue/20 rounded-lg flex items-center justify-center text-brand-dark-blue">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-brand-dark-blue">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ExperienceSection;
