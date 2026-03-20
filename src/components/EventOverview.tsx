import { Calendar, MapPin, Clock, Users, Wallet, TrendingUp, Bot, Coffee } from "lucide-react";

const EventOverview = () => {
  const tracks = [
    {
      name: "Track 1: Onboarding & Fundamentals",
      duration: "45 min",
      description: "Ethereum basics, wallet setup, security, network types",
      icon: <Wallet className="w-6 h-6" />,
      bgColor: "bg-brand-red",
    },
    {
      name: "Track 2: Introduction to DeFi",
      duration: "45 min",
      description: "DeFi terminology, security, protocols (AAVE), TradFi comparison",
      icon: <TrendingUp className="w-6 h-6" />,
      bgColor: "bg-brand-dark-blue",
    },
    {
      name: "Track 3: AI as Learning Assistant",
      duration: "45 min",
      description: "AI tools for building, security recommendations, live bot demo",
      icon: <Bot className="w-6 h-6" />,
      bgColor: "bg-brand-light-blue",
    },
    {
      name: "Networking: Community Building",
      duration: "45 min",
      description: "Pizza, drinks, project discussions, team formation",
      icon: <Coffee className="w-6 h-6" />,
      bgColor: "bg-brand-yellow",
    },
  ];

  return (
    <section className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.3)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-brand-dark-blue mb-12">
          Event Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="card-frutal">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold">January 28, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark-blue/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Casa Frutero, CDMX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-light-blue/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-light-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">3 hours + networking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Format</p>
                  <p className="font-semibold">In-person + Streaming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="card-frutal">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Curriculum</h3>
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`track-card ${track.bgColor} flex flex-col p-5 md:p-6 rounded-xl transition-all hover:scale-[1.02] ${track.bgColor === 'bg-brand-light-blue' || track.bgColor === 'bg-brand-yellow' ? 'text-foreground' : 'text-white'}`}
                >
                  <div className="flex items-start justify-between w-full mb-2">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">{track.icon}</div>
                      <span className="font-bold text-sm md:text-base leading-tight">{track.name}</span>
                    </div>
                    <span className="text-xs md:text-sm font-medium opacity-90 whitespace-nowrap ml-4">{track.duration}</span>
                  </div>
                  <p className="text-sm md:text-base opacity-85 ml-[2.25rem] leading-relaxed">
                    {track.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
