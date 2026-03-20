import { DoorOpen, GraduationCap, Coins, Bot, Pizza, Globe, Wrench, BookOpen, Award } from "lucide-react";

const ExperienceSection = () => {
  const timeline = [
    {
      title: "Pre-Event",
      icon: <DoorOpen className="w-5 h-5" />,
      content: "Attendees began to arrive with enthusiasm, quickly integrating into the welcoming atmosphere of Casa Frutero. Registration flowed smoothly as participants met and shared expectations about the event.",
    },
    {
      title: "Track 1 - Onboarding & Fundamentals",
      icon: <GraduationCap className="w-5 h-5" />,
      content: "A comprehensive introduction to the Ethereum ecosystem, covering blockchain basics, fundamental concepts (addresses, seed phrases), security best practices, and network types, establishing a solid foundation for ecosystem newcomers.",
    },
    {
      title: "Track 2 - Introduction to DeFi",
      icon: <Coins className="w-5 h-5" />,
      content: "Exploration of DeFi ecosystem, terminology, security recommendations, and protocols like AAVE, successfully demystifying decentralized finance and emphasizing advantages over traditional finance.",
    },
    {
      title: "Track 3 - AI as Learning Assistant",
      icon: <Bot className="w-5 h-5" />,
      content: "Demonstration of AI tools for building, security recommendations, and verification best practices, including a live bot demo for automated token transactions. Technical issues during the demo provided authentic learning about real-world development challenges; organizers invited participants to reconvene for collaborative troubleshooting.",
    },
    {
      title: "Networking Session",
      icon: <Pizza className="w-5 h-5" />,
      content: "Organic networking session where participants discussed projects, formed connections, and explored collaboration opportunities, over pizza and refreshments. With engaging conversations about how AI and Vibe Coding enable non-technical individuals to create projects while helping experienced builders reduce errors.",
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

        {/* Notable Moments */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Notable Moments</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-frutal border-l-4 border-brand-light-blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Hybrid Engagement Success</h4>
              </div>
              <p className="text-muted-foreground">
                The remote audience actively participated through live chat, asking questions
                in real-time and contributing to discussions. The hybrid format proved to be effective
                for expanding reach without sacrificing interaction quality.
              </p>
            </div>

            <div className="card-frutal border-l-4 border-brand-yellow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Authentic Technical Challenge</h4>
              </div>
              <p className="text-muted-foreground">
                Unexpected technical issues arose during the AI bot demonstration.
                This became a valuable learning moment, showing the reality of
                Web3 development and the importance of resilience in the face of failure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
