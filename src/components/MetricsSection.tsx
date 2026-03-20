import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { Youtube, Users, Award, BarChart3 } from "lucide-react";

// Custom X (formerly Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const MetricsSection = () => {
  const registrationData = [
    { name: "Luma Registrations", value: 21, fill: "hsl(215, 65%, 35%)" },
    { name: "IRL Attendees", value: 15, fill: "hsl(355, 77%, 50%)" },
  ];

  const poapData = [
    { name: "In-person", value: 18, fill: "hsl(355, 77%, 50%)" },
    { name: "Remote", value: 5, fill: "hsl(199, 79%, 66%)" },
    { name: "Unclaimed", value: 27, fill: "hsl(215, 20%, 85%)" },
  ];

  const audienceData = [
    { name: "Beginner", value: 55, fill: "hsl(41, 100%, 66%)" },
    { name: "Intermediate", value: 35, fill: "hsl(199, 79%, 66%)" },
    { name: "Advanced", value: 10, fill: "hsl(215, 65%, 35%)" },
  ];

  const newVsReturning = [
    { name: "First time", value: 44.44, fill: "hsl(355, 77%, 50%)" },
    { name: "Returning", value: 55.56, fill: "hsl(215, 65%, 35%)" },
  ];

  return (
    <section id="metricas" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-brand-dark-blue">
          <BarChart3 className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-dark-blue" />
          <span>Metrics</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Quantitative Analysis</p>

        {/* Registration & Attendance */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Registration & Attendance</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-frutal">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={registrationData} layout="vertical">
                  <XAxis type="number" domain={[0, 50]} />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center">
              <div className="stat-card">
                <div className="stat-number text-brand-red">71%</div>
                <div className="stat-label text-lg">Conversion Rate</div>
                <p className="text-lg text-muted-foreground mt-2">15 out of 21 registered attended</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Stats */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Social Media Engagement</h3>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="stat-card">
              <div className="stat-number text-brand-red">11</div>
              <div className="stat-label text-lg">Total Posts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-dark-blue">700+</div>
              <div className="stat-label text-lg">X Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
