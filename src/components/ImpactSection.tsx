import { BookOpen, Users, Lightbulb, Trophy, CalendarCheck, Target, Check, AlertTriangle, Clock } from "lucide-react";

const ImpactSection = () => {
  const knowledgePoints = [
    "Basic understanding of wallets and on-chain transactions",
    "Familiarity with DeFi concepts and core protocols",
    "Exposure to AI tools for Web3",
    "Understanding of the Ethereum ecosystem",
  ];

  const communityPoints = [
    "New connections formed between attendees (developers and enthusiasts)",
    "Integration of new members into existing Frutero community",
    "Commitment to participate in future events",
  ];

  const projectPoints = [
    "DeFi protocols and interest rates",
    "Building with AI and Vibe Coding",
    "Automated crypto payment bots",
    "Social impact projects with blockchain",
  ];

  const goals = [
    {
      goal: "Execute according to calendar",
      target: "✓",
      achievement: "January 28, 2026",
      status: "complete",
    },
    {
      goal: "3-track curriculum",
      target: "✓",
      achievement: "All delivered",
      status: "complete",
    },
    {
      goal: "Live streaming",
      target: "✓",
      achievement: "469 views",
      status: "complete",
    },
    {
      goal: "POAP distribution",
      target: "70%+",
      achievement: "46%",
      status: "warning",
    },
    {
      goal: "Build community",
      target: "20-30",
      achievement: "18 + 469 remote",
      status: "complete",
    },
    {
      goal: "Satisfaction",
      target: "4/5",
      achievement: "80%",
      status: "complete",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <Check className="w-5 h-5 text-emerald-600" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case "progress":
        return <Clock className="w-5 h-5 text-brand-light-blue" />;
      default:
        return null;
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-emerald-50";
      case "warning":
        return "bg-amber-50";
      case "progress":
        return "bg-secondary/30";
      default:
        return "";
    }
  };

  return (
    <section id="impacto" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-brand-yellow">
          <Target className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-yellow" />
          <span>Impact</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Results Evaluation</p>

        {/* Immediate Outcomes */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Immediate Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Knowledge */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Knowledge Acquisition</h4>
              </div>
              <ul className="space-y-2">
                {knowledgePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-brand-red mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-dark-blue/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Community Building</h4>
              </div>
              <ul className="space-y-2">
                {communityPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-brand-dark-blue mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-brand-yellow" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Project Ideation</h4>
              </div>
              <ul className="space-y-2">
                {projectPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-brand-yellow mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Results Benchmarking */}
          <div className="mt-20 mb-16">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-3">Results Benchmarking</h3>
            <div className="card-frutal overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-brand-dark-blue text-white">
                      <th className="text-left py-4 px-6 font-semibold">Objective</th>
                      <th className="text-center py-4 px-4 font-semibold">Target</th>
                      <th className="text-center py-4 px-4 font-semibold">Achievement</th>
                      <th className="text-center py-4 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goals.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border last:border-0 ${getStatusBg(item.status)}`}
                      >
                        <td className="py-4 px-6 font-medium text-sm md:text-base">{item.goal}</td>
                        <td className="py-4 px-4 text-center text-muted-foreground text-sm">{item.target}</td>
                        <td className="py-4 px-4 text-center font-semibold text-sm md:text-base">{item.achievement}</td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">{getStatusIcon(item.status)}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-100 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-sm text-muted-foreground">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber-100 rounded flex items-center justify-center">
                  <AlertTriangle className="w-3 h-3 text-amber-500" />
                </div>
                <span className="text-sm text-muted-foreground">Below goal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Engagement */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Future Engagement</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-frutal bg-gradient-to-br from-brand-red/5 to-brand-red/10 border border-brand-red/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-red">Hackathon Participation</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Several participants expressed interest and commitment to form teams for HackMoney
                and other ecosystem hackathons. Complementary profiles were identified for future collaborations.
              </p>
            </div>

            <div className="card-frutal bg-gradient-to-br from-brand-dark-blue/5 to-brand-dark-blue/10 border border-brand-dark-blue/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-brand-dark-blue rounded-xl flex items-center justify-center">
                  <CalendarCheck className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark-blue">Commitment for Q2</h4>
              </div>
              <div className="text-center py-4 mb-4">
                <div className="text-5xl font-bold text-brand-dark-blue">90%+</div>
                <p className="text-muted-foreground mt-2">Overall Interest</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The majority of in-person attendees and remote participants expressed strong enthusiasm for the upcoming
                Frutal Meetups in Q2, highlighting the high value of the content and connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
