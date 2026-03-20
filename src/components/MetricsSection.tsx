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
                <div className="stat-number text-brand-red">44%</div>
                <div className="stat-label text-lg">Conversion Rate</div>
                <p className="text-lg text-muted-foreground mt-2">18 out of 41 registered attended</p>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming Stats */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Streaming Reach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card bg-brand-red text-white">
              <Youtube className="w-10 h-10 mx-auto mb-3" />
              <div className="stat-number">125</div>
              <div className="stat-label text-white/80 text-lg">YouTube Views</div>
            </div>
            <div className="stat-card bg-brand-dark-blue text-white">
              <XIcon className="w-10 h-10 mx-auto mb-3" />
              <div className="stat-number">344</div>
              <div className="stat-label text-white/80 text-lg">X Views</div>
            </div>
            <div className="stat-card bg-brand-light-blue">
              <Users className="w-10 h-10 mx-auto mb-3 text-brand-dark-blue" />
              <div className="stat-number text-brand-dark-blue">469</div>
              <div className="stat-label text-lg text-brand-dark-blue">Total Remote Reach</div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* POAP Distribution */}
          <div className="card-frutal">
            <h3 className="text-lg font-bold text-brand-dark-blue mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-yellow" />
              POAP Distribution
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={poapData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {poapData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {poapData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span>{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              <span className="font-medium">Target: 70%</span> | Achieved: 46%
            </p>
          </div>

          {/* Audience Composition */}
          <div className="card-frutal">
            <h3 className="text-lg font-bold text-brand-dark-blue mb-4">Audience Composition</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = outerRadius + 18;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        fill={audienceData[index].fill}
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        className="text-[11px] font-semibold"
                      >
                        {value}%
                      </text>
                    );
                  }}
                >
                  {audienceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {audienceData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* New vs Returning */}
          <div className="card-frutal">
            <h3 className="text-lg font-bold text-brand-dark-blue mb-4">New vs Returning</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={newVsReturning}
                  cx="50%"
                  cy="50%"
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = outerRadius + 18;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        fill={newVsReturning[index].fill}
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        className="text-[11px] font-semibold"
                      >
                        {value.toFixed(1)}%
                      </text>
                    );
                  }}
                >
                  {newVsReturning.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {newVsReturning.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span>{item.name}: {item.value.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Stats */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Social Media Engagement</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="stat-card">
              <div className="stat-number text-brand-red">17</div>
              <div className="stat-label text-lg">Total Posts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-dark-blue">344</div>
              <div className="stat-label text-lg">X Views</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-light-blue">125</div>
              <div className="stat-label text-lg">YouTube Views</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-yellow">469</div>
              <div className="stat-label text-lg">Digital Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
