import { Check, AlertTriangle, Clock, Trophy } from "lucide-react";

const ResultsSection = () => {
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
      target: ">3.5/5",
      achievement: "Pending",
      status: "progress",
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
    <section id="resultados" className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.3)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">
          <Trophy className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-yellow" />
          <span className="text-brand-yellow">Results</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Benchmarking against Network Objectives
        </p>

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
                    <td className="py-4 px-6 font-medium">{item.goal}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{item.target}</td>
                    <td className="py-4 px-4 text-center font-semibold">{item.achievement}</td>
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
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-secondary rounded flex items-center justify-center">
              <Clock className="w-3 h-3 text-brand-light-blue" />
            </div>
            <span className="text-sm text-muted-foreground">In progress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
